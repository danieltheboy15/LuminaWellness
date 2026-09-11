import { motion } from "motion/react";
import { Sparkles, Heart, Activity, Apple, MessageCircle, ArrowRight, Shield } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function SupportBeyondThePen() {
  const supportAspects = [
    {
      icon: <Apple className="w-5 h-5 text-[#330e53]" />,
      title: "Practical Weight Loss Tips",
      desc: "Actionable food and hydration advice that fits everyday Nigerian meals and lifestyle."
    },
    {
      icon: <Activity className="w-5 h-5 text-[#330e53]" />,
      title: "Sustainable Habit Building",
      desc: "Guidance on sleep, gentle movement, and managing cravings so results last long-term."
    },
    {
      icon: <Heart className="w-5 h-5 text-[#330e53]" />,
      title: "Ongoing Check-ins",
      desc: "Our intake and care team stays reachable directly on WhatsApp as your body adapts."
    }
  ];

  return (
    <section
      id="support-beyond-pen"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative overflow-hidden bg-white border-y border-zinc-200"
    >
      {/* Subtle light background mesh */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#330e53]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-mono text-zinc-600 uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#330e53]" />
              <span>Support Beyond the Pen</span>
            </div>

            <h2 id="support-beyond-pen-title" className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-zinc-950 tracking-tight leading-tight">
              Real Weight Loss Support, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#330e53] to-[#521884] font-display">
                Not Just a Prescription
              </span>
            </h2>

            <div className="space-y-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed font-sans">
              <p>
                Weight management is about more than medication. Alongside your treatment, Lumina offers free consultation, practical weight loss tips, and ongoing wellness support to help you build healthy habits, not just chase a number on the scale.
              </p>
              <p>
                Healthy weight loss is about your whole body and your whole life. Whatever your body goals, our team is here to support a healthy, sustainable path there, free of charge, for as long as you need us.
              </p>
            </div>

            <div className="pt-2">
              <a
                id="support-ask-whatsapp-btn"
                href={BRAND_CONFIG.whatsappConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 py-3.5 px-6 rounded-full text-xs font-bold text-white bg-zinc-950 hover:bg-zinc-800 transition-all cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Talk to a Lumina Wellness Specialist</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="lg:col-span-5 space-y-4">
            {supportAspects.map((aspect, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-5 rounded-3xl bg-zinc-50 border border-zinc-200/90 hover:border-[#330e53]/40 transition-colors flex items-start gap-4 shadow-sm"
              >
                <div className="p-3 bg-white border border-zinc-200 rounded-2xl shrink-0 shadow-xs">
                  {aspect.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-display font-bold text-zinc-950">
                    {aspect.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed">
                    {aspect.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
