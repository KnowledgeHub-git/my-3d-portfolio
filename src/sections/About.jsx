import { useState } from 'react';
import Globe from 'react-globe.gl';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('biwaro2011@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Card 1: Narrative Bio */}
        <div className="col-span-1 xl:col-span-2 xl:row-span-3 md:col-span-2">
          <div className="grid-container flex flex-col justify-between h-full bg-black-200 border border-black-300 rounded-3xl p-6 relative overflow-hidden">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain rounded-2xl" />
            <div className="mt-6">
              <p className="grid-headtext text-white text-2xl font-bold font-sans">About Mohamad Bouzi</p>
              <p className="grid-subtext text-white-600 text-sm mt-2 leading-relaxed">
                As an Enterprise AI Architect and CTO, I specialize in navigating the strategic adoption and technical implementation of generative AI within the Microsoft Cloud ecosystem. I advise C-level executives on building compliant, secure, and production-grade architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Tech Stack */}
        <div className="col-span-1 xl:col-span-1 xl:row-span-3 md:col-span-1">
          <div className="grid-container flex flex-col justify-between h-full bg-black-200 border border-black-300 rounded-3xl p-6 relative overflow-hidden">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[180px] h-fit object-contain rounded-2xl" />
            <div className="mt-6">
              <p className="grid-headtext text-white text-2xl font-bold font-sans">Core Capability Stack</p>
              <p className="grid-subtext text-white-600 text-sm mt-2 leading-relaxed mb-4">
                Mastery of high-performance tools bridging complex data pipelines with cognitive orchestrators:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Azure OpenAI", "Microsoft Fabric", "Copilot Studio", "Python", "SQL", "Databricks", "React", "Three.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-black-300 border border-black-200 text-white-700 font-mono text-xs rounded-lg hover:border-white-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Global Reach (Globe Integration) */}
        <div className="col-span-1 xl:col-span-1 xl:row-span-4 md:col-span-1">
          <div className="grid-container flex flex-col justify-between h-full bg-black-200 border border-black-300 rounded-3xl p-6 relative overflow-hidden">
            <div className="rounded-3xl flex justify-center items-center h-[326px] overflow-hidden bg-black/20">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 51.2277,
                    lng: 6.7735,
                    text: "Mohamad Bouzi (Düsseldorf, Germany)",
                    color: '#00ff66',
                    size: 20,
                  }
                ]}
                labelLat={(d) => d.lat}
                labelLng={(d) => d.lng}
                labelText={(d) => d.text}
                labelColor={(d) => d.color}
                labelDotRadius={1.0}
                labelSize={2.0}
              />
            </div>
            <div className="mt-6">
              <p className="grid-headtext text-white text-2xl font-bold font-sans">Global Client Mobility</p>
              <p className="grid-subtext text-white-600 text-sm mt-2 leading-relaxed">
                Operating with 80% remote flexibility capability. Based in Düsseldorf, Germany, I coordinate AI strategies and scale cognitive architectures for international clients worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Philosophy */}
        <div className="col-span-1 xl:col-span-2 xl:row-span-3 md:col-span-1">
          <div className="grid-container flex flex-col justify-between h-full bg-black-200 border border-black-300 rounded-3xl p-6 relative overflow-hidden">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[180px] h-fit object-contain rounded-2xl" />
            <div className="mt-6">
              <p className="grid-headtext text-white text-2xl font-bold font-sans">Governance meets Engineering</p>
              <p className="grid-subtext text-white-600 text-sm mt-2 leading-relaxed">
                My approach bridges deep software engineering and rigorous compliance. I design robust Agentic RAG networks aligned with security frameworks (EU AI Act and enterprise IT controls) to turn experimental models into strategic, production-grade business assets.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5: Copy Email Utility */}
        <div className="col-span-1 xl:col-span-1 xl:row-span-2 md:col-span-1">
          <div className="grid-container flex flex-col justify-center items-center h-full bg-black-200 border border-black-300 rounded-3xl p-6 text-center relative overflow-hidden">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full h-[140px] object-contain opacity-60 rounded-2xl" />
            <div className="space-y-4 w-full mt-4 z-10">
              <p className="grid-subtext text-white-600 text-sm font-mono">Let's connect via direct email</p>
              <div 
                className="flex items-center justify-center gap-3 bg-black-300 border border-black-200 px-4 py-3.5 rounded-xl cursor-pointer hover:border-white-600 transition-colors w-full"
                onClick={handleCopy}
              >
                <img 
                  src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} 
                  alt="copy" 
                  className="w-5 h-5 object-contain filter invert opacity-80"
                />
                <p className="text-white font-mono text-sm font-medium">biwaro2011@gmail.com</p>
              </div>
              <p className={`text-xs font-mono font-semibold transition-all duration-300 ${hasCopied ? 'text-green-400 scale-100 opacity-100' : 'text-transparent scale-95 opacity-0'}`}>
                Email copied to clipboard!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
