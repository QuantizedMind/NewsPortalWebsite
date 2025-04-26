import React from "react";

const categories = [
  "All", "Politics", "Business", "Tech", "Arts", "Science", "Health", "Sports"
];

const CategoryFilter = ({ selected, onSelect }) => (
  <div className="category-filter">
    {categories.map((cat) => (
      <button
        key={cat}
        className={`category-btn${selected === cat ? " active" : ""}`}
        onClick={() => onSelect(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
