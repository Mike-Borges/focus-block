import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo" aria-label="TimeKeeper">
          <span className="header__logoBlack">Time</span>
          <span className="header__logoBlue">Keeper</span>
        </div>

        <nav className="header__nav" aria-label="Primary">
          <a className="header__link" href="#">About Us</a>
          <a className="header__link" href="#">Settings</a>
          <a className="header__link" href="#">Log in</a>
        </nav>
      </div>
    </header>
  );
}
