import { useHelper } from "@react-three/drei";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { PointLightHelper } from "three";
import { DirectionalLightHelper } from "three";
import { SpotLightHelper } from "three";

const Lights = () => {
  const light = useRef();
  const point = useRef();
  // useHelper(light, DirectionalLightHelper, 1, "red");
  // useHelper(point, PointLightHelper, 1, "green");
  return (
    <>
      {/* <fog attach="fog" args={["#fff", 65, 100]} /> */}
      <ambientLight intensity={0.1} />
      {/* <directionalLight
        ref={light}
        position={[5, 30, 5]}
        color={"#fff"}
        intensity={1}
      /> */}
      <hemisphereLight args={[0xbccae4, 0x9b9ca2, 0.6]} />
      <directionalLight
        ref={light}
        castShadow
        position={[-16, 25, -16]}
        intensity={0.8}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        lookAt={[0, 15, 0]}
        shadowBias={-0.005}
        color={0xfdb813}
      />
      {/* <pointLight ref={point} position={[0, 15, -10]} intensity={0.5} /> */}
    </>
  );
};

export default Lights;
