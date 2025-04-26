import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import "../theme.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <span>🌞</span>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
        <span className="slider round"></span>
      </label>
      <span>🌚</span>
    </div>
  );
};

export default ThemeToggle;
