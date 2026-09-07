import React, { useState } from 'react';

export default function ContactTab() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Matchday / Relacja meczowa',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="animate-fadeIn">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* 1. Lewa kolumna: Tytuł i manifest */}
        <div className="lg:col-span-3 space-y-8">
          <div>
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest block mb-2">
              / 04
            </span>
            <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.9]">
              GET IN <br />
              <span className="text-zinc-500">TOUCH</span>
            </h1>
            <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-4">
              LET&apos;S CREATE SOMETHING <br />GREAT TOGETHER.
            </p>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            Masz pomysł na projekt, potrzebujesz dynamicznej relacji z meczu, rolek wizerunkowych czy stałego wsparcia w social mediach? Napisz do mnie — dogadamy szczegóły i terminy.
          </p>

          <div className="pt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-300">
              <span className="text-xs">→</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              SEND A MESSAGE
            </span>
          </div>
        </div>

        {/* 2. Formularz */}
        <div className="lg:col-span-4 bg-zinc-950/40">
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div>
              <label className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1.5">
                NAME
              </label>
              <input
                type="text"
                required
                placeholder="Twoje imię / nazwa klubu"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0d0d0f] border border-zinc-800 rounded px-3.5 py-2.5 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition text-xs"
              />
            </div>

            <div>
              <label className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1.5">
                EMAIL
              </label>
              <input
                type="email"
                required
                placeholder="kontakt@twojadomena.pl"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0d0d0f] border border-zinc-800 rounded px-3.5 py-2.5 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition text-xs"
              />
            </div>

            <div>
              <label className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1.5">
                SUBJECT
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#0d0d0f] border border-zinc-800 rounded px-3.5 py-2.5 text-zinc-200 focus:outline-none focus:border-zinc-500 transition text-xs cursor-pointer"
              >
                <option>Matchday / Relacja meczowa</option>
                <option>Short-form wideo / Rolki</option>
                <option>Prowadzenie profili social media</option>
                <option>Fotografia sportowa &amp; reportaż</option>
                <option>Inny projekt</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1.5">
                MESSAGE
              </label>
              <textarea
                rows={4}
                required
                placeholder="Opisz krótko czego potrzebujesz, gdzie i kiedy..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0d0d0f] border border-zinc-800 rounded px-3.5 py-2.5 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition text-xs resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-zinc-100 hover:bg-white text-black font-bold uppercase tracking-wider text-xs rounded transition flex items-center justify-center gap-2 mt-2"
            >
              <span>{sent ? "WIADOMOŚĆ WYSŁANA!" : "SEND MESSAGE"}</span>
              {!sent && <span>→</span>}
            </button>
          </form>
        </div>

        {/* 3. Dane kontaktowe i Sociale */}
        <div className="lg:col-span-2 space-y-8 font-mono border-l border-zinc-800/80 pl-6 text-xs">
          <div className="space-y-4">
            <span className="text-[10px] text-zinc-600 uppercase tracking-widest block border-b border-zinc-800 pb-1">
              CONTACT INFO
            </span>

            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-wider text-zinc-500 block">EMAIL</span>
              <a href="mailto:kontakt@siewniakmedia.pl" className="text-zinc-200 hover:text-white transition break-all">
                kontakt@siewniakmedia.pl
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-wider text-zinc-500 block">LOCATION</span>
              <p className="text-zinc-200">
                Śląsk / Zagłębie Dąbrowskie <br />
                <span className="text-zinc-500 text-[10px]">(Katowice, Sosnowiec &amp; Wyjazdy)</span>
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-zinc-800">
            <span className="text-[10px] text-zinc-600 uppercase tracking-widest block">
              FOLLOW ME
            </span>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/siewniakfilms/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-zinc-400 hover:text-white transition"
              >
                <span>Instagram</span>
                <span className="text-[10px]">↗</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-zinc-400 hover:text-white transition"
              >
                <span>TikTok</span>
                <span className="text-[10px]">↗</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-zinc-400 hover:text-white transition"
              >
                <span>YouTube</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800 text-[9px] text-zinc-600 uppercase tracking-widest space-y-0.5">
            <p>SAME PASSION</p>
            <p>DIFFERENT FIELDS</p>
            <p className="text-zinc-400">ONE VISION</p>
          </div>
        </div>

        {/* 4. Prawa kolumna ze zdjęciem */}
        <div className="lg:col-span-3 flex justify-end">
          <div className="relative aspect-[3/4] w-full max-w-[290px] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl">
            <img
              src="img/hero.jpg"
              alt="Operator kamery"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute top-4 right-4 text-right font-mono text-[9px] text-zinc-500 uppercase tracking-widest space-y-0.5">
              <p>REAL</p>
              <p>SPORTS</p>
              <p className="text-white font-bold">REAL</p>
              <p className="text-white font-bold">STORIES</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}