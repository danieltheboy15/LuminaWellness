import { motion } from "motion/react";
import { ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function Hero() {
  return (
    <section
      id="brand-hero-section"
      className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-center"
    >
      {/* Background Image with luxury gradient overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://res.cloudinary.com/dpsvazol5/image/upload/v1789061715/IMG-20260910-WA0026_g0ra8p.jpg"
          alt="Lumina Wellness Tirzepatide Background"
          className="w-full h-full object-cover opacity-60 select-none scale-102 filter contrast-[1.1] brightness-[0.75] saturate-[1.1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 bg-radial-gradient from-[#dfabeb]/15 via-transparent to-transparent opacity-40" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto relative z-10 space-y-8 text-white flex flex-col items-center justify-center">
        {/* Subtle Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 backdrop-blur-md shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#dfabeb]" />
          <span className="font-mono text-[11px] tracking-wide text-zinc-300">
            Lumina Tirz-Pen · Dual GLP-1 + GIP · FDA Approved
          </span>
        </motion.div>

        {/* Section 1 Headline */}
        <motion.h1
          id="hero-main-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.1] max-w-4xl"
        >
          Lumina: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfabeb] via-[#f1d2fa] to-white font-display">
            Modern Wellness,
          </span> <br />
          Brought Home to Nigeria
        </motion.h1>

        {/* Section 1 Subheadline */}
        <motion.p
          id="hero-description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed font-sans max-w-2xl"
        >
          We bring modern, effective weight loss treatments home, making weight management easily accessible and affordable for Nigerians, with free consultation and support every step of the way.
        </motion.p>

        {/* High-Contrast Luxury Buttons */}
        <motion.div
          id="hero-buttons-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
        >
          <a
            id="hero-primary-shop-btn"
            href={BRAND_CONFIG.whatsappShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-xs font-black text-black bg-white hover:bg-[#dfabeb] active:scale-95 transition-all text-center font-display shadow-lg hover:shadow-xl duration-200 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 mb-0.5" />
            <span>Shop Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            id="hero-secondary-whatsapp-btn"
            href={BRAND_CONFIG.whatsappConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-7 rounded-full text-xs font-semibold text-zinc-300 bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white active:scale-95 transition-all text-center cursor-pointer duration-200"
          >
            <svg
              className="w-4 h-4 shrink-0 fill-current text-[#25D366]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Chat with us on WhatsApp</span>
          </a>
        </motion.div>

        {/* Clinical Intake Form Direct Link */}
        <motion.div
          id="hero-intake-link-pill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 flex justify-center"
        >
          <a
            href={BRAND_CONFIG.intakeFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-white transition-all cursor-pointer group shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Ready to start? Save time and fill out our <strong>Clinical Intake Form</strong></span>
            <ArrowRight className="w-3.5 h-3.5 text-[#dfabeb] transition-transform group-hover:translate-x-0.5 shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
