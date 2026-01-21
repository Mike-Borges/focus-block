import { useEffect } from "react";
import "./CompletedView.css";
import confetti from "canvas-confetti";
import confettiSound from "../../assets/sounds/horns.wav";

export default function CompletedView({ onNewSession }) {
  const todaysFocusCount = 5;
  const weeklyFocusCount = 18;

  useEffect(() => {
    const shouldConfetti = sessionStorage.getItem("fb_confetti") === "1";
    if (!shouldConfetti) return;

    const audio = new Audio(confettiSound);
    audio.volume = 0.5;
    audio.currentTime = 0;
    audio.play().catch(() => {});

    // Clear immediately so refresh/manual visit won't re-trigger
    sessionStorage.removeItem("fb_confetti");

    confetti({ particleCount: 160, spread: 70, origin: { y: 0.6 } });

    const t1 = setTimeout(() => {
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.55 } });
    }, 250);

    const t2 = setTimeout(() => {
      confetti({ particleCount: 100, spread: 110, origin: { y: 0.5 } });
    }, 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleNewSession = () => {
    onNewSession?.();
  };

  return (
    <section className="completed">
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
