import React, { useState, useRef } from 'react';
import { projects } from '../data/projects';

interface HomeTabProps {
  onGoToWork: () => void;
}

export default function HomeTab({ onGoToWork }: HomeTabProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeProject = projects[activeIndex];

  const handleSelectProject = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Lewa kolumna */}
      <div className="lg:col-span-4 space-y-8">
        <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest block">
          / {activeProject.num}
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.9] text-white">
          SPORTS <br />
          STORIES <br />
          THROUGH <br />
          <span className="text-zinc-500">MY LENS</span>
        </h1>

        <p className="text-xs text-zinc-400 max-w-xs font-normal leading-relaxed">
          Tworzę dynamiczne formaty pionowe, relacje meczowe i wideo, które oddają surowe emocje sportu. Od parkietu po szatnię.
        </p>

        <div className="pt-2 flex items-center gap-4">
          <button
            onClick={onGoToWork}
            className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 group"
          >
            <span className="text-sm transition-transform group-hover:translate-x-0.5">→</span>
          </button>
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
            Wszystkie realizacje
          </span>
        </div>
      </div>

      {/* Środkowa kolumna: Rolka */}
      <div className="lg:col-span-4 flex justify-center">
        <div className="relative aspect-[9/16] w-full max-w-[340px] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
          <video
            ref={videoRef}
            key={activeProject.videoSrc}
            src={activeProject.videoSrc}
            poster={activeProject.posterSrc}
            loop
            muted
            playsInline
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />

          <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
            <span className="text-[10px] font-mono text-zinc-300 bg-black/60 backdrop-blur px-2 py-0.5 rounded">
              ▶ {activeProject.duration}
            </span>
          </div>

          {!isPlaying && (
            <div 
              onClick={togglePlay} 
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center pl-1 text-white hover:scale-110 transition duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end pointer-events-none">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                {activeProject.title}
              </h3>
              <p className="text-[10px] font-mono text-zinc-400">
                {activeProject.subtitle}
              </p>
            </div>
            <span className="text-[10px] font-mono text-zinc-500">
              / {activeProject.num}
            </span>
          </div>
        </div>
      </div>

      {/* Prawa kolumna */}
      <div className="lg:col-span-4 flex flex-col justify-between space-y-8 lg:pl-6">
        <div className="space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-red-500 block">
            WYRÓŻNIONY PROJEKT
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            {activeProject.title}
          </h2>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
            {activeProject.subtitle}
          </p>
          <p className="text-[11px] font-mono text-zinc-500 uppercase leading-relaxed pt-2">
            {activeProject.category}
          </p>
          
          <a
            href={activeProject.igUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white pt-2 border-b border-zinc-700 hover:border-white transition pb-0.5"
          >
            Zobacz na IG <span>→</span>
          </a>
        </div>

        <div className="space-y-3 pt-6 border-t border-zinc-800">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
            WYBIERZ KLIP
          </span>
          <div className="grid grid-cols-3 gap-3">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => handleSelectProject(idx)}
                className={`group relative aspect-[9/16] rounded-lg overflow-hidden border transition duration-300 text-left ${
                  activeIndex === idx 
                    ? 'border-red-600 ring-1 ring-red-600' 
                    : 'border-zinc-800 opacity-50 hover:opacity-100 hover:border-zinc-600'
                }`}
              >
                <img 
                  src={proj.posterSrc} 
                  alt={proj.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-300">
                  / {proj.num}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}