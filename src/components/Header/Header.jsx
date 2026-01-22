import { useState } from "react";
import "./Header.css";

export default function Header({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div
          className="header__logo"
          aria-label="TimeKeeper"
          onClick={() => handleNavigate("home")}
          style={{ cursor: "pointer" }}
        >
          <span className="header__logoBlack">Time</span>
          <span className="header__logoBlue">Keeper</span>
        </div>

        {/* Hamburger button for mobile */}
        <button
          className="header__hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`header__hamburger-line ${isMenuOpen ? "header__hamburger-line--open" : ""}`}
          ></span>
          <span
            className={`header__hamburger-line ${isMenuOpen ? "header__hamburger-line--open" : ""}`}
          ></span>
          <span
            className={`header__hamburger-line ${isMenuOpen ? "header__hamburger-line--open" : ""}`}
          ></span>
        </button>

        {/* Navigation */}
        <nav
          className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
          aria-label="Primary"
        >
          <a
            className="header__link"
            onClick={() => handleNavigate("about")}
            style={{ cursor: "pointer" }}
          >
            About Us
          </a>
          <a className="header__link" href="#">
            Settings
          </a>
          <a className="header__link" href="#">
            Log in
          </a>
        </nav>
      </div>
    </header>
  );
}
