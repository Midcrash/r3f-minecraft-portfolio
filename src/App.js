import logo from "./logo.svg";
import "./assets/styles/App.scss";
import img from "./assets/imgs/Tyrae-Yao.png";

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="main-container">
        <div className="title-image-container">
          <img src={img} alt="Top Text" className="title-image" />
        </div>
        <div className="main-text-container">
          <div className="main-text">
            <p className="title-text">Start Portfolio</p>
          </div>
          <div className="main-text">
            <p className="title-text">Contact Me</p>
          </div>
          <div className="main-text">
            <p className="title-text">???</p>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-text-container">
          <p className="footer-text">Portfolio 1.0.0</p>
          <p className="footer-text">
            Powered by Love, Passion, and Motivation
          </p>
        </div>
        <div className="footer-text-right">
          <p className="footer-text">Made by Tyrae Yao :)</p>
        </div>
      </div>
    </div>
  );
}

export default App;
