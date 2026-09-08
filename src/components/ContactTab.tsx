import React, { useState } from 'react';
import { contactData } from '../data/projects';

export default function ContactTab() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  // Funkcja płynnie przewijająca stronę do formularza na mniejszych ekranach
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fadeIn max-w-[1600px] mx-auto w-full h-full flex flex-col justify-center py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Kolumna 1: Tytuł */}
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-6">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">/ 04</span>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.85]">
              GET IN <br /> <span className="text-zinc-600">TOUCH</span>
            </h1>
          </div>
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-relaxed">
            LET&apos;S CREATE SOMETHING <br /> GREAT TOGETHER.
          </p>
          <p className="text-[11px] text-zinc-500 font-mono leading-relaxed pt-4">
            Have a project in mind, need a highlight video, or want to collaborate? I'm always open to new ideas, partnerships and exciting opportunities. Drop me a message — I'll get back to you as soon as possible.
          </p>
          
          {/* Interaktywny przycisk: klinięcie przenosi do formularza lub otwiera maila */}
          <div className="pt-8 flex items-center gap-6">
            <button 
              onClick={scrollToForm}
              className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-300 hover:bg-white hover:text-black hover:border-white transition duration-300 group cursor-pointer"
              title="Przejdź do formularza"
            >
              <span className="text-sm transition-transform group-hover:translate-y-1">↓</span>
            </button>
            <a 
            //  href={`mailto:${contactData.email}`}
              className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition"
            >
              SEND AN EMAIL
            </a>
          </div>
        </div>

        {/* Kolumna 2: Czysty, minimalistyczny Formularz z ID do skrolowania */}
        <div id="contact-form" className="lg:col-span-4 scroll-mt-12">
          <form onSubmit={handleSubmit} className="space-y-6 font-mono text-[10px]">
            <div className="space-y-2">
              <label className="text-zinc-500 uppercase tracking-widest block">NAME</label>
              <input type="text" required placeholder="Your name" className="w-full bg-transparent border border-zinc-800 rounded-sm px-4 py-3 text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition" />
            </div>
            <div className="space-y-2">
              <label className="text-zinc-500 uppercase tracking-widest block">EMAIL</label>
              <input type="email" required placeholder="you@example.com" className="w-full bg-transparent border border-zinc-800 rounded-sm px-4 py-3 text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition" />
            </div>
            <div className="space-y-2">
              <label className="text-zinc-500 uppercase tracking-widest block">SUBJECT</label>
              <select className="w-full bg-transparent border border-zinc-800 rounded-sm px-4 py-3 text-zinc-200 focus:outline-none focus:border-zinc-500 transition appearance-none cursor-pointer">
                <option className="bg-black">Matchday Video</option>
                <option className="bg-black">Social Media Management</option>
                <option className="bg-black">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-zinc-500 uppercase tracking-widest block">MESSAGE</label>
              <textarea rows={5} required placeholder="Tell me about your project..." className="w-full bg-transparent border border-zinc-800 rounded-sm px-4 py-3 text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-black uppercase tracking-widest rounded-sm transition flex items-center justify-between px-6 mt-4 cursor-pointer">
              <span>{sent ? "MESSAGE SENT" : "SEND MESSAGE"}</span>
              {!sent && <span>→</span>}
            </button>
          </form>
        </div>

        {/* Kolumna 3: Dynamiczne Info & Sociale */}
        <div className="lg:col-span-2 font-mono text-[10px] space-y-12">
          <div className="space-y-6">
            <span className="text-zinc-600 uppercase tracking-widest block border-b border-zinc-800 pb-2">CONTACT INFO</span>
            <div className="space-y-1">
              <span className="uppercase tracking-widest text-zinc-500 block">EMAIL</span>
             // <a href={`mailto:${contactData.email}`} className="text-zinc-200 hover:text-white transition">
                {contactData.email}
              </a>
            </div>
            <div className="space-y-1">
              <span className="uppercase tracking-widest text-zinc-500 block">LOCATION</span>
              <p className="text-zinc-200">
                {contactData.location.split(' / ')[0]} / <br className="hidden lg:block"/>
                {contactData.location.split(' / ')[1]} <br />
                <span className="text-zinc-600">(Remote / Worldwide)</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-zinc-600 uppercase tracking-widest block border-b border-zinc-800 pb-2">FOLLOW ME</span>
            <div className="space-y-3 text-zinc-300">
              <a href={contactData.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition">
                <span>IG</span> <span>Instagram</span>
              </a>
              <a href={contactData.tiktokUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition">
                <span>TT</span> <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Kolumna 4: Dynamiczny portret */}
        <div className="lg:col-span-3 flex justify-end h-full">
          <div className="relative w-full max-w-[300px] aspect-[1/2] overflow-hidden border border-zinc-900 rounded-sm">
            <img src={contactData.portraitImage} alt="Videographer" className="w-full h-full object-cover grayscale contrast-125" />
            <div className="absolute top-8 right-8 text-right font-mono text-[9px] text-zinc-500 uppercase tracking-widest space-y-1">
              <p>REAL</p><p>SPORTS.</p><p className="text-white">REAL</p><p className="text-white">STORIES.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}