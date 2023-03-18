import React, { useState, useEffect } from "react";
import "../assets/styles/Modal.scss";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  visible: {
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.05 },
  },
  hidden: {
    y: 200,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    y: 200,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  hidden: { opacity: 0, y: -50 },
  exit: { opacity: 0, y: -50 },
};

const myComponentStyle = {
  color: "white",
  backgroundColor: "transparent",
};

const Modal = (props) => {
  const [numItems, setNumItems] = useState(getInitialNumItems);

  function getInitialNumItems() {
    const width = window.innerWidth;
    if (width <= 768) {
      return 25;
    } else if (width > 1200) {
      return 15;
    } else {
      return 9;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setNumItems(25);
      } else if (width >= 1200) {
        setNumItems(15);
      } else {
        setNumItems(9);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <AnimatePresence>
      {props.isActive && (
        <div className="modal-container">
          <motion.div
            className="svg center"
            width="75%"
            height="75%"
            viewBox="0 0 75% 75%"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <ul>
              {[...Array(numItems)].map((_, index) => (
                <motion.li
                  key={index}
                  className="box"
                  variants={itemVariants}
                ></motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="modal-background center"
            key="modal-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.35, delay: 1 } }}
            onClick={() => {
              props.setOpen(false);
              props.setIsActive(false);
            }}
          ></motion.div>
          <motion.div
            className="modal center"
            key="modal"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: 1,

              transition: { duration: 1, delay: 1 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
            style={myComponentStyle}
          >
            <div className="about-container">
              <h2 className="about-header">Hi, I'm Tyrae</h2>
              <p>I am a Full Stack Developer with a few years of experience!</p>
              <div className="about-left">
                <p>Frontend Skills</p>
                <p>HTML, CSS, JavaScript, React</p>
              </div>
              <div className="about-right">
                <p>Backend Skills</p>
                <p>Firebase, SQL, PHP, ExpressJS</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
