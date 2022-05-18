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
          <Link className="title-text" to={data.path}>
            {data.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MainButton;
