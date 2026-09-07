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
  }
];