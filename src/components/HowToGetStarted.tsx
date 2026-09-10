import { motion } from "motion/react";
import { ShoppingBag, ArrowRight, ClipboardList, Stethoscope, Compass, MessageCircle } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function HowToGetStarted() {
  const steps = [
    {
      number: "1",
      title: "Reach out",
      desc: "shop directly in our store or message us on WhatsApp for a free weight loss consultation.",
      icon: <ClipboardList className="w-5 h-5 text-zinc-900" />
    },
    {
      number: "2",
      title: "We guide you",
      desc: "our team confirms the right treatment, format, and dose for you, at no cost.",
      icon: <Stethoscope className="w-5 h-5 text-zinc-900" />
    },
    {
      number: "3",
      title: "Start your journey",
      desc: "receive your treatment with clear instructions and ongoing support.",
      icon: <Compass className="w-5 h-5 text-zinc-900" />
    }
  ];

  return (
    <section
      id="how-to-get-started"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-white border-t border-zinc-200 relative overflow-hidden text-left"
    >
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#dfabeb]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase bg-zinc-100 border border-zinc-200 px-3.5 py-1 rounded-full mb-3 inline-block font-bold">
            Step-by-Step Process
          </span>
          <h2 id="get-started-title" className="text-3xl sm:text-5xl font-display font-black text-zinc-950 tracking-tight leading-tight">
            Getting Started Is Simple
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          <div className="hidden md:block absolute top-[44px] inset-x-20 h-0.5 bg-zinc-200 opacity-70 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative group text-left p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 hover:border-[#dfabeb] hover:shadow-xl transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0 group-hover:bg-[#dfabeb]/20 group-hover:border-[#dfabeb] transition-colors">
                  {step.icon}
                </div>
                <span className="text-4xl font-display font-black text-zinc-200 group-hover:text-[#dfabeb] transition-colors select-none">
                  {step.number}
                </span>
              </div>

              <div className="relative z-10 space-y-2">
                <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                  <span className="font-display font-bold text-zinc-950 inline">{step.title}</span>: {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 7 Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md sm:max-w-xl mx-auto">
          <a
            id="get-started-shop-btn"
            href={BRAND_CONFIG.whatsappShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-xs font-black text-black bg-[#dfabeb] hover:bg-[#d598e3] active:scale-95 transition-all text-center font-display shadow-md cursor-pointer duration-200"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shop Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            id="get-started-whatsapp-btn"
            href={BRAND_CONFIG.whatsappConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-xs font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 active:scale-95 transition-all text-center cursor-pointer duration-200"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Message us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
