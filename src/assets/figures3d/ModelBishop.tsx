import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const ModelBishop = (props: any) => {
  const { nodes, materials } = useGLTF("models3d/figures.gltf");
  const color = props.color === "white" ? "#ccc" : "#626363";

  return (
    <mesh
      //@ts-ignore
      geometry={nodes.Circle.geometry}
      position={[0, 0, 0.1]}
      scale={0.21}
      rotation={[1.55, 0, 0]}
    >
      <meshStandardMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default ModelBishop;
