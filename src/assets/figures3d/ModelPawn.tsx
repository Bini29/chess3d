import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
//@ts-ignore
export default function ModelPawn(props) {
  const { nodes } = useGLTF("models3d/figures.gltf");
  const color = props.color === "white" ? "#ccc" : "#626363";

  return (
    <group dispose={null} rotation={[1.55, 0, 0.0]}>
      <mesh
        //@ts-ignore
        geometry={nodes.Circle004.geometry}
        scale={0.21}
      >
        <meshStandardMaterial color={color} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/pawn.gltf");
