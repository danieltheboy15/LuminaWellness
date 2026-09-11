import { motion } from "motion/react";
import { Activity, ArrowRight } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function ZepliteDetail() {
  const cards = [
    {
      title: "Curbs appetite",
      desc: "feel satisfied with less, without the willpower battle",
    },
    {
      title: "Steady results",
      desc: "gradual, sustainable weight loss",
    },
    {
      title: "Locally accessible",
      desc: "no import wait or overseas pricing",
    }
  ];

  return (
    <section
      id="zeplite-deep-dive"
      className="px-4 sm:px-6 lg:px-8 py-24 bg-white border-t border-zinc-200 relative overflow-hidden text-zinc-950 text-left"
    >
      {/* Absolute glow meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#330e53]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Main Copy Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#330e53] uppercase tracking-widest bg-zinc-50 border border-zinc-200 px-3 py-1 rounded-full shadow-xs font-semibold">
              <Activity className="w-4 h-4 text-[#330e53]" />
              <span>Zeplite In Detail</span>
            </div>

            <h2 id="zeplite-detail-title" className="text-3xl sm:text-5xl font-display font-black text-zinc-950 tracking-tight leading-none">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#330e53] to-[#521884] font-display">Zeplite</span> Works
            </h2>

            <div className="space-y-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Zeplite works with your body’s natural appetite signals. It helps you feel full sooner, stay full longer, and quiet the constant food cravings that make weight loss feel impossible.
              </p>
              <p>
                It’s a once-weekly injection, and the dose is stepped up gradually over time for the best results. It’s not a fat burner, a tea, or a quick fix, but it’s real treatment that works alongside healthier eating and movement for steady, lasting results.
              </p>
            </div>
            
            <div className="pt-4">
              <a
                id="zeplite-detail-shop-btn"
                href={BRAND_CONFIG.zepliteStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 py-4 px-8 rounded-full text-xs font-bold text-white bg-[#330e53] hover:bg-[#43146d] active:scale-95 transition-all text-center font-display shadow-md cursor-pointer duration-200"
              >
                <span>Shop Zeplite Treatment</span>
                <ArrowRight className="w-3.5 h-3.5" style={{ strokeWidth: 3 }} />
              </a>
            </div>
          </div>

          {/* Cards Stack Side */}
          <div className="lg:col-span-6 space-y-4 flex flex-col">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl w-full bg-zinc-50/70 border border-zinc-200 hover:border-[#330e53]/40 hover:bg-white transition-all duration-300 text-left relative overflow-hidden group flex flex-col justify-center shadow-xs"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#330e53] opacity-0 group-hover:opacity-100 transition-all duration-305" />
                <h3 className="font-display font-black text-lg text-zinc-950 mb-2 tracking-tight">{card.title}</h3>
                <p className="text-sm text-zinc-600 font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
