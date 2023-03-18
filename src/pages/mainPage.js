import React from "react";
import "../assets/styles/App.scss";
import MainButton from "../components/mainButton";
import img from "../assets/imgs/Tyrae-Yao.png";

const btnData = [
  {
    text: "Start Portfolio",
    path: "portfolio",
  },
  {
    text: "???",
    path: "",
  },
  {
    text: "GitHub",
    path: "https://github.com/Midcrash/r3f-minecraft-portfolio",
  },
];

const MainPage = () => {
  return (
    <>
      <div className="bg"></div>
      <div className="main-container">
        <div className="title-image-container">
          <img src={img} alt="Top Text" className="title-image" />
        </div>
        <MainButton btnData={btnData} />
      </div>
      <div className="footer-container">
        <div className="footer-text-container">
          <p className="footer-text">Portfolio Beta 0.3</p>
          <p className="footer-text">
            Powered by Love, Passion, and Motivation
          </p>
        </div>
        <div className="footer-text-right">
          <p className="footer-text">Still in Development</p>
          <p className="footer-text">Made by Tyrae Yao :)</p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
