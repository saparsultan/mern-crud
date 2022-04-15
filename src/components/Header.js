import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <header className="header">
        <Link to="/" className="header__logo">MERN CRUD</Link>
        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/">Главная</Link>
            </li>
            <li className="nav__item">
              <Link to="/">О компании</Link>
            </li>
            <li className="nav__item">
              <Link to="/">Контакты</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
