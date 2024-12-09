//import React, { useRef } from "react";
//import { useFrame } from "@react-three/fiber";
//import { useGLTF } from "@react-three/drei";
//
//const RotatingAsset = ({ position }) => {
//  const { scene } = useGLTF("/assets/clothes.obj");
//  const ref = useRef();
//
//  useFrame(() => {
//    if (ref.current) {
//      ref.current.rotation.y += 0.01;
//    }
//  });
//
//  return (
//    <mesh ref={ref} position={position}>
//      <primitive object={scene} />
//    </mesh>
//  );
//};
//
//export default RotatingAsset;
