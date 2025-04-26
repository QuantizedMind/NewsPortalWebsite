import React from "react";
import NewsCard from "./NewsCard";

const NewsGrid = ({ articles, onArticleClick }) => (
  <div className={window.location.hash === '#bookmarks' ? 'news-grid bookmarks-view' : 'news-grid'}>
    {articles.map((article, idx) => (
      <NewsCard key={article.id} article={article} onClick={onArticleClick} style={{animationDelay:`${idx*0.07}s`}} />
    ))}
  </div>
);

export default NewsGrid;
