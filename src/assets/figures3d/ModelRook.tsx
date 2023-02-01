import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const ModelRook = (props: any) => {
  const { nodes } = useGLTF("models3d/figures.gltf");
  const color = props.color === "white" ? "#ccc" : "#626363";

  return (
    <group dispose={null} rotation={[1.55, 0, 0]}>
      <mesh
        //@ts-ignore
        geometry={nodes.Circle005.geometry}
        position={[0, 0, 0.1]}
        scale={0.24}
      >
        <meshStandardMaterial color={color} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default ModelRook;
