// ==========================================
// PANEL STEROWANIA PORTFOLIO - SIEWNIAK MEDIA
// ==========================================
// 
// INSTRUKCJA DLA HUDEGO:
// 1. ZDJĘCIA I FILMY: Najpierw wgraj swoje pliki do folderu `public/img` (zdjęcia) 
//    lub `public/videos` (filmy) na GitHubie.
// 2. EDYCJA DANYCH: Edytuj wartości po prawej stronie dwukropka w apostrofach. 
//    Np. 'img/kosz1.jpg' zmień na 'img/twoje-nowe-zdjecie.jpg'.
// 3. ZAPISYWANIE: Po skończeniu edycji kliknij zielony przycisk "Commit changes" u góry strony.
// 4. UWAGA: Nie usuwaj apostrofów ('') ani przecinków (,) na końcu linii!

// ==========================================
// 1. ZAKŁADKA "ABOUT" (O MNIE)
// ==========================================
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
}

export const aboutData: AboutData = {
  heroImage: 'img/hero.jpg', // Główne zdjęcie profilowe
  philosophyImageLeft: 'img/kosz2.jpg', // Szerokie zdjęcie w tle cytatu "IT'S NOT JUST ABOUT THE GAME..."
  philosophyImageRight: 'img/kosz1.jpg', // Małe, wąskie zdjęcie na samym dole po prawej stronie
  
  bioText: 'Jestem twórcą wideo i koordynatorem social mediów z pasją do opowiadania prawdziwych historii. Zamieniam pot, emocje na trybunach i walkę na boisku w potężne, kinowe formaty pionowe.',
  philosophyText: 'Każdy mecz, każdy trening, każdy moment za kulisami ma swoją historię. Jestem tam po to, żeby ją uchwycić — surową, prawdziwą i kinową.',
  
  // Statystyki wyświetlane po prawej stronie w sekcji ABOUT
  stats: {
    years: '3+',
    projects: '50+',
    views: '100K+'
  }
};


// ==========================================
// 2. ZAKŁADKA "CONTACT" (KONTAKT)
// ==========================================
export interface ContactData {
  email: string;
  location: string;
  instagramUrl: string;
  tiktokUrl: string;
  portraitImage: string;
}

export const contactData: ContactData = {
  email: 'kontakt@siewniakmedia.pl',
  location: 'Silesia / Katowice, Poland', // Możesz użyć ' / ', zostanie to podzielone na dwie linie
  instagramUrl: 'https://ig.me/m/siewniakfilms',
  tiktokUrl: 'https://tiktok.com',
  portraitImage: 'img/hero.jpg' // Pionowe zdjęcie wyświetlane po prawej stronie w formularzu
};


// ==========================================
// 3. PROJEKTY (PORTFOLIO WIDEO)
// ==========================================
// 
// JAK DODAĆ NOWY PROJEKT:
// Skopiuj cały blok od klamerki { do }, włącznie z przecinkiem, 
// wklej pod spodem i zmień wartości. 
// PROJEKT NR 1 ("01") ZAWSZE WYŚWIETLA SIĘ JAKO GŁÓWNY FILM NA STRONIE HOME.

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
  // --- RZĄD 1 (Te 3 projekty wyświetlają się też na stronie HOME) ---
  {
    id: 'matchday', // Unikalne ID, np. jedno słowo, małe litery
    num: '01', // Numer w formacie '0X'
    title: 'MATCHDAY', // Główny tytuł (najlepiej drukowanymi literami)
    subtitle: 'BEHIND THE SCENES', // Podtytuł
    category: 'VIDEO PRODUCTION / SOCIAL MEDIA CONTENT / SPORTS', // Kategorie podzielone ukośnikiem
    videoSrc: 'videos/film2.mp4',
    posterSrc: 'img/kosz2.jpg', // ZDJĘCIE MINIATURKI (wgraj je najpierw do public/img)
    duration: '0:32',
    igUrl: 'https://www.instagram.com/reel/Dc5y5BxOLOe/' // Link otwierany po kliknięciu
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
  
  // --- RZĄD 2 (Widoczny tylko w zakładce WORK) ---
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