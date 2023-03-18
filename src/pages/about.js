import React, { useState, useEffect } from "react";
import "../assets/styles/About.scss";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const Building = ({ height, delay }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      height: height,
      transition: { duration: 1, delay: delay },
    });
  }, [controls, height, delay]);

  return (
    <motion.div
      className="building"
      initial={{ opacity: 0, height: 0 }}
      animate={controls}
    >
      {/* Add building elements here */}
    </motion.div>
  );
};

const About = () => {
  const buildings = [
    { height: 200, delay: 0.1 },
    { height: 300, delay: 0.4 },
    { height: 150, delay: 0.2 },
    // Add more buildings with different heights and delays
  ];

  return (
    <div className="city-landscape">
      <AnimatePresence>
        {buildings.map((building, index) => (
          <Building
            key={index}
            height={building.height}
            delay={building.delay}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default About;
