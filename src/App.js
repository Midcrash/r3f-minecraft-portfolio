import "./assets/styles/App.scss";
import Portfolio from "./pages/portfolio";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import About from "./pages/about";
import Projects from "./pages/projects";

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route exact path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
