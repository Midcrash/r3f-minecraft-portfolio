import React, { Suspense, useRef, useState } from "react";
import "../assets/styles/Portfolio.scss";
import { Canvas, useThree } from "@react-three/fiber";
import Lights from "../components/three/lights";
import Model from "../components/three/world";
import Floor from "../components/three/floor";
import {
  OrbitControls,
  Stars,
  softShadows,
  Sky,
  Loader,
  Float,
} from "@react-three/drei";
import { useSpring, config } from "react-spring";
import Modal from "../components/modal";

softShadows();

const ZoomWithOrbital = () => {
  const { gl, camera } = useThree();
  useSpring({
    from: {
      y: 100,
    },
    config: { mass: 1, tension: 280, friction: 120 },
    y: 25,
    // React Springs onFrame to onChange
    onChange: (prop) => {
      camera.position.y = prop.value.y;
      // console.log(prop.value.z);
    },
  });

  return (
    // Oribital controls via drei
    <OrbitControls
      args={[camera, gl.domElement]}
      enablePan={false}
      enableZoom={false}
      enableRotate={true}
      target={[0, 15, 0]}
    />
  );
};

const Portfolio = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [30, 35, 25], fov: 30, near: 1 }}
        style={{ height: "100vh" }}
        onCreated={(canvas) => {
          // canvas.gl.physicallyCorrectLights = true;
        }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Model hover={hover} setHover={setHover} setOpen={setOpen} />
          {/* <Floor /> */}
          <ZoomWithOrbital />
        </Suspense>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Sky
          distance={450000}
          sunPosition={[-10000, -1, -10000]}
          inclination={0}
          azimuth={0}
          rayleigh={2}
          mieCoefficient={0.093}
          mieDirectionalG={0.939}
        />
      </Canvas>
      <Loader />
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default Portfolio;
