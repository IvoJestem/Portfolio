import { aboutData } from '../data/projects';

interface AboutTabProps {
  onGoToContact: () => void;
}

export default function AboutTab({ onGoToContact }: AboutTabProps) {
  return (
    <div className="animate-fadeIn max-w-[1600px] mx-auto w-full space-y-24 py-6">
      
      {/* GÓRNA SEKCJA */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start h-full">
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-6">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">/ 03</span>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              ABOUT <br /> <span className="text-zinc-600">THE CREATOR</span>
            </h1>
          </div>
          <div className="space-y-4">
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-relaxed">
              SPORTS. STORIES. EMOTIONS.<br /> THAT&apos;S WHAT I CAPTURE.
            </p>
            <p className="text-[11px] text-zinc-500 font-mono leading-relaxed max-w-[280px]">
              {aboutData.bioText}
            </p>
          </div>
          <div className="pt-8 flex items-center gap-6">
            <button onClick={onGoToContact} className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 group cursor-pointer">
              <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
            </button>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">LET&apos;S WORK TOGETHER</span>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-full max-w-[360px] aspect-[2/3] border border-zinc-800/50 bg-[#0a0a0a] rounded-sm overflow-hidden">
            <img src={aboutData.heroImage} alt="Creator" className="w-full h-full object-cover grayscale contrast-125" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-12 left-8 font-mono text-[9px] text-zinc-400 uppercase tracking-widest space-y-1.5">
              <p>BETTER</p><p>CONTENT</p><p>BIGGER</p><p>DREAMS</p>
              <p className="text-white font-black text-sm pt-4">SM.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <div className="max-w-md space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block border-b border-zinc-800 pb-2">WHO I AM</span>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white leading-none">I&apos;M A CREATOR <br />AT HEART</h2>
                <p className="text-[11px] font-mono text-zinc-500 leading-relaxed pt-2">
                  Zawsze ciągnęło mnie do sportu — tej nieznanej energii i pasji. Połączyłem to z aparatem i teraz tworzę materiały, które pomagają sportowcom, drużynom i markom opowiadać ich historię poprzez angażujące formaty social media.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded border border-zinc-800 flex items-center justify-center text-zinc-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="7" width="18" height="12" rx="2" strokeWidth="1.5" />
                      <circle cx="12" cy="13" r="3" strokeWidth="1.5" />
                      <path d="M7 7V5h10v2" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </div>
                  <h4 className="text-[9px] font-bold uppercase text-white tracking-widest">VIDEOGRAPHY</h4>
                  <p className="text-[8px] font-mono text-zinc-600 uppercase">CINEMATIC & RAW</p>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded border border-zinc-800 flex items-center justify-center text-zinc-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="7" y="3" width="10" height="18" rx="2" strokeWidth="1.5" />
                      <path d="M12 17h.01" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h4 className="text-[9px] font-bold uppercase text-white tracking-widest">SOCIAL MEDIA</h4>
                  <p className="text-[8px] font-mono text-zinc-600 uppercase">SHORT FORM & REELS</p>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded border border-zinc-800 flex items-center justify-center text-zinc-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <polygon points="9 6 18 12 9 18" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="text-[9px] font-bold uppercase text-white tracking-widest">STORYTELLING</h4>
                  <p className="text-[8px] font-mono text-zinc-600 uppercase">REAL EMOTIONS</p>
                </div>
              </div>
            </div>

            <div className="pl-8 border-l border-zinc-800/80 space-y-8 text-right font-mono hidden sm:block">
              <div>
                <span className="text-3xl font-black text-white block">{aboutData.stats.years}</span>
                <span className="text-[9px] uppercase tracking-widest text-zinc-600">YEARS<br/>EXPERIENCE</span>
              </div>
              <div>
                <span className="text-3xl font-black text-white block">{aboutData.stats.projects}</span>
                <span className="text-[9px] uppercase tracking-widest text-zinc-600">PROJECTS<br/>COMPLETED</span>
              </div>
              <div>
                <span className="text-3xl font-black text-white block">{aboutData.stats.views}</span>
                <span className="text-[9px] uppercase tracking-widest text-zinc-600">TOTAL VIEWS<br/>ACROSS PLATFORMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOWA SEKCJA: SERVICES & PACKAGES */}
      <section className="pt-12 border-t border-zinc-900">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>OFFERING & SERVICES</span>
            <div className="w-16 h-[1px] bg-zinc-800"></div>
          </div>
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">PACKAGES / 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutData.services.map((srv) => (
            <div key={srv.num} className="border border-zinc-800/60 bg-[#080808] p-8 space-y-6 rounded-sm flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono text-zinc-600 uppercase block">/ {srv.num}</span>
                <h3 className="text-xl font-black uppercase text-white tracking-tight">{srv.title}</h3>
                <p className="text-[11px] font-mono text-zinc-400 leading-relaxed">{srv.desc}</p>
              </div>
              <div className="pt-6 border-t border-zinc-900 space-y-2">
                <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-600 block">DELIVERABLES:</span>
                {srv.deliverables.map((item, idx) => (
                  <p key={idx} className="text-[10px] font-mono text-zinc-300 flex items-center gap-2">
                    <span className="text-zinc-600">+</span> {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NOWA SEKCJA: TRUSTED BY */}
      <section className="pt-12 border-t border-zinc-900">
        <div className="flex items-center gap-6 mb-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          <span>COLLABORATIONS & TEAMS</span>
          <div className="w-16 h-[1px] bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {aboutData.trustedBy.map((brand, idx) => (
            <div
              key={idx}
              className="border border-zinc-900 p-6 flex items-center justify-center text-center font-mono text-[10px] tracking-widest text-zinc-500 uppercase hover:text-white hover:border-zinc-700 transition"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* DOLNA SEKCJA: PHILOSOPHY */}
      <section className="pt-12 border-t border-zinc-900">
        <div className="flex items-center gap-6 mb-8 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <span>MY PHILOSOPHY</span>
          <div className="w-16 h-[1px] bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-48">
          <div className="lg:col-span-7 relative w-full h-full border border-zinc-800/50 bg-[#0a0a0a] rounded-sm overflow-hidden group">
            <img src={aboutData.philosophyImageLeft} alt="Stadium" className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition duration-700" />
            <div className="absolute inset-0 bg-black/60 flex items-center p-12">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-snug max-w-lg">
                &ldquo;IT&apos;S NOT JUST ABOUT THE GAME. IT&apos;S ABOUT THE PEOPLE.&rdquo;
              </h3>
            </div>
          </div>

          <div className="lg:col-span-3 px-6 space-y-6">
            <p className="text-[10px] font-mono text-zinc-400 leading-relaxed">
              {aboutData.philosophyText}
            </p>
            <div className="text-zinc-300 font-serif italic text-3xl tracking-widest">
              Hudy.
            </div>
          </div>

          <div className="lg:col-span-2 relative w-full h-full border border-zinc-800/50 rounded-sm overflow-hidden">
            <img src={aboutData.philosophyImageRight} alt="Detail" className="w-full h-full object-cover grayscale contrast-125" />
            <div className="absolute bottom-4 right-4 text-right font-mono text-[8px] text-zinc-500 uppercase tracking-widest space-y-1">
              <p>SPORTS</p><p>CONTENT</p><p>CREATOR</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}