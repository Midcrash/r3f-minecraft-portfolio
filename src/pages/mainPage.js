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
    text: "Contact Me",
    path: "link here",
  },
  {
    text: "???",
    path: "/",
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
          <p className="footer-text">Portfolio Beta 0.2</p>
          <p className="footer-text">
            Powered by Love, Passion, and Motivation
          </p>
        </div>
        <div className="footer-text-right">
          <p className="footer-text">Made by Tyrae Yao :)</p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
