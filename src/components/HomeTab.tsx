import { useRef } from 'react';
import { projects, type Project } from '../data/projects';

interface HomeTabProps {
  onGoToWork: () => void;
  onOpenProject: (p: Project) => void;
}

export default function HomeTab({ onGoToWork, onOpenProject }: HomeTabProps) {
  const featuredProject = projects[0];
  const thumbnails = projects.slice(0, 3);
  const mainVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.pause();
      mainVideoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full max-w-[1600px] mx-auto w-full animate-fadeIn">
      
      {/* LEWA KOLUMNA */}
      <div className="lg:col-span-4 space-y-12">
        <div className="space-y-6">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">/ 01</span>
          <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white">
            SPORTS <br /> STORIES <br /> <span className="text-zinc-600">THROUGH <br />MY LENS</span>
          </h1>
        </div>
        <p className="text-[11px] text-zinc-400 max-w-[280px] font-mono leading-relaxed uppercase tracking-wider">
          I create cinematic videos, short-form content and visual stories that capture the real emotion of sport. From the pitch to the locker room — I turn moments into content.
        </p>
        <div className="pt-4 flex items-center gap-6">
          <button onClick={onGoToWork} className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 group cursor-pointer">
            <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
          </button>
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">VIEW MY WORK</span>
        </div>
        <div className="pt-24 flex gap-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          <a href="https://ig.me/m/siewniakfilms" target="_blank" rel="noreferrer" className="hover:text-white transition">INSTAGRAM</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white transition">TIKTOK</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition">YOUTUBE</a>
        </div>
      </div>

      {/* ŚRODKOWA KOLUMNA: Hover video + Modal Trigger */}
      <div className="lg:col-span-4 flex justify-center h-full items-center">
        <div
          onClick={() => onOpenProject(featuredProject)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-[380px] aspect-[9/16] rounded-xl overflow-hidden border border-zinc-800/50 bg-[#0a0a0a] group cursor-pointer block"
        >
          {/* Plakat statyczny */}
          <img
            src={featuredProject.posterSrc}
            alt={featuredProject.title}
            className="w-full h-full object-cover grayscale contrast-125 group-hover:opacity-0 transition-opacity duration-500"
          />

          {/* Wideo odpalane po najechaniu myszką */}
          <video
            ref={mainVideoRef}
            src={featuredProject.videoSrc}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />
          
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span className="text-[10px] font-mono text-white tracking-widest">{featuredProject.duration}</span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="space-y-1">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">{featuredProject.title}</h3>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{featuredProject.subtitle}</p>
            </div>
            <span className="text-[10px] font-mono text-zinc-500">/ {featuredProject.num}</span>
          </div>
        </div>
      </div>

      {/* PRAWA KOLUMNA */}
      <div className="lg:col-span-4 flex flex-col justify-between h-full pl-8">
        <div className="space-y-6 pt-12">
          <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            <span>FEATURED PROJECT</span><div className="flex-1 h-[1px] bg-zinc-800"></div><span>{featuredProject.num} / 0{projects.length}</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-black uppercase tracking-tight text-white">{featuredProject.title}</h2>
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{featuredProject.subtitle}</p>
          </div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest space-y-1.5 pt-4">
            {featuredProject.category.split(' / ').map((cat, idx) => (
              <p key={idx}>{cat}</p>
            ))}
          </div>
          <div className="pt-4 flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-zinc-300">
             <button onClick={() => onOpenProject(featuredProject)} className="flex items-center gap-3 hover:text-white transition group cursor-pointer">
                <span>WATCH REEL</span><span className="transition-transform group-hover:translate-x-1">→</span>
             </button>
          </div>
        </div>

        {/* Dynamiczne Miniaturki */}
        <div className="flex gap-4 pt-16">
          {thumbnails.map((thumb) => (
            <div
              key={thumb.id}
              onClick={() => onOpenProject(thumb)}
              className="relative flex-1 aspect-[2/3] border border-zinc-800/80 bg-zinc-900 overflow-hidden group cursor-pointer block"
            >
              <img src={thumb.posterSrc} alt={thumb.title} className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-3 left-3 text-[9px] font-mono text-zinc-400">/ {thumb.num}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}