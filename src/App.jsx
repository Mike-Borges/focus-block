import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IdleView from "./pages/Timer/IdleView";
import CompletedView from "./pages/CompletedView/CompletedView";

import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/timer" element={<IdleView />} />
          <Route path="/completed" element={<CompletedView />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
             <Footer />
      </div>
    </div>
  );
}

export default App;
