import { motion } from "motion/react";
import { DollarSign, Headset, MapPin, Heart, CheckCircle2 } from "lucide-react";

export default function WhyLumina() {
  const pillars = [
    {
      icon: <DollarSign className="w-5 h-5 text-[#dfabeb]" />,
      title: "Affordable access",
      desc: "a fraction of imported GLP-1 prices.",
      badge: "Cost Efficiency"
    },
    {
      icon: <Headset className="w-5 h-5 text-[#dfabeb]" />,
      title: "Real support",
      desc: "we guide you from your first question right through your journey.",
      badge: "Care Guidance"
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#dfabeb]" />,
      title: "Made for Nigerians",
      desc: "local availability, local support, no import wait.",
      badge: "Local Priority"
    }
  ];

  return (
    <section
      id="why-people-choose-lumina"
      className="px-4 sm:px-6 lg:px-8 py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden text-left"
    >
      {/* Background elegant flare */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#dfabeb]/5 rounded-full blur-[140px] -z-10 pointer-events-none animate-pulse-slow" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4 shadow-inner">
            
            <span>Why Lumina?</span>
          </div>
          <h2 id="why-lumina-title" className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-none">
            Why People Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfabeb] to-purple-400 font-display">Lumina</span>
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#0c0c0e] border border-zinc-900 hover:border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:scale-102 w-full h-full"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#dfabeb]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#dfabeb] uppercase tracking-wider bg-[#dfabeb]/10 border border-[#dfabeb]/20 px-3 py-0.5 rounded-full font-bold">
                    {pillar.badge}
                  </span>
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl">
                    {pillar.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-display font-black text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs text-zinc-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Benefit</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
