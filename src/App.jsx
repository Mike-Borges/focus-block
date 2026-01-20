import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import IdleView from "./pages/Timer/IdleView";
import CountdownView from "./pages/Timer/CountdownView";
import CompletedView from "./pages/CompletedView/CompletedView";
import "./App.css";
function App() {
  const [currentPage, setCurrentPage] = useState("home"); // "home" | "timer" | "completed"
  const [timerState, setTimerState] = useState("idle"); // "idle" | "running" | "completed"
  const [selectedMinutes, setSelectedMinutes] = useState(null);

  const handleGetStarted = () => {
    setCurrentPage("timer");
  };

  const handleStart = (minutes) => {
    setSelectedMinutes(minutes);
    setTimerState("running");
  };

  const handleReset = () => {
    setTimerState("idle");
    setSelectedMinutes(null);
  };

  const handleComplete = () => {
    setTimerState("completed");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header />

        {currentPage === "home" && <Home onGetStarted={handleGetStarted} />}

        {currentPage === "timer" && (
          <>
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
          </>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
