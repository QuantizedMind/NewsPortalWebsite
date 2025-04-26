import React from "react";
import BookmarkButton from "./BookmarkButton";

const NewsModal = ({ article, onClose }) => {
  if (!article) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <img src={article.image} alt={article.title} className="modal-thumb" />
        <h2>{article.title}</h2>
        <div className="modal-meta">
          <span>{article.author}</span>
          <span>{article.time}</span>
          <BookmarkButton articleId={article.id} />
        </div>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default NewsModal;
