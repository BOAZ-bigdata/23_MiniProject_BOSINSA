//import React, { useRef } from 'react';
//import { useFrame, useLoader } from '@react-three/fiber';
//import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
//
//const ClothesModel = () => {
//  const modelRef = useRef();
//  const obj = useLoader(OBJLoader, './clothes.obj');
//
//  useFrame(() => {
//    if (modelRef.current) {
//      modelRef.current.rotation.y += 0.01;
//    }
//  });
//
//  return (
//    <primitive
//      object={obj}
//      ref={modelRef}
//      scale={[0.03, 0.03, 0.03]}
//      position={[5, 0, 0]}
//    />
//  );
//};
//
//export default ClothesModel;
