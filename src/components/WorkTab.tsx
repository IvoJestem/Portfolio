import { useState, useRef } from 'react';
import { projects, type Project } from '../data/projects';

interface WorkTabProps {
  onOpenProject: (p: Project) => void;
}

export default function WorkTab({ onOpenProject }: WorkTabProps) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categoryCounts = projects.reduce((acc, project) => {
    const mainCategory = project.category.split(' / ')[0];
    acc['ALL'] = (acc['ALL'] || 0) + 1;
    acc[mainCategory] = (acc[mainCategory] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.keys(categoryCounts).map(key => ({
    key, count: categoryCounts[key]
  }));

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category.split(' / ')[0] === activeFilter);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fadeIn max-w-[1600px] mx-auto w-full">
      
      {/* LEWA KOLUMNA */}
      <div className="lg:col-span-3 flex flex-col justify-between h-full">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">/ 02</span>
            <h1 className="text-6xl font-black uppercase tracking-tighter text-white leading-none">WORK</h1>
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-relaxed">
              SPORTS VIDEOS. SOCIAL CONTENT. <br /> REAL STORIES.
            </p>
          </div>

          <nav className="space-y-4 font-mono text-[10px] uppercase tracking-widest pt-8">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`flex items-center justify-between w-full text-left transition relative cursor-pointer ${
                    isActive ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <div className="flex items-center">
                    {isActive && <span className="absolute -left-8 w-6 h-[1px] bg-white"></span>}
                    <span>{cat.key}</span>
                  </div>
                  <span>{cat.count}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest pt-32 space-y-4 hidden lg:block">
          <p>SCROLL TO EXPLORE</p>
          <div className="w-[1px] h-8 bg-zinc-800 ml-1"></div>
          <p className="text-white ml-0.5">↓</p>
        </div>
      </div>

      {/* PRAWA KOLUMNA: Bento Grid z podglądem wideo */}
      <div className="lg:col-span-9">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[180px]">
          {filteredProjects.map((p, index) => {
            const spanClass = index === 0 ? "md:col-span-6 row-span-2" : 
                              index === 1 || index === 2 ? "md:col-span-3 row-span-2" :
                              index === 3 ? "md:col-span-5 row-span-2" :
                              index === 4 ? "md:col-span-3 row-span-2" : "md:col-span-2 row-span-2";
            
            return (
              <WorkCard 
                key={p.id} 
                className={spanClass} 
                project={p}
                onOpen={() => onOpenProject(p)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function WorkCard({ className, project, onOpen }: { className: string; project: Project; onOpen: () => void }) {
  const shortTag = project.category.split(' / ')[0];
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={onOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded border border-zinc-800/60 bg-[#0a0a0a] overflow-hidden group cursor-pointer block h-full ${className}`}
    >
      <img
        src={project.posterSrc}
        alt={project.title}
        className="w-full h-full object-cover grayscale contrast-125 group-hover:opacity-0 transition-opacity duration-500 ease-out"
      />
      <video
        ref={videoRef}
        src={project.videoSrc}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
      
      <span className="absolute top-5 left-5 text-[9px] font-mono uppercase tracking-widest text-zinc-400">{shortTag}</span>
      
      <div className="absolute left-5 bottom-14 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 group-hover:bg-white group-hover:text-black transition duration-300">
        <svg className="w-3 h-3 fill-current pl-0.5" viewBox="0 0 24 24">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
        <div>
          <h3 className="text-sm font-black uppercase tracking-tight text-white">{project.title}</h3>
          <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest mt-1">{project.subtitle}</p>
        </div>
        <span className="text-[9px] font-mono text-zinc-500">{project.duration}</span>
      </div>
    </div>
  );
}