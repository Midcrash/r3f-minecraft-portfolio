import React, { Suspense } from "react";
import "../assets/styles/Modal.scss";
import img from "../assets/imgs/github.png";
import { Canvas } from "@react-three/fiber";
import Character from "./three/StaticCharacter";
import Lights from "./three/lights";
import { OrbitControls } from "@react-three/drei";

const Modal = (props) => {
  if (!props.open) {
    return null;
  } else {
    return (
      <div className="modal-container">
        <div
          className="modal-background"
          onClick={() => props.setOpen(false)}
        ></div>
        <div className="modal">
          <div className="modal-left">
            <h2 className="header">Hi, I'm Tyrae</h2>
            <br />
            <p>
              I'm a fullstack developer with a serious passion in creative
              design and logical thinking. I want to create interactive UX and
              cool UI effects/animations. Whilst connecting everything with a
              proper backend!
            </p>
            <br />
            <p>
              Highly motivated individual, problem solver, and always a student.
              Reading daily articles, biking outside, and learning new things
              are some of my hobbies.
            </p>
            <br />
            <p>
              Interested in frontend and backend development and wanting to work
              on significant projects in my future!
            </p>
          </div>
          <div className="modal-right">
            <Canvas
              camera={{
                position: [0, 2, 5],
                fov: 30,
                near: 1,
              }}
              style={{ height: "100%" }}
            >
              <Suspense fallback={null}>
                <Character />
                <Lights />
                <OrbitControls
                  target={[0, 1, 0]}
                  enablePan={false}
                  enableRotate={false}
                  enableZoom={false}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
