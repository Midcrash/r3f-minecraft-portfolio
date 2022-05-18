import logo from "./logo.svg";
import "./assets/styles/App.scss";
import img from "./assets/imgs/Tyrae-Yao.png";
import Portfolio from "./pages/portfolio";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";

function App() {
  return (
    <Routes>
      <Route path="/portfolio" element={<Portfolio />} />
      <Route exact path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
