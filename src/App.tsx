import React, { useState } from 'react';
import HomeTab from './components/HomeTab';
import WorkTab from './components/WorkTab';
import AboutTab from './components/AboutTab';
import ContactTab from './components/ContactTab';

type Tab = 'home' | 'work' | 'about' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="min-h-screen bg-[#070708] text-zinc-100 font-sans selection:bg-red-600 selection:text-white flex flex-col justify-between p-6 sm:p-10 relative">
      
      {/* Header */}
      <header className="flex items-center justify-between text-xs tracking-wider z-20">
        <div className="flex items-center gap-12">
          <button 
            onClick={() => setActiveTab('home')}
            className="font-black text-xl tracking-tighter uppercase text-white cursor-pointer focus:outline-none"
          >
            SM<span className="text-red-600">.</span>
          </button>

          <nav className="flex items-center gap-6 sm:gap-8 font-mono text-[11px] text-zinc-400">
            {(['home', 'work', 'about', 'contact'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`uppercase tracking-widest transition pb-1 focus:outline-none ${
                  activeTab === tab
                    ? 'text-white border-b-2 border-red-600'
                    : 'hover:text-zinc-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="text-right font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden md:block">
          SPORTS VIDEOGRAPHER <br />
          <span className="text-zinc-300">&amp; SOCIAL MEDIA CREATOR</span>
        </div>
      </header>

      {/* Main Container - wklejone właściwe komponenty */}
      <main className="my-auto py-10 z-10 max-w-7xl mx-auto w-full">
        {activeTab === 'home' && <HomeTab onGoToWork={() => setActiveTab('work')} />}
        {activeTab === 'work' && <WorkTab />}
        {activeTab === 'about' && <AboutTab onGoToContact={() => setActiveTab('contact')} />}
        {activeTab === 'contact' && <ContactTab />}
      </main>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-500 gap-4 pt-6 border-t border-zinc-900 z-20">
        <div className="flex gap-6 uppercase tracking-wider">
          <a href="https://www.instagram.com/siewniakfilms/" target="_blank" rel="noreferrer" className="hover:text-white transition">Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white transition">TikTok</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition">YouTube</a>
        </div>
        <div className="uppercase tracking-widest">
          KATOWICE / SOSNOWIEC / ŚLĄSK © 2026
        </div>
      </footer>

    </div>
  );
}