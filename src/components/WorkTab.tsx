import React, { useState } from 'react';

interface WorkItem {
  id: string;
  category: 'BASKETBALL' | 'HOCKEY' | 'EVENT' | 'SOCIAL MEDIA';
  categoryLabel: string;
  title: string;
  subtitle: string;
  duration: string;
  imageSrc: string;
  videoSrc?: string;
  igUrl: string;
  colSpanTop?: string; // dla rzędu górnego
  colSpanBottom?: string; // dla rzędu dolnego
}

const workItems: WorkItem[] = [
  // Górny rząd (3 duże karty)
  {
    id: '1',
    category: 'BASKETBALL',
    categoryLabel: 'BASKETBALL',
    title: 'BEHIND THE SCENES',
    subtitle: 'MATCHDAY',
    duration: '01:32',
    imageSrc: 'img/kosz2.jpg',
    videoSrc: 'videos/film2.mp4',
    igUrl: 'https://www.instagram.com/reel/Dc5y5BxOLOe/'
  },
  {
    id: '2',
    category: 'BASKETBALL',
    categoryLabel: 'BASKETBALL',
    title: 'GAME DAY',
    subtitle: 'HIGHLIGHTS',
    duration: '00:58',
    imageSrc: 'img/kosz1.jpg',
    videoSrc: 'videos/film2.mp4',
    igUrl: 'https://www.instagram.com/reel/Dc5y5BxOLOe/'
  },
  {
    id: '3',
    category: 'HOCKEY',
    categoryLabel: 'HOCKEY / ON ICE',
    title: 'DISCIPLINE',
    subtitle: 'GAME SPEED',
    duration: '01:15',
    imageSrc: 'img/hero.jpg',
    videoSrc: 'videos/film1.mp4',
    igUrl: 'https://www.instagram.com/reel/Dcs_4bTlfU8/'
  },
  // Dolny rząd (4 zróżnicowane karty)
  {
    id: '4',
    category: 'EVENT',
    categoryLabel: 'EVENT / PLENER',
    title: 'THE JOURNEY',
    subtitle: 'RELACJA Z ZAMKU',
    duration: '02:24',
    imageSrc: 'img/hero.jpg',
    videoSrc: 'videos/film1.mp4',
    igUrl: 'https://www.instagram.com/reel/Dcs_4bTlfU8/'
  },
  {
    id: '5',
    category: 'BASKETBALL',
    categoryLabel: 'BASKETBALL',
    title: 'DETAILS',
    subtitle: 'BTS & EMOCJE',
    duration: '00:47',
    imageSrc: 'img/kosz1.jpg',
    videoSrc: 'videos/film2.mp4',
    igUrl: 'https://www.instagram.com/reel/Dc5y5BxOLOe/'
  },
  {
    id: '6',
    category: 'HOCKEY',
    categoryLabel: 'HOCKEY',
    title: 'ULTRAS',
    subtitle: 'ATMOSPHERE',
    duration: '01:08',
    imageSrc: 'img/kosz2.jpg',
    videoSrc: 'videos/film1.mp4',
    igUrl: 'https://www.instagram.com/reel/Dcs_4bTlfU8/'
  },
  {
    id: '7',
    category: 'SOCIAL MEDIA',
    categoryLabel: 'SOCIAL MEDIA',
    title: 'SHORTS',
    subtitle: 'VERTICAL CONTENT',
    duration: '00:36',
    imageSrc: 'img/kosz2.jpg',
    videoSrc: 'videos/film3.mp4',
    igUrl: 'https://www.instagram.com/siewniakfilms/'
  }
];

const categories = [
  { key: 'ALL', label: 'ALL' },
  { key: 'BASKETBALL', label: 'BASKETBALL' },
  { key: 'HOCKEY', label: 'HOCKEY' },
  { key: 'EVENT', label: 'EVENT' },
  { key: 'SOCIAL MEDIA', label: 'SOCIAL MEDIA' },
];

export default function WorkTab() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredItems = activeFilter === 'ALL'
    ? workItems
    : workItems.filter(item => item.category === activeFilter);

  // Podział na rząd górny (pierwsze 3) i dolny (pozostałe 4) przy filtrze ALL
  const topRow = activeFilter === 'ALL' ? filteredItems.slice(0, 3) : filteredItems;
  const bottomRow = activeFilter === 'ALL' ? filteredItems.slice(3) : [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
      
      {/* LEWA KOLUMNA: Tytuł i Filtry */}
      <div className="lg:col-span-3 flex flex-col justify-between self-stretch space-y-12 pr-4">
        <div className="space-y-8">
          <div>
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest block mb-2">
              / 02
            </span>
            <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              WORK
            </h1>
            <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-3">
              SPORTS VIDEOS. SOCIAL CONTENT.<br />REAL STORIES.
            </p>
          </div>

          {/* Filtry z licznikami */}
          <nav className="space-y-2.5 font-mono text-xs pt-4">
            {categories.map((cat) => {
              const count = cat.key === 'ALL' 
                ? workItems.length 
                : workItems.filter(i => i.category === cat.key).length;

              const isSelected = activeFilter === cat.key;

              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`flex items-center justify-between w-full py-1 text-left transition ${
                    isSelected ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isSelected && <span className="text-white">—</span>}
                    {cat.label}
                  </span>
                  <span className="text-[11px] text-zinc-600">{count}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Wskaźnik scrolla na dole lewej kolumny */}
        <div className="hidden lg:flex flex-col gap-2 font-mono text-[10px] text-zinc-600 uppercase tracking-widest pt-8">
          <span>SCROLL TO EXPLORE</span>
          <span className="text-sm">↓</span>
        </div>
      </div>

      {/* PRAWA KOLUMNA: Siatka projektów */}
      <div className="lg:col-span-9 space-y-6">
        
        {/* Rząd 1: 3 kolumny */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {topRow.map((item) => (
            <WorkCard key={item.id} item={item} aspect="aspect-[4/5]" />
          ))}
        </div>

        {/* Rząd 2: 4 karty o układzie asymetrycznym (np. pierwsza szersza) */}
        {bottomRow.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5 pt-2">
            {bottomRow.map((item, index) => {
              // Pierwsza karta w rzędzie zajmuje 4 kolumny, reszta po 2-3
              const colSpan = index === 0 ? 'md:col-span-4' : 'md:col-span-3 md:last:col-span-2';
              return (
                <div key={item.id} className={colSpan}>
                  <WorkCard item={item} aspect="aspect-[4/5]" />
                </div>
              );
            })}
          </div>
        )}

      </div>

    </div>
  );
}

// Pojedyncza karta projektu ze zrzutu ekranu
function WorkCard({ item, aspect }: { item: WorkItem; aspect: string }) {
  return (
    <a
      href={item.igUrl}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950 p-4 transition duration-500 hover:border-zinc-700"
    >
      {/* Zdjęcie / Tło wideo */}
      <div className={`relative ${aspect} w-full overflow-hidden rounded-lg bg-zinc-900`}>
        <img
          src={item.imageSrc}
          alt={item.title}
          className="h-full w-full object-cover grayscale contrast-125 transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

        {/* Tag u góry */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            {item.categoryLabel}
          </span>
        </div>

        {/* Ikona Play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
            <svg className="h-4 w-4 fill-current pl-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Dolna belka informacyjna */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between font-mono text-[10px]">
          <div>
            <h3 className="font-sans text-xs font-black uppercase tracking-tight text-white">
              {item.title}
            </h3>
            <p className="text-zinc-400 uppercase">{item.subtitle}</p>
          </div>
          <span className="text-zinc-500">{item.duration}</span>
        </div>
      </div>
    </a>
  );
}