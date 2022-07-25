import React from "react";
import logo from "../assets/imgs/logo.png";
import MCLogo from "../assets/imgs/MCLogo.png";

const ModalProjects = (props) => {
  if (!props.open1) {
    return null;
  } else {
    return (
      <div className="modal-container">
        <div
          className="modal-background"
          onClick={() => props.setOpen1(false)}
        ></div>
        <div className="modal">
          <div className="project-container">
            <div className="project-items">
              <div className="item-container">
                <a
                  className="project-item"
                  href="https://github.com/Midcrash/Inventory-Hero"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="logo" src={logo} className="item-logo" />
                  <div>
                    <p className="item-title">Inventory Hero</p>
                    <p className="item-desc">
                      Full Stack Application - AWS Relational Database, PHP,
                      Bootstrap{" "}
                    </p>
                  </div>
                </a>
                <a
                  className="project-item"
                  href="https://github.com/Midcrash/r3f-minecraft-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="MClogo" src={MCLogo} className="item-logo" />
                  <div>
                    <p className="item-title">Square Dashboard</p>
                    <p className="item-desc">
                      Full Stack Application - Next.Js, React, Firebase, Square
                      API, TailwindCSS
                    </p>
                  </div>
                </a>
                <a
                  className="project-item"
                  href="https://github.com/Midcrash/r3f-minecraft-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="MClogo" src={MCLogo} className="item-logo" />
                  <div>
                    <p className="item-title">Minecraft Portfolio</p>
                    <p className="item-desc">
                      Front End Application - React, R3F, Drei, React Router
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default ModalProjects;
