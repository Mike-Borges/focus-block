import { useNavigate } from "react-router-dom";
import "./CompletedView.css";

export default function CompletedView() {
  const navigate = useNavigate();

  // Later you can pass these in as props / state from your app logic
  const todaysFocusCount = 5;
  const weeklyFocusCount = 18;

  const handleNewSession = () => {
    navigate("/timer");
  };

  return (
    <section className="completed">
      {/* Background image should be on the page body area, not header/footer */}
      <div className="completed__main">
        <div className="completed__content">
          <div className="completed__timer">00:00</div>

          <h1 className="completed__title">Great Job!!!</h1>

          <p className="completed__subtitle">
            That&apos;s your {todaysFocusCount}th focus session today.
          </p>

          <p className="completed__meta">
            You have successfully completed {weeklyFocusCount} focus sessions in
            this week!
          </p>

          <button
            type="button"
            className="completed__button"
            onClick={handleNewSession}
          >
            New Session
          </button>
        </div>
      </div>
    </section>
  );
}
