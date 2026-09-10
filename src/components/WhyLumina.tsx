import { motion } from "motion/react";
import { Sparkles, Home, DollarSign, MessageCircle, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function WhyLumina() {
  const points = [
    {
      icon: <Home className="w-5 h-5 text-[#dfabeb]" />,
      title: "Wellness, brought home",
      desc: "Modern treatments made easily accessible in Nigeria, no import wait.",
      tag: "Local Access"
    },
    {
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      title: "Affordable access",
      desc: "A fraction of imported GLP-1/GIP prices.",
      tag: "Price Integrity"
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-purple-300" />,
      title: "Free weight loss consultation",
      desc: "Our team guides you before you order, at no cost.",
      tag: "Zero Cost Advice"
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#dfabeb]" />,
      title: "Real support",
      desc: "We're with you from your first question right through your journey.",
      tag: "Dedicated Care"
    }
  ];

  return (
    <section
      id="why-people-choose-lumina"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden text-left text-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#dfabeb]/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-[#dfabeb] uppercase tracking-widest mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#dfabeb]" />
            <span>Why Lumina</span>
          </div>
          <h2 id="why-lumina-title" className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
            Why People Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfabeb] to-purple-300 font-display">Lumina</span>
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {points.map((pt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#0b0b0d] border border-zinc-850 hover:border-[#dfabeb]/60 rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-2xl group-hover:scale-105 transition-transform">
                    {pt.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider bg-zinc-900/80 border border-zinc-800 px-2.5 py-0.5 rounded-full">
                    {pt.tag}
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-lg font-display font-bold text-white tracking-tight">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Standard with Lumina</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
