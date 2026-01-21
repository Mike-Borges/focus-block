import "./Header.css";

export default function Header({ onNavigate }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div
          className="header__logo"
          aria-label="TimeKeeper"
          onClick={() => onNavigate("home")}
          style={{ cursor: "pointer" }}
        >
          <span className="header__logoBlack">Time</span>
          <span className="header__logoBlue">Keeper</span>
        </div>

        <nav className="header__nav" aria-label="Primary">
          <a
            className="header__link"
            onClick={() => onNavigate("about")}
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
