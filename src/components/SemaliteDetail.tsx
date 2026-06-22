import { motion } from "motion/react";
import { Flame, ArrowUpRight } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function SemaliteDetail() {
  const cards = [
    {
      title: "Proven approach",
      desc: "a trusted GLP-1 receptor agonist used worldwide",
    },
    {
      title: "Reduces cravings",
      desc: "quiet the food noise and eat less, comfortably",
    }
  ];

  return (
    <section
      id="semalite-deep-dive"
      className="px-4 sm:px-6 lg:px-8 py-24 bg-[#fcfbfc] border-t border-zinc-200 relative overflow-hidden text-left"
    >
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand/5 rounded-full blur-[140px] -z-10 animate-pulse-slow" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Main copy column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-650 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full shadow-inner">
              <Flame className="w-4 h-4 text-zinc-700" />
              <span className="font-bold uppercase tracking-wider text-[10px]">Semalite In Display</span>
            </div>

            <h2 id="semalite-detail-title" className="text-3xl sm:text-5xl font-display font-black text-zinc-900 tracking-tight leading-none">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-purple-800 font-display">Semalite</span> Works
            </h2>

            <div className="space-y-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed font-sans">
              <p>
                Semalite contains one of the most widely used GLP-1 treatments for weight loss worldwide. Like Zeplite, it works with your body’s natural appetite signals to help you feel full sooner and reduce cravings, making it easier to eat less without constant willpower battles.
              </p>
              <p>
                It’s also a once-weekly injection, stepped up gradually for the best results. Semalite is a strong option for those who prefer a single strength-based approach, and works best alongside healthier eating and movement for steady, lasting results.
              </p>
            </div>

            <div className="pt-4">
              <a
                id="semalite-detail-shop-btn"
                href={BRAND_CONFIG.semaliteStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-4 px-8 rounded-full text-xs font-bold text-white bg-zinc-950 hover:bg-zinc-800 active:scale-95 transition-all text-center cursor-pointer shadow-md duration-200 font-display"
              >
                <span>Shop Semalite Treatment</span>
                <ArrowUpRight className="w-4 h-4 text-[#dfabeb]" />
              </a>
            </div>
          </div>

          {/* Cards Stack Side replacing Interactive Model */}
          <div className="lg:col-span-5 space-y-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 hover:border-zinc-400 hover:shadow-lg transition-all duration-300 text-left relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-zinc-900 opacity-0 group-hover:opacity-100 transition-all duration-305" />
                <h3 className="font-display font-black text-lg text-zinc-900 mb-2 tracking-tight">{card.title}</h3>
                <p className="text-sm text-zinc-550 text-zinc-500 font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
