export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  videoSrc: string;
  posterSrc: string;
  duration: string;
  igUrl: string;
}

export interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  deliverables: string[];
}

export interface AboutData {
  heroImage: string;
  philosophyImageLeft: string;
  philosophyImageRight: string;
  bioText: string;
  philosophyText: string;
  stats: {
    years: string;
    projects: string;
    views: string;
  };
  services: ServiceItem[];
  trustedBy: string[];
}

export interface ContactData {
  email: string;
  location: string;
  instagramUrl: string;
  tiktokUrl: string;
  portraitImage: string;
}

export const marqueeItems: string[] = [
  'MATCHDAY COVERAGE',
  'SOCIAL MEDIA STRATEGY',
  'VERTICAL CINEMA 9:16',
  '4K HIGHLIGHT PACKS',
  'SPORTS BRANDING',
  'KATOWICE / SILESIA / WORLDWIDE'
];

export const aboutData: AboutData = {
  heroImage: 'img/hero.jpg',
  philosophyImageLeft: 'img/kosz2.jpg',
  philosophyImageRight: 'img/kosz1.jpg',
  bioText: 'Jestem twórcą wideo i koordynatorem social mediów z pasją do opowiadania prawdziwych historii. Zamieniam pot, emocje na trybunach i walkę na boisku w kinowe, pionowe formaty.',
  philosophyText: 'Każdy mecz, każdy trening, każdy moment za kulisami ma swoją historię. Jestem tam po to, żeby ją uchwycić — surową, prawdziwą i kinową.',
  stats: {
    years: '3+',
    projects: '50+',
    views: '100K+'
  },
  trustedBy: [
    'ZAGŁĘBIE SOSNOWIEC',
    'FREAK PARK',
    'LOOPZ PARKL',
    'PRO ATHLETES',
    'HUDERLOK'
  ],
  services: [
    {
      num: '01',
      title: 'MATCHDAY COVERAGE',
      desc: 'Kompleksowa obsługa spotkań na żywo. Od rozgrzewki i szatni po kluczowe emocje boiskowe.',
      deliverables: ['Real-time stories', 'Kinowy reel 24h po meczu', 'Kompilacje highlights']
    },
    {
      num: '02',
      title: 'REELS & TIKTOK PACKS',
      desc: 'Cykliczna produkcja krótkich form pionowych nastawionych na zasięgi i zaangażowanie społeczności.',
      deliverables: ['Pakiety 8-12 rolek/mc', 'Dobór dźwięków & trendów', 'Montaż dynamiczny z efektami']
    },
    {
      num: '03',
      title: 'COMMERCIAL & PROMO',
      desc: 'Wizerunkowe klipy promocyjne dla marek sportowych, prezentacje nowych strojów oraz transferów.',
      deliverables: ['Scenariusz i reżyseria', 'Color grading 4K', 'Wersje horyzontalne i pionowe']
    }
  ]
};

export const contactData: ContactData = {
  email: 'kontakt@siewniakmedia.pl',
  location: 'Silesia / Katowice, Poland',
  instagramUrl: 'https://ig.me/m/siewniakfilms',
  tiktokUrl: 'https://tiktok.com',
  portraitImage: 'img/hero.jpg'
};

export const projects: Project[] = [
  {
    id: 'matchday',
    num: '01',
    title: 'MATCHDAY',
    subtitle: 'BEHIND THE SCENES',
    category: 'VIDEO PRODUCTION / SOCIAL MEDIA CONTENT / SPORTS',
    videoSrc: 'videos/film2.mp4',
    posterSrc: 'img/kosz2.jpg',
    duration: '0:32',
    igUrl: 'https://www.instagram.com/reel/Dc5y5BxOLOe/'
  },
  {
    id: 'arena',
    num: '02',
    title: 'GAME EMOTIONS',
    subtitle: 'ON COURT FOCUS',
    category: 'SHORT-FORM REELS / ACTION / HIGHLIGHTS',
    videoSrc: 'videos/film1.mp4',
    posterSrc: 'img/kosz1.jpg',
    duration: '0:24',
    igUrl: 'https://www.instagram.com/reel/Dcs_4bTlfU8/'
  },
  {
    id: 'street',
    num: '03',
    title: 'LOCKER ROOM',
    subtitle: 'RAW ATMOSPHERE',
    category: 'CINEMATIC / STORYTELLING / REELS',
    videoSrc: 'videos/film3.mp4',
    posterSrc: 'img/hero.jpg',
    duration: '0:45',
    igUrl: 'https://www.instagram.com/siewniakfilms/'
  },
  {
    id: 'journey',
    num: '04',
    title: 'THE JOURNEY',
    subtitle: 'AWAY GAME VLOG',
    category: 'VLOG / LIFESTYLE / YOUTUBE',
    videoSrc: 'videos/film1.mp4',
    posterSrc: 'img/hero.jpg',
    duration: '2:15',
    igUrl: 'https://www.instagram.com/siewniakfilms/'
  },
  {
    id: 'promo',
    num: '05',
    title: 'NEW KIT REVEAL',
    subtitle: 'COMMERCIAL',
    category: 'COMMERCIAL / PROMO / REELS',
    videoSrc: 'videos/film2.mp4',
    posterSrc: 'img/kosz1.jpg',
    duration: '0:50',
    igUrl: 'https://www.instagram.com/siewniakfilms/'
  },
  {
    id: 'training',
    num: '06',
    title: 'THE GRIND',
    subtitle: 'PRE-SEASON',
    category: 'TRAINING / RAW / SHORT-FORM',
    videoSrc: 'videos/film3.mp4',
    posterSrc: 'img/kosz2.jpg',
    duration: '0:15',
    igUrl: 'https://www.instagram.com/siewniakfilms/'
  },
  {
    id: 'fans',
    num: '07',
    title: 'THE WALL',
    subtitle: 'ULTRAS ATMOSPHERE',
    category: 'FANS / MATCHDAY / CINEMATIC',
    videoSrc: 'videos/film1.mp4',
    posterSrc: 'img/kosz1.jpg',
    duration: '1:05',
    igUrl: 'https://www.instagram.com/siewniakfilms/'
  }
];