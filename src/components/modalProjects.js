import React, { useState } from "react";
import logo from "../assets/imgs/logo.png";
import MCLogo from "../assets/imgs/MCLogo.png";
import { motion, AnimatePresence } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 1.5,
      duration: 0.35,
    },
  },
};

const ModalProjects = (props) => {
  return (
    <AnimatePresence initial={false}>
      {props.isActive && (
        <div className="modal-container">
          <motion.svg
            className="svg center"
            width="75%"
            height="75%"
            viewBox="0 0 75% 75%"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.line
              x1="0"
              y1="100%"
              x2="0"
              y2="0"
              stroke-width="5"
              stroke="#fff"
              variants={draw}
              exit={{
                transition: {
                  duration: 1.5,
                  type: "spring",
                  bounce: 0,
                  delay: 0.4,
                },
                y2: "100%",
              }}
            />
            <motion.line
              x1="100%"
              y1="100%"
              x2="0"
              y2="100%"
              stroke-width="5"
              stroke="#fff"
              variants={draw}
              exit={{
                transition: {
                  duration: 1.5,
                  type: "spring",
                  bounce: 0,
                  delay: 0.4,
                },
                x2: "100%",
              }}
            />
            <motion.line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke-width="5"
              stroke="#fff"
              variants={draw}
              exit={{
                transition: {
                  duration: 1.5,
                  type: "spring",
                  bounce: 0,
                  delay: 0.4,
                },
                x2: "0%",
              }}
            />
            <motion.line
              x1="100%"
              y1="0"
              x2="100%"
              y2="100%"
              stroke-width="5"
              stroke="#fff"
              variants={draw}
              exit={{
                transition: {
                  duration: 1.5,
                  type: "spring",
                  bounce: 0,
                  delay: 0.4,
                },
                y2: "0%",
              }}
            />
          </motion.svg>
          <motion.div
            className="modal-background center"
            key="modal-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.35, delay: 1.5 } }}
            onClick={(e) => {
              e.stopPropagation();
              props.setIsActive(false);
              props.setOpen1(false);
            }}
          ></motion.div>
          <motion.div
            className="modal center"
            key="modal"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: 1,

              transition: { duration: 1, delay: 1.5 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
          >
            <div className="project-container">
              <div className="project-items">
                <a
                  className="project-item"
                  href="https://eftguessr.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="MClogo" src={MCLogo} className="item-logo" />
                  <div>
                    <p className="item-title">EFT Guessr</p>
                    <p className="item-desc">
                      Full Stack Application - Firebase, Webpack, Vanilla JS,
                      HTML, CSS
                    </p>
                  </div>
                </a>
                <a
                  className="project-item"
                  href="https://webworkify.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="MClogo" src={MCLogo} className="item-logo" />
                  <div>
                    <p className="item-title">WebWorkify.</p>
                    <p className="item-desc">
                      Front End Application - React, R3F, Drei, React Router
                    </p>
                  </div>
                </a>
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
                      Bootstrap, REST Api{" "}
                    </p>
                  </div>
                </a>
                <a
                  className="project-item"
                  href="https://github.com/Midcrash/next-square-dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="MClogo" src={MCLogo} className="item-logo" />
                  <div>
                    <p className="item-title">Square Dashboard (WIP)</p>
                    <p className="item-desc">
                      Full Stack Application - Next.Js, React, Firebase, Square
                      API, TailwindCSS, REST Apis
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalProjects;
