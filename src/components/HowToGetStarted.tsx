import { motion } from "motion/react";
import { ShoppingBag, ArrowRight, ClipboardList, ClipboardCheck, Stethoscope, Compass } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function HowToGetStarted() {
  const steps = [
    {
      number: "01",
      title: "Reach out",
      desc: "fill out our intake form, order on our store, or message us on WhatsApp.",
      icon: <ClipboardList className="w-5 h-5 text-zinc-900" />
    },
    {
      number: "02",
      title: "We guide you",
      desc: "our team confirms the right treatment and dose for you.",
      icon: <Stethoscope className="w-5 h-5 text-zinc-900" />
    },
    {
      number: "03",
      title: "Start your journey",
      desc: "receive your treatment with clear instructions and ongoing support.",
      icon: <Compass className="w-5 h-5 text-zinc-900" />
    }
  ];

  return (
    <section
      id="how-to-get-started"
      className="px-4 sm:px-6 lg:px-8 py-28 bg-white border-t border-zinc-200 relative overflow-hidden text-left"
    >
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand/5 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse-slow" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header with high contrast display text */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase bg-zinc-100 border border-zinc-200 px-3.5 py-1 rounded-full mb-3 inline-block font-bold">
            How to Get Started
          </span>
          <h2 id="get-started-title" className="text-3xl sm:text-5xl font-display font-black text-zinc-900 tracking-tight leading-none">
            Getting Started Is Simple
          </h2>
        </div>

        {/* Cinematic horizontal/vertical connected steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative mb-20">
          {/* Connector timeline line beneath on desktop */}
          <div className="hidden md:block absolute top-[44px] inset-x-20 h-0.5 bg-zinc-205 bg-zinc-200 opacity-60 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative group text-left p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 hover:border-zinc-400 hover:shadow-xl transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-90 w-fit shrink-0 group-hover:bg-[#dfabeb]/15 group-hover:border-[#dfabeb] transition-colors">
                  {step.icon}
                </div>
                <span className="text-4xl font-display font-black text-zinc-150 group-hover:text-[#dfabeb] transition-colors select-none">
                  {step.number}
                </span>
              </div>

              <div className="relative z-10 space-y-2">
                <p className="text-sm sm:text-base text-zinc-650 font-light leading-relaxed">
                  <span className="font-display font-black text-zinc-900 inline">{step.title}</span> — {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsive, custom action buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md sm:max-w-2xl mx-auto">
          <a
            id="get-started-intake-btn"
            href={BRAND_CONFIG.intakeFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-xs font-black text-black bg-[#dfabeb] hover:bg-[#d598e3] active:scale-95 transition-all text-center font-display shadow-md cursor-pointer duration-200"
          >
            <ClipboardCheck className="w-4 h-4 text-zinc-950" />
            <span>Complete Intake Form</span>
          </a>

          <a
            id="get-started-shop-btn"
            href={BRAND_CONFIG.catlogStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-xs font-bold text-white bg-zinc-950 hover:bg-zinc-800 active:scale-95 transition-all text-center font-display shadow-md cursor-pointer duration-200"
          >
            <ShoppingBag className="w-4 h-4 text-[#dfabeb]" />
            <span>Shop Now</span>
          </a>

          <a
            id="get-started-whatsapp-btn"
            href={BRAND_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-xs font-semibold text-zinc-700 bg-zinc-50 hover:bg-zinc-100 border border-zinc-250 active:scale-95 transition-all text-center cursor-pointer duration-200"
          >
            <svg
              className="w-4 h-4 shrink-0 fill-current text-[#25D366]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Message Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
