import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IdleView from "./pages/Timer/IdleView";
import CountdownView from "./pages/Timer/CountdownView";
import CompletedView from "./pages/CompletedView/CompletedView";
import "./App.css";

function App() {
  const [timerState, setTimerState] = useState("idle"); // "idle" | "running" | "completed"
  const [selectedMinutes, setSelectedMinutes] = useState(null);

  const handleStart = (minutes) => {
    setSelectedMinutes(minutes);
    setTimerState("running");
  };

  const handleReset = () => {
    setTimerState("idle");
    setSelectedMinutes(null);
  };

  const handleComplete = () => {
    // Timer hit 0:00 - switch to completed view
    setTimerState("completed");
  };

  return (
    <div className="page ">
      <div className="page__content">
        <Header />

        {timerState === "idle" && (
          <IdleView
            onStart={handleStart}
            onAddTask={() => console.log("Add task clicked")}
          />
        )}

        {timerState === "running" && (
          <CountdownView
            initialMinutes={selectedMinutes}
            onReset={handleReset}
            onComplete={handleComplete}
          />
        )}

        {timerState === "completed" && <CompletedView />}

        <Footer />
      </div>
    </div>
  );
}

export default App;
