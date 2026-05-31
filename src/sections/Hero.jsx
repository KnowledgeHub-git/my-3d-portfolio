import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

import { HackerRoom } from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import HeroCamera from '../components/HeroCamera';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Target from '../components/Target';
import Rings from '../components/Rings';
import { calculateSizes } from '../constants/calculateSizes';

// Custom lightweight hooks to avoid package bloat
const useDeviceDetect = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmall(width <= 440);
      setIsMobile(width > 440 && width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isSmall, isMobile, isTablet };
};

const Hero = () => {
  const { isSmall, isMobile, isTablet } = useDeviceDetect();
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      {/* Title / Typography block */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-sans">
          Hi, I am Mohamad Bouzi <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient text-center sm:text-5xl text-3xl font-bold tracking-tight mt-2 leading-tight">
          Enterprise AI Architect & CTO
        </p>
        <p className="text-white-600 text-center max-w-lg mx-auto sm:text-lg text-sm mt-3 px-4 font-normal">
          Orchestrating Microsoft Cloud ecosystems, AI Governance, and high-performance Agentic RAG architectures.
        </p>
      </div>

      {/* R3F Canvas Container */}
      <div className="w-full h-full absolute inset-0 pt-20">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* Perspective Camera definition */}
            <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={75} />

            {/* Ambient and Directional Lighting to cast depth & shadows */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />

            {/* Custom Camera wrapping HackerRoom desk */}
            <HeroCamera isMobile={isSmall || isMobile}>
              <HackerRoom 
                scale={sizes.deskScale} 
                position={sizes.deskPosition} 
                rotation={[0.1, -Math.PI, 0]} 
              />
            </HeroCamera>

            {/* Corner floating 3D elements */}
            <group>
              <Target position={sizes.targetPosition} scale={sizes.targetScale} />
              <ReactLogo position={sizes.reactLogoPosition} scale={sizes.reactLogoScale} />
              <Cube position={sizes.cubePosition} scale={sizes.cubeScale} />
              <Rings position={sizes.ringPosition} scale={sizes.ringScale} />
            </group>
          </Suspense>
        </Canvas>
      </div>

      {/* CTA Button overlay */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit mx-auto block">
          <button className="flex items-center gap-3 bg-black-200 border border-black-300 hover:bg-black-300 hover:border-white-600 transition-all px-6 py-4 rounded-xl text-white font-medium shadow-2xl shadow-black/80 font-mono text-sm group">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Let's work together
            <span className="text-white-600 group-hover:text-white transition-colors">→</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
