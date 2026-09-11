import { motion } from "motion/react";
import { Sparkles, Zap, TrendingDown, MapPin } from "lucide-react";

export default function HowItWorks() {
  const cards = [
    {
      icon: <Zap className="w-6 h-6 text-[#330e53]" />,
      tag: "Dual-Action Pathway",
      title: "Dual-action",
      desc: "Tirzepatide targets appetite through two pathways, GLP-1 and GIP, naturally signalling satiety and reducing food noise.",
      badgeColor: "border-[#330e53]/20 bg-[#330e53]/10 text-[#330e53]"
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-[#330e53]" />,
      tag: "Sustainable Progress",
      title: "Steady results",
      desc: "Gradual, sustainable, healthy weight loss with systematic dose step-ups designed to maintain long-term results.",
      badgeColor: "border-[#330e53]/20 bg-[#330e53]/10 text-[#330e53]"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#330e53]" />,
      tag: "Direct in Nigeria",
      title: "Locally accessible",
      desc: "No import wait or overseas pricing. Genuine therapy delivered straight to your door with temperature control.",
      badgeColor: "border-[#330e53]/20 bg-[#330e53]/10 text-[#330e53]"
    }
  ];

  return (
    <section
      id="how-it-works-section"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative overflow-hidden bg-white text-zinc-950 border-t border-zinc-200"
    >
      {/* Background glow ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#330e53]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header & Narrative */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-mono text-zinc-700 uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#330e53]" />
            <span className="font-medium">Science & Mechanism</span>
          </div>

          <h2 id="how-it-works-title" className="text-3xl sm:text-5xl font-display font-black text-zinc-950 tracking-tight leading-tight">
            How Lumina Tirz-Pen Works
          </h2>

          <div className="space-y-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed font-sans text-left sm:text-center">
            <p>
              Lumina Tirz-Pen contains tirzepatide, one of the most effective weight loss peptides available. It works with your body's natural appetite signals through two pathways, GLP-1 and GIP, helping you feel full sooner, stay full longer, and quiet the constant food cravings that make weight loss feel impossible.
            </p>
            <p>
              It's a once-weekly, pre-filled weight loss injection, with the dose stepped up gradually over time for the best results. It's not a fat burner, a tea, or a quick fix. It's real treatment that works alongside healthier eating and movement for steady, lasting results.
            </p>
          </div>
        </div>

        {/* Three Structural Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-zinc-200 hover:border-[#330e53]/40 rounded-3xl p-8 space-y-5 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300 text-left"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#330e53]/5 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity" />

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>

                <div className="space-y-1">
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full border font-semibold ${card.badgeColor}`}>
                    {card.tag}
                  </span>
                  <h3 className="text-xl font-display font-bold text-zinc-950 pt-2">
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center text-[11px] font-mono text-[#330e53] font-medium">
                <span>Validated clinical mechanism</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
