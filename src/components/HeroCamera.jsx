import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state) => {
    // Set standard camera depth
    state.camera.position.z = 20;

    // Direct, performant interpolation for the parallax rotation
    if (!isMobile) {
      // Lerping rotation based on state.pointer (mouse coordinates)
      groupRef.current.rotation.y += (-state.pointer.x / 5 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (state.pointer.y / 5 - groupRef.current.rotation.x) * 0.05;
    }
  });

  return <group ref={groupRef} scale={1.1}>{children}</group>;
};

export default HeroCamera;
