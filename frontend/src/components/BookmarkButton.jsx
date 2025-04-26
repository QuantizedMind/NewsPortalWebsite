import React, { useState, useCallback } from "react";
import { useBookmarks } from "../contexts/BookmarkContext";

const BookmarkButton = ({ articleId }) => {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const isBookmarked = bookmarks.includes(articleId);
  const [loading, setLoading] = useState(false);

  // Prevent rapid double toggling
  const handleToggle = useCallback(() => {
    if (loading) return;
    setLoading(true);
    toggleBookmark(articleId);
    // Wait for localStorage update (simulate async, since setState is async)
    setTimeout(() => setLoading(false), 200);
  }, [loading, toggleBookmark, articleId]);

  return (
    <button
      className={`bookmark-btn${isBookmarked ? " bookmarked" : ""}`}
      title={isBookmarked ? "Remove Bookmark" : "Read Later"}
      onClick={handleToggle}
      disabled={loading}
      aria-pressed={isBookmarked}
    >
      {loading ? (isBookmarked ? "★" : "☆") : (isBookmarked ? "★" : "☆")}
    </button>
  );
};

export default BookmarkButton;
