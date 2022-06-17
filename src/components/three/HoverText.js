import React, { useRef, useEffect } from "react";
import { Billboard, Text } from "@react-three/drei";

const HoverText = (props) => {
  const textRef = useRef();
  useEffect(() => {
    textRef.current.visible = props.visible ? true : false;
  });

  return (
    <group position={props.data.position}>
      <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Text position={[0, 0, 0]} {...props.fontProps} ref={textRef}>
          {props.data.islandName}
        </Text>
      </Billboard>
    </group>
  );
};

export default HoverText;
