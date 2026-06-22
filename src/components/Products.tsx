import { motion } from "motion/react";
import { Sparkles, ArrowUpRight, Shield, Syringe, Info, HelpCircle, ThermometerSnowflake, Ruler } from "lucide-react";
import { BRAND_CONFIG } from "../config";
import GuidanceAssistant from "./GuidanceAssistant";

export default function Products() {
  return (
    <section
      id="our-products-section"
      className="px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#fafbfc] to-[#ffffff] border-y border-zinc-100"
    >
      {/* Background radial glowing elements for luxury product spotlight */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-mono text-zinc-650 uppercase tracking-widest mb-4 shadow-sm">
            
            <span>Our Products</span>
          </div>
          <h2 id="products-section-title" className="text-3xl sm:text-5xl font-display font-bold text-zinc-900 tracking-tight">
            What We Offer
          </h2>
        </div>

        {/* Product Cards Grid - Asymmetrical, Dual Black & White Luxury Column Pairing */}
        <div id="products-cards-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* Card 1: Zeplite (Flagship) - Pristine Clinical White with Warm Lilac backlights */}
          <motion.div
            id="product-card-zeplite"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-7 bg-white border border-zinc-200/90 hover:border-[#dfabeb]/80 rounded-[2.5rem] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_24px_50px_rgba(223,171,235,0.08)] group transition-all duration-300"
          >
            {/* Ambient internal soft aura */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Flagship Badge */}
            <div className="absolute top-6 right-6 z-20 inline-flex items-center gap-1.5 py-1 px-3.5 bg-zinc-950 text-white font-bold text-[10px] sm:text-xs font-mono uppercase tracking-widest rounded-full shadow-md">
              <Sparkles className="w-3 h-3 text-[#dfabeb] animate-spin" style={{ animationDuration: '4s' }} />
              <span>Flagship Premium</span>
            </div>

            <div className="space-y-8">
              {/* Product Visual Mockup (New Generated Image) */}
              <div className="relative w-full h-[280px] rounded-2xl border border-zinc-200 overflow-hidden shadow-sm group-hover:border-[#dfabeb]/60 transition-colors">
                <img
                  src="https://catlog-s3.s3.eu-west-2.amazonaws.com/ITEMS/pua7dib44x.jpeg"
                  alt="Zeplite Tirzepatide Premium Treatment Pen"
                  className="w-full h-full object-cover filter brightness-[1.03] group-hover:scale-102 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual spec glass label */}
                
              </div>

              {/* Product Info */}
              <div className="space-y-3 text-left">
                <h3 className="text-2xl sm:text-3xl font-display font-black text-zinc-900">
                  Zeplite (Tirzepatide)
                </h3>
                <p className="text-sm sm:text-base text-zinc-650 font-light leading-relaxed">
                  Our flagship weight-loss treatment. A once-weekly pen, started low and stepped up gradually for the best results. Made affordable for Nigerians.
                </p>
              </div>

              {/* Spec Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pb-2 text-xs font-mono">
                <div className="p-3 bg-zinc-50 border border-zinc-150 rounded-xl text-left">
                  <span className="text-zinc-400 block mb-0.5 uppercase tracking-wider text-[8px]">Dose Steps</span>
                  <span className="text-zinc-800 font-bold">2.5mg → 5.0mg → 7.5mg+</span>
                </div>
                <div className="p-3 bg-zinc-50 border border-zinc-150 rounded-xl flex items-center gap-2 text-left">
                  <ThermometerSnowflake className="w-4 h-4 text-brand-dark" />
                  <div>
                    <span className="text-zinc-400 block mb-0.5 uppercase tracking-wider text-[8px]">Temp Control</span>
                    <span className="text-zinc-800 font-bold">Cold-Chain Only</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-zinc-500 font-mono flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-brand" /> Complete multi-dose weight loss pens.
              </span>
              <a
                id="shop-zeplite-btn"
                href={BRAND_CONFIG.zepliteStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-3 px-6 rounded-full text-xs font-bold text-white bg-zinc-950 hover:bg-zinc-800 transition-all text-center font-display shadow-md cursor-pointer"
              >
                <span>Shop Zeplite</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Semalite (Compact, Tall Elegance) - Stark Obsidian Black Card */}
          <motion.div
            id="product-card-semalite"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-5 bg-zinc-955 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-[2.5rem] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl group text-white"
          >
            {/* Soft dark green glow reflection */}
            <div className="absolute bottom-0 right-0 w-44 h-44 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-8">
              {/* Product Visual Mockup (New Generated Image) */}
              <div className="relative w-full h-[280px] rounded-2xl border border-zinc-800 overflow-hidden group-hover:border-zinc-700 transition-colors bg-zinc-900">
                <img
                  src="https://catlog-s3.s3.eu-west-2.amazonaws.com/ITEMS/kz4ysx61pj.jpeg"
                  alt="Semalite Semaglutide High-End Formulation"
                  className="w-full h-full object-cover filter brightness-[0.98] contrast-105 group-hover:scale-102 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual spec glass label on Dark Card */}
                
              </div>

              {/* Product Info */}
              <div className="space-y-3 text-left animate-slide-up">
                <h3 className="text-2xl font-display font-black text-white">
                  Semalite (Semaglutide)
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed font-sans">
                  A trusted GLP-1 weight-loss option. A once-weekly treatment for those who prefer a semaglutide-based approach. Made available locally.
                </p>
              </div>

              {/* Spec Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pb-2 text-xs font-mono">
                <div className="p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-left">
                  <span className="text-zinc-500 block mb-0.5 uppercase tracking-wider text-[8px]">Dose Steps</span>
                  <span className="text-zinc-200 font-semibold text-zinc-300">0.25mg → 1.0mg → 2.4mg</span>
                </div>
                <div className="p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl flex items-center gap-2 text-left">
                  <Ruler className="w-4 h-4 text-zinc-500" />
                  <div>
                    <span className="text-zinc-500 block mb-0.5 uppercase tracking-wider text-[8px]">Dose Precision</span>
                    <span className="text-zinc-200 font-semibold text-zinc-300">Gradual Uplifts</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-zinc-500" /> Medically sterile peptide standard.
              </span>
              <a
                id="shop-semalite-btn"
                href={BRAND_CONFIG.semaliteStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-3 px-6 rounded-full text-xs font-bold text-black bg-white hover:bg-[#dfabeb] active:scale-95 transition-all text-center cursor-pointer shadow-md"
              >
                <span>Shop Semalite</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Pricing Notice & Consultation Row */}
        <div className="border border-zinc-200 rounded-2xl bg-zinc-50/50 p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-24 text-center sm:text-left relative overflow-hidden group shadow-sm">
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brand/20 via-brand-dark to-brand/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          
          <div className="flex items-center gap-3">
            <div className="bg-brand/10 p-2 rounded-lg shrink-0 text-brand-dark">
              <Info className="w-5 h-5 animate-pulse" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
              Full pricing and dosing are on our store. Not sure which is right for you? Message us and we’ll guide you.
            </p>
          </div>
          <a
            id="not-sure-whatsapp-btn"
            href={BRAND_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 py-2 px-5 rounded-full border border-zinc-300 hover:border-brand-dark text-xs font-semibold text-zinc-700 hover:text-black bg-white hover:bg-zinc-50 transition-all cursor-pointer font-mono shadow-sm"
          >
            <span>Message Us</span>
            <HelpCircle className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Interactive Guidance Assistant */}
        <div id="guidance-assistant-anchor" className="pt-8">
          <GuidanceAssistant />
        </div>

      </div>
    </section>
  );
}
