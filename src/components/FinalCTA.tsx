import { motion } from "motion/react";
import { ShoppingBag, ArrowRight, MessageCircle, HeartHandshake } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function FinalCTA() {
  return (
    <section
      id="final-cta-section"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-gradient-to-b from-[#150b21] via-[#100619] to-[#0a0212] border-t border-purple-950/40 relative overflow-hidden text-center text-white"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#dfabeb]/15 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto py-14 sm:py-16 px-6 sm:px-12 bg-zinc-950/50 backdrop-blur-md border border-purple-900/40 rounded-3xl relative overflow-hidden shadow-2xl">
        
        {/* Subtle top edge highlight */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#dfabeb]/30 to-transparent" />
        
        <div className="inline-flex p-3 bg-zinc-900 text-[#dfabeb] rounded-full mb-6 ring-1 ring-zinc-800">
          <HeartHandshake className="w-6 h-6" />
        </div>

        <h2 id="final-cta-heading" className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          Ready to start?
        </h2>

        <p className="mt-4 text-sm sm:text-base text-zinc-300 max-w-xl mx-auto font-light leading-relaxed">
          Take the first step today. Browse our treatment or message us for a free weight loss consultation. No pressure, just answers.
        </p>

        {/* Section 9 Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md sm:max-w-xl mx-auto">
          <a
            id="final-cta-shop-btn"
            href={BRAND_CONFIG.whatsappShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-xs font-black text-black bg-[#dfabeb] hover:bg-[#d598e3] active:scale-95 transition-all text-center font-display shadow-md cursor-pointer duration-200"
          >
            <ShoppingBag className="w-4 h-4 text-black" />
            <span>Shop Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            id="final-cta-whatsapp-btn"
            href={BRAND_CONFIG.whatsappConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 active:scale-95 transition-all text-center cursor-pointer duration-200"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Message us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
