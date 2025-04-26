import React from "react";
import BookmarkButton from "./BookmarkButton";

const NewsCard = ({ article, onClick, style }) => (
  <div className="news-card" onClick={() => onClick(article)} style={style}>
    <img src={article.image} alt={article.title} className="news-thumb" />
    <div className="news-content">
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <div className="news-meta">
        <span>{article.author}</span>
        <span>{article.time}</span>
        <BookmarkButton articleId={article.id} />
      </div>
    </div>
  </div>
);

export default NewsCard;
