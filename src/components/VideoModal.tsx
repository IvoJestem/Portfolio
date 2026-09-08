import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Project } from '../data/projects';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setProgress(0);
      setIsMuted(true);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm md:max-w-md aspect-[9/16] bg-black border border-zinc-800 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl cursor-default"
          >
            {/* Przyciski w narożnikach */}
            <div className="absolute top-4 inset-x-4 z-20 flex justify-between items-center pointer-events-auto">
              <button
                onClick={toggleMute}
                className="px-3 py-1 bg-black/70 border border-zinc-700 text-white font-mono text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition"
              >
                {isMuted ? 'SOUND: OFF' : 'SOUND: ON'}
              </button>
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-black/70 border border-zinc-700 text-white font-mono text-xs flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                ✕
              </button>
            </div>

            {/* Odtwarzacz wideo bez domyślnych pasków przeglądarki */}
            <video
              ref={videoRef}
              src={project.videoSrc}
              poster={project.posterSrc}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full object-cover"
            />

            {/* Własny, minimalistyczny pasek postępu */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-white/20 z-20">
              <div
                className="h-full bg-white transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Dolna belka z tytułem i IG */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex items-center justify-between z-10">
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{project.category.split(' / ')[0]}</p>
                <h4 className="text-lg font-black uppercase text-white tracking-tight">{project.title}</h4>
              </div>
              <a
                href={project.igUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-white text-black text-[10px] font-mono uppercase font-bold tracking-widest hover:bg-zinc-200 transition"
              >
                OPEN ON IG →
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}