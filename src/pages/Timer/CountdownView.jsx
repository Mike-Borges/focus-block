import { useState, useEffect, useRef } from "react";
import "./CountdownView.css";
import { addCompletedSession } from "../../utils/focusStorage";

export default function CountdownView({ initialMinutes, onReset, onComplete }) {
  const totalSeconds = initialMinutes * 60;
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            // Persist the completed session (localStorage History )
            addCompletedSession(initialMinutes);
            sessionStorage.setItem("fb_confetti", "1");
            if (onComplete) onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, secondsLeft, onComplete, initialMinutes]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (onReset) onReset();
  };

  // Calculate progress percentage (0 to 100)
  const progress = ((totalSeconds - secondsLeft) / totalSeconds) * 100;

  return (
    <section className="countdown">
      <div className="countdown__container">
        {/* Circular Progress Ring */}
        <div className="countdown__ring">
          <svg className="countdown__svg" viewBox="0 0 200 200">
            {/* Background circle */}
            <circle
              className="countdown__circle countdown__circle--bg"
              cx="100"
              cy="100"
              r="85"
            />
            {/* Progress circle */}
            <circle
              className="countdown__circle countdown__circle--progress"
              cx="100"
              cy="100"
              r="85"
              style={{
                strokeDashoffset: 534 - (534 * progress) / 100,
              }}
            />
          </svg>

          <div className="countdown__time">{formatTime(secondsLeft)}</div>
        </div>
        {/* Control buttons */}
        <div className="countdown__controls">
          <button
            type="button"
            className="countdown__btn countdown__btn--pause"
            onClick={togglePause}
          >
            <span className="countdown__icon" aria-hidden="true">
              {isPaused ? "▶" : "❚❚"}
            </span>
            {isPaused ? "Resume" : "Pause"}
          </button>

          <button
            type="button"
            className="countdown__btn countdown__btn--reset"
            onClick={handleReset}
          >
            <span className="countdown__icon" aria-hidden="true">
              ↻
            </span>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
