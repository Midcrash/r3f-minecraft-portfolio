import React, { useState } from "react";
import "../assets/styles/App.scss";
import btnSound from "../assets/sounds/button-press.mp3";
import { Link } from "react-router-dom";
const btnAudio = new Audio(btnSound);

const MainButton = (props) => {
  const playSound = () => {
    btnAudio.currentTime = 0;
    btnAudio.play();
  };

  return (
    <div className="main-text-container">
      {props.btnData.map((data) => (
        <div
          className="main-text"
          key={data.text}
          onClickCapture={() => playSound()}
        >
          {data.text !== "GitHub" ? (
            <Link className="title-text" to={data.path}>
              {data.text}
            </Link>
          ) : (
            <a
              className="title-text"
              href="https://github.com/Midcrash/r3f-minecraft-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              {data.text}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainButton;
