import React from 'react';

interface AboutTabProps {
  onGoToContact?: () => void;
}

export default function AboutTab({ onGoToContact }: AboutTabProps) {
  return (
    <div className="space-y-24 animate-fadeIn">
      
      {/* 1. GÓRNA SEKCJA: THE CREATOR & SKILLS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Lewa kolumna: Tytuł, bio i CTA */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest block mb-2">
              / 03
            </span>
            <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.9]">
              ABOUT <br />
              <span className="text-zinc-500">THE CREATOR</span>
            </h1>
            <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-4">
              SPORTS. STORIES. EMOTIONS.<br />
              THAT&apos;S WHAT I CAPTURE.
            </p>
          </div>

          <p className="text-xs text-zinc-400 max-w-sm font-normal leading-relaxed">
            Jestem twórcą wideo i koordynatorem social mediów z pasją do opowiadania autentycznych historii sportowych. Przekładam tempo z boiska i trybun na angażujący obraz — od meczowego potu po kulisy szatni.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={onGoToContact}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 group"
            >
              <span className="text-sm transition-transform group-hover:translate-x-0.5">→</span>
            </button>
            <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-300">
              LET&apos;S WORK TOGETHER
            </span>
          </div>
        </div>

        {/* Środkowa kolumna: Zdjęcie twórcy z kamerą */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative aspect-[3/4] w-full max-w-[340px] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl">
            <img
              src="img/hero.jpg"
              alt="Hudy - Twórca Siewniak Media"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />

            {/* Subtelne hasła wtopione w kadr */}
            <div className="absolute bottom-6 left-6 font-mono text-[9px] text-zinc-400 uppercase tracking-widest space-y-1">
              <p className="text-white font-bold">BETTER CONTENT</p>
              <p>BIGGER DREAMS</p>
              <p className="text-red-500 font-bold pt-2">SM.</p>
            </div>
          </div>
        </div>

        {/* Prawa kolumna: Szczegółowy opis, ikony, skille i statystyki */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Kto jestem + Statystyki w poziomie/pionie */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
            <div className="sm:col-span-8 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block border-b border-zinc-800 pb-1">
                WHO I AM
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                I&apos;M A CREATOR <br />AT HEART
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Zawsze ciągnęło mnie do energii i nieprzewidywalności sportu. Chwytam za kamerę, żeby łączyć sportową pasję z dynamicznymi formatami social media.
              </p>
            </div>

            {/* Liczniki po prawej */}
            <div className="sm:col-span-4 space-y-5 font-mono border-l border-zinc-800 pl-4">
              <div>
                <span className="text-2xl font-black text-white block">3+</span>
                <span className="text-[9px] uppercase tracking-wider text-zinc-500">Lata doświadczenia</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white block">50+</span>
                <span className="text-[9px] uppercase tracking-wider text-zinc-500">Zrealizowanych projektów</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white block">200K+</span>
                <span className="text-[9px] uppercase tracking-wider text-zinc-500">Wyświetleń rolek</span>
              </div>
            </div>
          </div>

          {/* 3 Kluczowe Filary (Ikony) */}
          <div className="grid grid-cols-3 gap-3 border-t border-zinc-800 pt-6">
            <div className="space-y-1">
              <span className="text-base block">📹</span>
              <h4 className="text-[10px] font-mono font-bold uppercase text-white tracking-wider">VIDEOGRAPHY</h4>
              <p className="text-[9px] font-mono text-zinc-500 uppercase">CINEMATIC &amp; RAW</p>
            </div>
            <div className="space-y-1">
              <span className="text-base block">📱</span>
              <h4 className="text-[10px] font-mono font-bold uppercase text-white tracking-wider">SOCIAL MEDIA</h4>
              <p className="text-[9px] font-mono text-zinc-500 uppercase">SHORT FORM &amp; REELS</p>
            </div>
            <div className="space-y-1">
              <span className="text-base block">⚡</span>
              <h4 className="text-[10px] font-mono font-bold uppercase text-white tracking-wider">STORYTELLING</h4>
              <p className="text-[9px] font-mono text-zinc-500 uppercase">REAL EMOTIONS</p>
            </div>
          </div>

          {/* Siatka Skills & Tools */}
          <div className="space-y-3 border-t border-zinc-800 pt-6 font-mono">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 block">
              SKILLS &amp; TOOLS
            </span>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[10px]">
              <div>
                <span className="text-zinc-200 font-bold block uppercase">VIDEO EDITING</span>
                <span className="text-zinc-500">(PREMIERE PRO / CAPCUT)</span>
              </div>
              <div>
                <span className="text-zinc-200 font-bold block uppercase">CAMERA GEAR</span>
                <span className="text-zinc-500">(SONY / DJI GIMBAL)</span>
              </div>
              <div>
                <span className="text-zinc-200 font-bold block uppercase">COLOR GRADING</span>
                <span className="text-zinc-500">(DAVINCI RESOLVE / LUTs)</span>
              </div>
              <div>
                <span className="text-zinc-200 font-bold block uppercase">DISTRIBUTION</span>
                <span className="text-zinc-500">(TIKTOK / INSTAGRAM REELS)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. DOLNA SEKCJA: PHILOSOPHY */}
      <section className="border-t border-zinc-800/80 pt-16">
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            MY PHILOSOPHY
          </span>
          <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest">
            AUTHENTIC SPORTS MEDIA
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Lewy kadr ze stadionu / trybun z cytatem */}
          <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 group">
            <img
              src="img/kosz2.jpg"
              alt="Trybuny i emocje"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/75 flex items-center p-8 sm:p-12">
              <blockquote className="max-w-md space-y-2">
                <p className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  &ldquo;IT&apos;S NOT JUST ABOUT THE GAME. IT&apos;S ABOUT THE PEOPLE.&rdquo;
                </p>
                <cite className="text-[10px] font-mono text-red-500 uppercase tracking-widest not-italic block pt-2">
                  — SIEWNIAK MEDIA MANIFESTO
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Prawa strona: Krótki podpis i drugie ujęcie */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                Każdy mecz, każdy trening i każdy moment za kulisami to osobna opowieść. Wchodzę tam z kamerą, żeby pokazać to w sposób surowy, prawdziwy i kinowy.
              </p>
              <div className="font-serif italic text-2xl text-zinc-200 tracking-wider">
                Hudy Siewniak
              </div>
            </div>

            <div className="relative aspect-[16/7] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <img
                src="img/kosz1.jpg"
                alt="Detal gry"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-500"
              />
              <div className="absolute bottom-2 right-3 font-mono text-[9px] text-zinc-400 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded">
                DETAL / PARKITET
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}