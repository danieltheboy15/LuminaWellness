import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function Header() {
  return (
    <motion.header
      id="brand-header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200/70 px-4 sm:px-6 lg:px-8 shadow-xs"
    >
      <div className="max-w-6xl mx-auto h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a id="brand-logo-link" href="#" className="flex items-center gap-3 active:scale-95 transition-transform group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#dfabeb]/25 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <img
              id="brand-logo-img"
              src="https://res.cloudinary.com/dpsvazol5/image/upload/v1781967772/IMG_0930_s4oews-removebg-preview_zeu4rg.png"
              alt="Lumina Wellness Logo"
              className="h-12 sm:h-14 w-auto object-contain cursor-pointer filter contrast-125 saturate-110 relative z-10 transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </a>

        {/* Navigation / Quick Actions */}
        <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-zinc-600">
          <a href="#who-we-are" className="hover:text-zinc-950 transition-colors">Who We Are</a>
          <a href="#our-products-section" className="hover:text-zinc-950 transition-colors">Lumina Tirz-Pen</a>
          <a href="#how-it-works-section" className="hover:text-zinc-950 transition-colors">How It Works</a>
          <a href="#why-people-choose-lumina" className="hover:text-zinc-950 transition-colors">Why Lumina</a>
          <a href="#faq-section" className="hover:text-zinc-950 transition-colors">FAQ</a>
        </div>

        {/* Global CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            id="header-whatsapp-btn"
            href={BRAND_CONFIG.whatsappConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-3 sm:px-4 rounded-full text-xs font-semibold bg-[#25D366] text-white hover:bg-[#1fb355] transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <svg
              className="w-4 h-4 shrink-0 fill-current text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <a
            id="header-shop-btn"
            href={BRAND_CONFIG.whatsappShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-4 sm:px-5 rounded-full text-xs font-bold text-black bg-[#dfabeb] hover:bg-[#d598e3] transition-all cursor-pointer shadow-xs font-display"
          >
            <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
            <span className="font-sans">Shop Now</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
