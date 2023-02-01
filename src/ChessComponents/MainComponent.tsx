import { Stats, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import BoardThree from "./BoardThree";

const MainComponent = () => {
  return (
    <Canvas style={{ backgroundColor: "#ccc" }} linear={true}>
      <ambientLight />
      <OrbitControls />
      <Stats />
      <pointLight position={[10, 10, 10]} />
      <BoardThree />
    </Canvas>
  );
};

export default MainComponent;
