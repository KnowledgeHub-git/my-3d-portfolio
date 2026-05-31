import React, { useRef, useEffect } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';

const DeveloperAvatar = ({ animation = 'idle', ...props }) => {
  const group = useRef();

  // Load the Ready Player Me digital twin model
  const { scene } = useGLTF('/models/animations/developer.glb');

  // Load the FBX Mixamo animation tracks
  const { animations: idleAnim } = useFBX('/models/animations/idle.fbx');
  const { animations: saluteAnim } = useFBX('/models/animations/salute.fbx');
  const { animations: clapAnim } = useFBX('/models/animations/clapping.fbx');
  const { animations: victoryAnim } = useFBX('/models/animations/victory.fbx');

  // Rename tracks for clean action state blending
  idleAnim[0].name = 'idle';
  saluteAnim[0].name = 'salute';
  clapAnim[0].name = 'clapping';
  victoryAnim[0].name = 'victory';

  // Mount animations controller
  const { actions } = useAnimations(
    [idleAnim[0], saluteAnim[0], clapAnim[0], victoryAnim[0]],
    group
  );

  // Blend and swap animations smoothly with a 0.5s cross-fade duration
  useEffect(() => {
    const action = actions[animation.toLowerCase()];
    if (action) {
      action.reset().fadeIn(0.5).play();
      return () => action.fadeOut(0.5);
    }
  }, [animation, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

// Preload assets to prevent loading delay or visual jitter
useGLTF.preload('/models/animations/developer.glb');
useFBX.preload('/models/animations/idle.fbx');
useFBX.preload('/models/animations/salute.fbx');
useFBX.preload('/models/animations/clapping.fbx');
useFBX.preload('/models/animations/victory.fbx');

export default DeveloperAvatar;
