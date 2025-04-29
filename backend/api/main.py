import os
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from duckduckgo_search import DDGS
from crewai import Agent, Crew, Task
import openai
import datetime

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_API_BASE = os.getenv("OPENAI_API_BASE")

openai.api_key = OPENAI_API_KEY
if OPENAI_API_BASE:
    openai.api_base = OPENAI_API_BASE

app = FastAPI()

from fastapi import Request
from fastapi.responses import JSONResponse

# Allow frontend dev server (localhost:3000) to access API
app.add_middleware(
    CORSMiddleware,
    # allow_origins =["*"],
    allow_origins=[
        "http://localhost:3000",
        "https://news-portal-website-g20lighdp-roshans-projects-e353dd8d.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# CrewAI agent for summarizing news
class NewsSummarizerAgent(Agent):
    def act(self, article):
        # Use OpenAI to summarize description if needed
        body = article.get('body', '')
        prompt = f"Summarize this news article in 30 words or less: {body}"
        try:
            response = openai.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": prompt}],
                max_tokens=60,
                temperature=0.7
            )
            # The new API returns an object with .choices, each having .message.content
            summary = response.choices[0].message.content.strip()
            return summary
        except Exception as e:
            print(f"Error summarizing article: {e}")
            return body[:120] + '...'

@app.get("/api/news")
def get_news(q: str = Query("latest news", description="Search query for news"), limit: int = 10):
    ddgs = DDGS()
    news_results = ddgs.news(q, max_results=limit)
    articles = []
    summarizer = NewsSummarizerAgent(
        role="News Summarizer",
        goal="Summarize news articles concisely for display in a news portal.",
        backstory="An expert AI agent that summarizes news article bodies for a modern news website."
    )
    # summarizer = None
    for idx, item in enumerate(news_results):
        # DuckDuckGo news usually has: title, body, url, image, date, source
        article = {
            "id": idx + 1,
            "title": item.get("title", "Untitled"),
            "description": summarizer.act(item) if item.get("body") else item.get("title", "No description"),
            "image": item.get("image", "https://source.unsplash.com/400x200/?news,world"),
            "author": item.get("source", "Unknown"),
            "time": item.get("date", ""),
            "url": item.get("url", ""),
            "category": item.get("category", "General")
        }
        articles.append(article)
    return {"articles": articles}

@app.post("/api/search")
async def search_news(request: Request):
    try:
        data = await request.json()
        query = data.get("query", "").strip()
        limit = int(data.get("limit", 5))
        if not query:
            return JSONResponse(status_code=400, content={"error": "Query is required."})
        ddgs = DDGS()
        news_results = ddgs.news(query, max_results=limit)
        articles = []
        for idx, item in enumerate(news_results):
            article = {
                "id": idx + 1,
                "title": item.get("title", "Untitled"),
                "description": item.get("body", "No description"),
                "image": item.get("image", "https://source.unsplash.com/400x200/?news,world"),
                "author": item.get("source", "Unknown"),
                "time": item.get("date", ""),
                "url": item.get("url", ""),
                "category": item.get("category", "General")
            }
            articles.append(article)
        return {"articles": articles}
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
