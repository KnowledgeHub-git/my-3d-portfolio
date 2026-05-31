import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants';
import DemoComputer from '../components/DemoComputer';
import CanvasLoader from '../components/CanvasLoader';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProject = myProjects[activeIndex];

  const handleNavigation = (direction) => {
    setActiveIndex((prev) => {
      if (direction === 'previous') {
        return prev === 0 ? myProjects.length - 1 : prev - 1;
      } else {
        return prev === myProjects.length - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text">Selected Case Studies</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-12 w-full">
        {/* Left Side: Technical Info & Metadata */}
        <div className="flex flex-col gap-5 relative bg-black-200 border border-black-300 rounded-3xl p-6 sm:p-10 justify-between">
          {/* Spotlight Dynamic Backdrop */}
          <div className="absolute top-0 right-0 left-0 bottom-0 pointer-events-none overflow-hidden rounded-3xl opacity-30">
            <img 
              src={currentProject.spotlight} 
              alt="spotlight" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="flex flex-col gap-5 z-10">
            {/* Dynamic Project Logo */}
            <div 
              className="p-3.5 w-fit rounded-2xl shadow-xl shadow-black/40"
              style={{ backgroundColor: currentProject.logoBg }}
            >
              <img 
                src={currentProject.logo} 
                alt="logo" 
                className="w-10 h-10 object-contain" 
              />
            </div>

            {/* Title & Descriptions */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-white text-2xl font-bold font-sans tracking-tight">
                {currentProject.title}
              </p>
              <p className="text-white-800 font-medium text-sm font-mono tracking-wide">
                {currentProject.subdesc}
              </p>
              <p className="text-white-600 text-sm leading-relaxed mt-2 font-normal">
                {currentProject.desc}
              </p>
            </div>

            {/* Custom Badges & Tags */}
            <div className="flex items-center flex-wrap gap-3 mt-4">
              {currentProject.tags.map((tag) => (
                <div 
                  key={tag.id} 
                  className="flex items-center gap-2 px-3 py-1.5 bg-black-300 border border-black-200 rounded-lg"
                >
                  <img src={tag.path} alt={tag.name} className="w-4 h-4 object-contain" />
                  <p className="text-white-700 font-mono text-xs font-medium">{tag.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sourced Repository Link & Arrow Navigations */}
          <div className="flex justify-between items-center mt-8 z-10">
            <a 
              href={currentProject.href} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-white-600 hover:text-white transition-colors text-sm font-mono"
            >
              <p>Check Repository</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3 object-contain invert opacity-70" />
            </a>

            {/* Navigation buttons with wrap-around */}
            <div className="flex items-center gap-3">
              <button 
                className="arrow-btn p-3 bg-black-300 border border-black-200 hover:border-white-600 rounded-full transition-all cursor-pointer"
                onClick={() => handleNavigation('previous')}
                aria-label="Previous project"
              >
                <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4 object-contain invert opacity-80" />
              </button>
              <button 
                className="arrow-btn p-3 bg-black-300 border border-black-200 hover:border-white-600 rounded-full transition-all cursor-pointer"
                onClick={() => handleNavigation('next')}
                aria-label="Next project"
              >
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4 object-contain invert opacity-80" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: R3F Canvas showing DemoComputer */}
        <div className="border border-black-300 bg-black-200 rounded-3xl h-[400px] sm:h-[500px] relative overflow-hidden flex justify-center items-center">
          <Canvas className="w-full h-full">
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            
            {/* Dynamic Spotlight */}
            <spotLight 
              position={[0, 10, 0]} 
              angle={0.3} 
              penumbra={1} 
              intensity={2} 
              castShadow 
            />

            <Suspense fallback={<CanvasLoader />}>
              <Center>
                <group scale={1.8} position={[0, -1.0, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer 
                    texture={currentProject.texture} 
                    activeProjectIndex={activeIndex} 
                  />
                </group>
              </Center>
            </Suspense>

            {/* Constrained camera controls */}
            <OrbitControls 
              enableZoom={false} 
              maxPolarAngle={Math.PI / 2.1} 
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
