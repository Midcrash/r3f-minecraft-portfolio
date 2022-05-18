import React, { Suspense, useState } from "react";
import "../assets/styles/Portfolio.scss";
import { Canvas, useThree } from "@react-three/fiber";
import Lights from "../components/three/lights";
import Model from "../components/three/world";
import Floor from "../components/three/floor";
import { OrbitControls } from "@react-three/drei";
import { useSpring } from "react-spring";

const ZoomWithOrbital = () => {
  const { gl, camera } = useThree();
  useSpring({
    from: {
      z: 30,
    },
    z: 4,
    // React Springs onFrame to onChange
    onChange: (prop) => {
      camera.position.z = prop.value.z;
      // console.log(prop.value.z);
    },
  });

  return (
    // Oribital controls via drei
    <OrbitControls
      args={[camera, gl.domElement]}
      enablePan={true}
      enableZoom={true}
      target={[0, 0, 0]}
    />
  );
};

const Portfolio = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [-5, 4, 4], fov: 40 }}
        style={{ height: "100vh" }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Model hover={hover} setHover={setHover} />
          <Floor />
          <ZoomWithOrbital />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Portfolio;
