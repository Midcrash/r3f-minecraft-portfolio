import React, { useEffect, useRef, useState } from "react";
import MainIsland from "./MainIsland";
import AboutMeIsland from "./AboutMeIsland";
import ProjectIsland from "./ProjectIsland";
import { Billboard, Text } from "@react-three/drei";
import Modal from "../modal";

const World = (props) => {
  const group = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
    // textRef.current.visible = hovered ? true : false;
  }, [hovered]);

  const hoverIslandEnter = (island) => {
    setHovered(true);
    // console.log(textRef);
  };

  const hoverIslandExit = () => {
    setHovered(false);
  };

  const fontProps = {
    font: "./1_Minecraft-Regular.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
    outlineColor: "black",
    outlineWidth: 0.1,
  };

  return (
    <>
      <group ref={group}>
        <MainIsland
          hoverIslandEnter={hoverIslandEnter}
          hoverIslandExit={hoverIslandExit}
          fontProps={fontProps}
        />
        <AboutMeIsland
          hoverIslandEnter={hoverIslandEnter}
          hoverIslandExit={hoverIslandExit}
          fontProps={fontProps}
          setOpen={props.setOpen}
          hovered={hovered}
        />
        <ProjectIsland
          hoverIslandEnter={hoverIslandEnter}
          hoverIslandExit={hoverIslandExit}
          fontProps={fontProps}
          setOpen1={props.setOpen1}
        />
      </group>
    </>
  );
};

export default World;
