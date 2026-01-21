import { useEffect, useMemo, useState } from "react";
import "./CompletedView.css";
import confetti from "canvas-confetti";
import confettiSound from "../../assets/sounds/horns.wav";
import {
  getTodaysCompletedCount,
  getThisWeeksStats,
} from "../../utils/focusStorage";

function formatOrdinal(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) return `${n}`;

  const mod100 = num % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${num}th`;

  switch (num % 10) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}

function formatMinutesToSeconds(totalMinutes) {
  const totalSeconds = Math.round(totalMinutes * 60);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const parts = [];

  if (minutes > 0) {
    parts.push(`${minutes} ${minutes === 1 ? "minute" : "minutes"}`);
  }

  if (seconds > 0) {
    parts.push(`${seconds} ${seconds === 1 ? "second" : "seconds"}`);
  }
  // Add 'and' for additional seconds
  if (parts.length === 0) {
    return "0 seconds";
  }

  return parts.join(" and ");
}

export default function CompletedView({ onNewSession }) {
  // to avoid ESLint warnings, initialized via lazy useState instead of a
  // mount-only useEffect + setState calling synchronously inside effects ("you may not need an UseEffect here")
  const [todaysFocusCount] = useState(() => getTodaysCompletedCount());
  const [weekStats] = useState(() => getThisWeeksStats());
  const [weeklyFocusCount] = useState(() => weekStats.weeklyCount);
  const [weeklyFocusMinutes] = useState(() => weekStats.weeklyMinutes);

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

  const todaysOrdinal = useMemo(
    () => formatOrdinal(todaysFocusCount),
    [todaysFocusCount],
  );

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
            That&apos;s your {todaysOrdinal} focus session today.
          </p>

          <p className="completed__meta">
            You have successfully completed {weeklyFocusCount} focus sessions in
            this week!
          </p>

          <p className="completed__meta">
            You have focused a total of{" "}
            {formatMinutesToSeconds(weeklyFocusMinutes)} this week!
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
