import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IdleView from "./pages/Timer/IdleView";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <IdleView
          onStart={(minutes) => console.log("Start timer for:", minutes)}
          onAddTask={() => console.log("Add task clicked")}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
