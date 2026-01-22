import { useMemo, useState } from "react";
import "./IdleView.css";

const PRESETS = [0.1, 25, 45];

function formatMMSS(minutes) {
  const mm = String(minutes).padStart(2, "0");
  return `${mm}:00`;
}

function normalizeInitial(initialMinutes) {
  return PRESETS.includes(initialMinutes) ? initialMinutes : 25;
}

function IdleView({ initialMinutes = 25, onStart, onAddTask }) {
  const [selectedMinutes, setSelectedMinutes] = useState(
    normalizeInitial(initialMinutes),
  );

  const smallMinutes = useMemo(() => {
    return PRESETS.filter((m) => m !== selectedMinutes).sort((a, b) => a - b);
  }, [selectedMinutes]);

  const handleStart = () => {
    if (typeof onStart === "function") {
      onStart(selectedMinutes);
    }
  };

  const handleAddTask = () => {
    if (typeof onAddTask === "function") {
      onAddTask();
    }
  };

  return (
    <section className="idle">
      <div className="idle__panel">
        <div className="idle__topRow" role="group" aria-label="Timer presets">
          {smallMinutes.map((minutes) => (
            <button
              key={minutes}
              type="button"
              className="idle__pill"
              onClick={() => setSelectedMinutes(minutes)}
              aria-label={`Select ${minutes} minutes`}
            >
              {formatMMSS(minutes)}
            </button>
          ))}
        </div>

        <div className="idle__selected" aria-live="polite">
          {formatMMSS(selectedMinutes)}
        </div>

        <button type="button" className="idle__start" onClick={handleStart}>
          Start
        </button>
      </div>
    </section>
  );
}
export default IdleView;
