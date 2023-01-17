import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="nav">
        <div className="logoArea">
          <h2>Leets Quizz</h2>
        </div>
        <div className="navItemArea">
          <NavLink
            to="/topics"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Topics
          </NavLink>
          <NavLink to="/staticties">Staticties</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
