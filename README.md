# 📰 KhabriBaba News Portal

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status"/>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"/>
  <img src="https://img.shields.io/badge/backend-FastAPI-blue" alt="Backend: FastAPI"/>
  <img src="https://img.shields.io/badge/frontend-React-blue" alt="Frontend: React"/>
</p>

---

## 📸 Screenshots

<p align="center">
  <img src="screenshots/README_SCREENSHOT_1.png" alt="Homepage Screenshot" width="700"/>
  <!-- Add more screenshots as needed -->
</p>


Welcome to **KhabriBaba News Portal** – your one-stop destination for the latest news, intelligent summaries, and a seamless reading experience!  
This project combines modern web technologies, AI-powered news summarization, and a user-friendly interface to keep you informed and engaged.

---

## 🚀 Features

- **Category-Based News**: Browse news by categories like Politics, Business, Tech, Arts, Science, Health, and Sports.
- **AI-Powered Summaries**: News articles are automatically summarized by an AI agent for quick and easy reading.
- **Bookmarking**: Save your favorite articles for later with a single click.
- **Responsive UI**: Beautiful, modern, and mobile-friendly interface.
- **FastAPI Backend**: Efficient API serving news and summaries.
- **React Frontend**: Lightning-fast and interactive user experience.

---

## 🛠️ Tech Stack

- **Frontend**: React, JavaScript, CSS
- **Backend**: FastAPI (Python), DuckDuckGo News API, OpenAI/CrewAI for summarization
- **Other**: Local Storage for bookmarks, CORS for seamless API access

---

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/QuantizedMind/NewsPortalWebsite.git
cd NewsPortalWebsite
```

### 2. Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
# Set up your .env file with OPENAI_API_KEY and (optionally) OPENAI_API_BASE
uvicorn main:app --reload
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```
- The frontend will be available at [http://localhost:3000](http://localhost:3000)
- The backend runs at [http://localhost:8000](http://localhost:8000)

---

## 🧩 Environment Variables

Create a `.env` file in the `backend` directory:

```
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_API_BASE=your_openai_api_base_url_here (optional)
```

---

## 💡 Project Structure

```
NewsPortalWebsite/
│
├── backend/        # FastAPI backend, news fetching & AI summarization
├── frontend/       # React frontend
├── .gitignore
└── README.md
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repo and submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

**Enjoy using KhabriBaba News Portal! Stay informed, stay curious.**
