import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import DeveloperAvatar from '../components/DeveloperAvatar';
import CanvasLoader from '../components/CanvasLoader';

const workExperiences = [
  {
    id: 1,
    name: 'KnowledgeHub UG',
    pos: 'CTO - AI Architect',
    duration: '2024 - Present',
    title: "Led business process automation through Agentic RAG and Foundry IQ frameworks. Consulted enterprise leaders on cognitive orchestrations and AI strategy.",
    animation: 'clapping',
    icon: '/assets/figma.svg',
  },
  {
    id: 2,
    name: "Norwegian People's Aid",
    pos: 'Senior Data Analyst',
    duration: '2022 - 2024',
    title: "Designed end-to-end Data Quality Frameworks, built automated reporting layers, and slashed manual processing errors by over 65%.",
    animation: 'salute',
    icon: '/assets/framer.png',
  },
  {
    id: 3,
    name: 'Basma & Zaitoona',
    pos: 'Data Manager',
    duration: '2019 - 2022',
    title: "Spearheaded digital migration initiatives. Streamlined logistics workflows for 1,000+ pipelines, decreasing manual effort by 60%.",
    animation: 'victory',
    icon: '/assets/notion.svg',
  },
];

const Experience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="experience">
      <div className="w-full text-white-600">
        <p className="head-text">Professional Experience</p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 mt-12 w-full">
          {/* Left Column (Spans 1 col on desktop): Rigged 3D Avatar */}
          <div className="border border-black-300 bg-black-200 rounded-3xl h-[400px] sm:h-[600px] relative overflow-hidden flex justify-center items-center">
            <Canvas className="w-full h-full">
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 5, 5]} intensity={1.5} />
              <spotLight position={[0, 10, 10]} intensity={1} angle={0.15} penumbra={1} />
              
              <Suspense fallback={<CanvasLoader />}>
                <DeveloperAvatar 
                  animation={animationName} 
                  scale={3.2} 
                  position={[0, -3.2, 0]} 
                  rotation={[0.1, 0.4, 0]}
                />
              </Suspense>

              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            </Canvas>
          </div>

          {/* Right Column (Spans 2 cols on desktop): Career list cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {workExperiences.map((exp) => (
              <div 
                key={exp.id} 
                className="experience-card flex items-start gap-6 bg-black-200 border border-black-300 rounded-3xl p-6 sm:p-8 hover:bg-black-300 hover:border-white-600 transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setAnimationName(exp.animation)}
                onMouseLeave={() => setAnimationName('idle')}
              >
                {/* Exp Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-black-300 border border-black-200 flex justify-center items-center p-2 shadow-lg shadow-black/40">
                    <img src={exp.icon} alt="logo" className="w-full h-full object-contain filter invert opacity-80" />
                  </div>
                  {/* Visual connector line */}
                  <div className="w-[2px] h-full bg-black-300 group-hover:bg-white-600 transition-colors mt-4 min-h-[40px]" />
                </div>

                {/* Exp Content details */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center sm:flex-row flex-col sm:items-start gap-2">
                    <p className="text-white text-lg font-bold font-sans">{exp.name}</p>
                    <p className="text-white-600 text-sm font-mono">{exp.duration}</p>
                  </div>
                  <p className="text-white-700 font-mono text-xs font-semibold">{exp.pos}</p>
                  <p className="text-white-600 text-sm leading-relaxed mt-2 font-normal">
                    {exp.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
