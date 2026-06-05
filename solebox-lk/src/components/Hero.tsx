import { ArrowDown } from "lucide-react";

interface HeroProps {
  onScrollClick: () => void;
}

export default function Hero({ onScrollClick }: HeroProps) {
  return (
    <div>
      <section className="relative bg-[#F4F1EA] pt-12 sm:pt-16 pb-0 px-4 sm:px-6 md:px-8 overflow-hidden border-b border-[#e4e0da]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch min-h-[440px]">
            {/* Left Content Column */}
            <div className="flex flex-col justify-center py-6 sm:py-12 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#C9A84C]">
                <span className="h-0.5 w-6 bg-[#C9A84C]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Premium Footwear</span>
              </div>

              {/* Display Typography */}
              <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#1a1814] leading-[1.05]">
                No roads.<br />
                No limits.<br />
                <span className="font-serif italic text-[#C9A84C]">Just you.</span>
              </h1>

              <p className="max-w-md font-sans text-[#6b6860] leading-relaxed text-sm sm:text-base font-normal">
                Export quality sport sneakers. Every pair handpicked for active lifestyles in Sri Lanka. Delivered safely island-wide via trustable cash-on-delivery service.
              </p>

              {/* Precise action handlers */}
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  id="hero-explore-btn"
                  onClick={onScrollClick}
                  className="px-6 py-3.5 bg-[#1a1814] hover:bg-zinc-800 text-[#F7F4EE] font-mono font-bold tracking-widest text-xs uppercase rounded-sm transition-all cursor-pointer select-none active:scale-95 shadow-md flex items-center gap-2"
                >
                  <span>Shop core collection</span>
                  <ArrowDown size={13} />
                </button>
                
                <button
                  id="hero-story-scroller"
                  onClick={() => {
                    const el = document.getElementById("philosophy");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3.5 bg-transparent hover:bg-zinc-100 text-[#1a1814] border border-[#1a1814] font-mono font-bold tracking-widest text-xs uppercase rounded-sm transition-all cursor-pointer select-none"
                >
                  See elements
                </button>
              </div>
            </div>

            {/* Right Graphic/Mock Column */}
            <div className="flex items-end justify-center pt-8 md:pt-16">
              <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] bg-[#ece9e2] rounded-t-lg flex items-center justify-center overflow-hidden border border-[#e4e0da] border-b-0 shadow-sm group">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                
                <div className="relative z-10 text-center flex flex-col items-center justify-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out">
                  {/* Luxury shoe path representation */}
                  <svg className="w-36 h-36 sm:w-44 sm:h-44 text-[#8a8370] opacity-[0.85]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 13h2l2 3h4l2-4h3l3 4h2" />
                    <path d="M3 13V9a2 2 0 0 1 2-2h3M21 13V9a2 2 0 0 0-2-2h-3" />
                    <path d="M3 13h18v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z" />
                    <line x1="12" y1="7" x2="13" y2="11" />
                    <line x1="10" y1="7" x2="11" y2="11" />
                  </svg>
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8a8370] font-black mt-3">Curated Series S1</span>
                </div>

                <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#1a1814] font-mono font-black text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-sm select-none">
                  New drop
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Scrolling Ticker / Marquee bar (Looping CSS) */}
      <div className="relative py-3.5 bg-[#1a1814] overflow-hidden whitespace-nowrap border-b border-[#C9A84C]/20 select-none">
        <div className="inline-block animate-[scroll_24s_linear_infinite] whitespace-nowrap flex gap-8 font-mono text-[10px] tracking-[0.25em] text-[#C9A84C] uppercase font-black">
          <span>Premium Imported</span>
          <span>·</span>
          <span>Export Quality</span>
          <span>·</span>
          <span>Island-wide Delivery</span>
          <span>·</span>
          <span>Cash on Delivery</span>
          <span>·</span>
          <span>EU Sizes 39–45</span>
          <span>·</span>
          <span>Uniform Price Rs. 17,990</span>
          <span>·</span>
          <span>Premium Imported</span>
          <span>·</span>
          <span>Export Quality</span>
          <span>·</span>
          <span>Island-wide Delivery</span>
          <span>·</span>
          <span>Cash on Delivery</span>
          <span>·</span>
          <span>EU Sizes 39–45</span>
          <span>·</span>
          <span>Uniform Price Rs. 17,990</span>
        </div>
      </div>
    </div>
  );
}
