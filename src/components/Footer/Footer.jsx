import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo" aria-label="TimeKeeper">
          <span className="footer__logoBlack">Time</span>
          <span className="footer__logoBlue">Keeper</span>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <a className="footer__link" href="#">Privacy</a>
          <a className="footer__link" href="#">Terms</a>
          <a className="footer__link" href="#">Facebook</a>
          <a className="footer__link" href="#">Instagram</a>
          <a className="footer__link" href="#">Twitter</a>
        </nav>
      </div>
    </footer>
  );
}
