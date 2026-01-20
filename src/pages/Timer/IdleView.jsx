import { useMemo, useState } from "react";
import "./IdleView.css";

const PRESETS = [15, 25, 45];

function formatMMSS(minutes) {
  const mm = String(minutes).padStart(2, "0");
  return `${mm}:00`;
}

function normalizeInitial(initialMinutes) {
  return PRESETS.includes(initialMinutes) ? initialMinutes : 25;
}

/**
 * IdleView (Desktop-Home Idle)
 * UI behavior:
 * - Two small buttons at top (left/right)
 * - One large selected time in the middle
 * - Clicking a small button swaps it with the large selected time
 * - Start triggers onStart(selectedMinutes)
 */
export default function IdleView({ initialMinutes = 25, onStart, onAddTask }) {
  const initialSelected = normalizeInitial(initialMinutes);

  //   smallLeft = 15, smallRight = 45, selected = 25
  const initialSmall = useMemo(() => {
    const remaining = PRESETS.filter((m) => m !== initialSelected);
    // For this project we expect exactly 2 remaining presets
    return [remaining[0], remaining[1]];
  }, [initialSelected]);

  const [selectedMinutes, setSelectedMinutes] = useState(initialSelected);
  const [smallMinutes, setSmallMinutes] = useState(initialSmall); // [left, right]

  const handleSmallClick = (index) => {
    const clicked = smallMinutes[index];
    if (clicked === selectedMinutes) return;

    // Swap: clicked small -> becomes selected, previous selected -> goes into clicked slot
    setSmallMinutes((prev) => {
      const next = [...prev];
      next[index] = selectedMinutes;
      return next;
    });
    setSelectedMinutes(clicked);
  };

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
          <button
            type="button"
            className="idle__pill"
            onClick={() => handleSmallClick(0)}
            aria-label={`Select ${smallMinutes[0]} minutes`}
          >
            {formatMMSS(smallMinutes[0])}
          </button>

          <button
            type="button"
            className="idle__pill"
            onClick={() => handleSmallClick(1)}
            aria-label={`Select ${smallMinutes[1]} minutes`}
          >
            {formatMMSS(smallMinutes[1])}
          </button>
        </div>

        <div className="idle__selected" aria-live="polite">
          {formatMMSS(selectedMinutes)}
        </div>

        <button type="button" className="idle__start" onClick={handleStart}>
          Start
        </button>
      </div>

      <button type="button" className="idle__addTask" onClick={handleAddTask}>
        <span className="idle__addIcon" aria-hidden="true">
          ⊕
        </span>
        Add task
      </button>
    </section>
  );
}
