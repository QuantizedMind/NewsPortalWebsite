import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { BookmarkProvider } from "./contexts/BookmarkContext";

import ThemeToggle from "./components/ThemeToggle";
import CategoryFilter from "./components/CategoryFilter";
import NewsGrid from "./components/NewsGrid";
import NewsModal from "./components/NewsModal";
import AboutUs from "./components/AboutUs";
import "./App.css";
import khabribabaLogo from "./assets/khabribaba-logo.png";

// Flip background component
const FlipBackground = () => {
  const { theme } = useTheme();
  return <div className={`flip-bg${theme === "dark" ? " flipped" : ""}`}></div>;
};

function AppContent() {
  const categories = ["All", "Politics", "Business", "Tech", "Arts", "Science", "Health", "Sports"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalArticle, setModalArticle] = useState(null);
  const [viewBookmarks, setViewBookmarks] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [articlesByCategory, setArticlesByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // Map frontend categories to backend-friendly queries
    const categoryQueryMap = {
      "Tech": "Technology",
      "Science": "Research"
    };
    // Fetch top 9 news for each category except 'All'
    const fetchCategory = (cat) => {
      if (cat === "All") return Promise.resolve([]);
      const backendQuery = categoryQueryMap[cat] || cat;
      return fetch(`http://localhost:8000/api/news?q=${encodeURIComponent(backendQuery)}&limit=9`)
        .then(res => res.json())
        .then(data => {
          if (!data.articles || !Array.isArray(data.articles)) return [];
          return data.articles.map((a, idx) => ({ id: a.id || idx + 1, ...a, category: cat }));
        })
        .catch(() => []);
    };
    Promise.all(categories.filter(cat => cat !== "All").map(fetchCategory)).then(results => {
      const byCategory = {};
      categories.forEach((cat, i) => {
        if (cat === "All") return;
        byCategory[cat] = results[i - 1] || [];
      });
      // For 'All', merge all articles, deduplicate by id
      const allArticles = [].concat(...Object.values(byCategory));
      const deduped = Array.from(new Map(allArticles.map(a => [a.url, a])).values());
      byCategory["All"] = deduped;
      setArticlesByCategory(byCategory);
      setLoading(false);
    });
  }, []);

  // Get bookmarks from localStorage
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");



  // Use articlesByCategory for filtering
  const filteredArticles = (articlesByCategory[selectedCategory] || []).filter(article =>
    !viewBookmarks || bookmarks.includes(article.id)
  );

  return (
    <div className="app-content">
      <header className="main-header">
        <div className="header-left">
          <span className="logo"><img src={khabribabaLogo} alt="KhabriBaba Logo" style={{height:'2.2rem',verticalAlign:'middle',marginRight:'0.7rem'}}/>KhabriBaba</span>
        </div>
        <nav className="main-nav">
        </nav>
        <div className="header-right">
          <button className="bookmark-toggle" onClick={() => { setShowAbout(false); setViewBookmarks(false); }}>
            All Articles
          </button>
          <button className="bookmark-toggle" style={{marginLeft: '1rem'}} onClick={() => { setShowAbout(false); setViewBookmarks(true); }}>
            Bookmarked
          </button>
          <button className="bookmark-toggle" style={{marginLeft: '1rem'}} onClick={() => setShowAbout(true)}>
            About Us
          </button>
          <ThemeToggle />
        </div>
      </header>
      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      <main>
        {loading ? (
          <div>Loading news...</div>
        ) : error ? (
          <div style={{ color: 'red' }}>{error}</div>
        ) : showAbout ? (
          <AboutUs />
        ) : (
          <React.Fragment>
            <NewsGrid
              articles={filteredArticles}
              onArticleClick={setModalArticle}
            />
            <NewsModal article={modalArticle} onClose={() => setModalArticle(null)} />
          </React.Fragment>
        )}
      </main>
      <footer className="main-footer">
        <div className="footer-content">
          <img src={khabribabaLogo} alt="KhabriBaba Logo" style={{height:'2rem',marginRight:'0.8rem'}}/>
          <span> 2025 KhabriBaba. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BookmarkProvider>
        <div className="app-container">
          <FlipBackground />
          <AppContent />
        </div>
      </BookmarkProvider>
    </ThemeProvider>
  );
}

export default App;
