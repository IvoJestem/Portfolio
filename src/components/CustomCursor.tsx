import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target && (target.closest('button') || target.closest('a') || target.closest('.cursor-pointer'))) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference hidden lg:flex items-center justify-center font-mono text-[8px] font-black uppercase text-black"
      animate={{
        x: mousePos.x - (isHovered ? 24 : 6),
        y: mousePos.y - (isHovered ? 24 : 6),
        width: isHovered ? 48 : 12,
        height: isHovered ? 48 : 12,
        backgroundColor: '#ffffff'
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.5 }}
    >
      {isHovered && <span>VIEW</span>}
    </motion.div>
  );
}