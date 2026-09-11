import { motion } from "motion/react";
import { ShoppingBag, ArrowRight, HeartHandshake } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function FinalCTA() {
  return (
    <section
      id="final-cta-section"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-white border-t border-zinc-200 relative overflow-hidden text-center text-zinc-950"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#330e53]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto py-14 sm:py-16 px-6 sm:px-12 bg-gradient-to-b from-[#faf7fc] via-white to-white border border-[#330e53]/30 rounded-[2.5rem] relative overflow-hidden shadow-xl">
        
        {/* Subtle top edge highlight */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#330e53]/40 to-transparent" />
        
        <div className="inline-flex p-3 bg-white text-[#330e53] rounded-full mb-6 ring-1 ring-zinc-200 shadow-xs">
          <HeartHandshake className="w-6 h-6" />
        </div>

        <h2 id="final-cta-heading" className="text-3xl sm:text-5xl font-display font-black text-zinc-950 tracking-tight">
          Ready to start?
        </h2>

        <p className="mt-4 text-sm sm:text-base text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
          Take the first step today. Browse our treatment or message us for a free weight loss consultation. No pressure, just answers.
        </p>

        {/* Section 9 Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md sm:max-w-xl mx-auto">
          <a
            id="final-cta-shop-btn"
            href={BRAND_CONFIG.whatsappShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-xs font-black text-white bg-[#330e53] hover:bg-[#43146d] active:scale-95 transition-all text-center font-display shadow-md hover:shadow-lg cursor-pointer duration-200"
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            <span>Shop Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            id="final-cta-whatsapp-btn"
            href={BRAND_CONFIG.whatsappConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-xs font-semibold text-zinc-800 bg-white hover:bg-zinc-50 border border-zinc-200 active:scale-95 transition-all text-center cursor-pointer duration-200 shadow-xs"
          >
            <svg
              className="w-4 h-4 shrink-0 fill-current text-[#25D366]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Message us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
