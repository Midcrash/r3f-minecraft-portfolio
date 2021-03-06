/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useEffect, useRef, useState } from "react";
import { Billboard, Text, useGLTF } from "@react-three/drei";
import HoverText from "./HoverText";

const data = {
  position: [0, 15, 0],
  islandName: "Back",
};

export default function Model(props) {
  const [visible, setVisible] = useState(false);
  const group = useRef();
  const { nodes, materials } = useGLTF("../../../MainIsland.glb");

  const backToHome = () => {
    document.location.href = "/";
  };

  return (
    <>
      <HoverText visible={visible} fontProps={props.fontProps} data={data} />
      <group
        ref={group}
        dispose={null}
        onPointerEnter={() => {
          props.hoverIslandEnter("MainIsland");
          setVisible(true);
        }}
        onPointerLeave={() => {
          props.hoverIslandExit("MainIsland");
          setVisible(false);
        }}
        onClick={() => {
          backToHome();
        }}
      >
        <mesh
          receiveShadow
          castShadow
          geometry={nodes["minecraft_block-sandstone_top002"].geometry}
          material={materials["minecraft_block-sandstone_top"]}
          position={[70, 55, -35.72]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes["minecraft_block-anvil_top"].geometry}
          material={materials["minecraft_block-anvil_top"]}
          position={[70, 55, -35.72]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes["minecraft_block-stone_bricks002"].geometry}
          material={materials["minecraft_block-stone_bricks"]}
          position={[70, 55, -35.72]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes["minecraft_block-torch"].geometry}
          material={materials["minecraft_block-torch"]}
          position={[70, 55, -35.72]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          receiveShadow
          geometry={nodes["minecraft_block-grass_block_side002"].geometry}
          material={materials["minecraft_block-grass_block_side"]}
          position={[70, 55, -35.72]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          receiveShadow
          geometry={nodes["minecraft_block-dirt002"].geometry}
          material={materials["minecraft_block-dirt"]}
          position={[70, 55, -35.72]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes["minecraft_block-glowstone002"].geometry}
          material={materials["minecraft_block-glowstone"]}
          position={[70, 55, -35.72]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes["minecraft_block-sandstone002"].geometry}
          material={materials["minecraft_block-sandstone"]}
          position={[70, 55, -35.72]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes["minecraft_block-anvil"].geometry}
          material={materials["minecraft_block-anvil"]}
          position={[70, 55, -35.72]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes["minecraft_block-oak_planks002"].geometry}
          material={materials["minecraft_block-oak_planks"]}
          position={[70, 55, -35.72]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          receiveShadow
          castShadow
          geometry={nodes["minecraft_block-grass_block_top002"].geometry}
          material={materials["minecraft_block-grass_block_top"]}
          position={[70, 55, -35.72]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </>
  );
}

useGLTF.preload("../../../MainIsland.glb");
