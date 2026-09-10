import { Instagram, Mail, Sparkles } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function Footer() {
  return (
    <footer
      id="brand-footer"
      className="bg-white border-t border-zinc-200 py-16 px-4 sm:px-6 lg:px-8 text-center sm:text-left relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfabeb]/20 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 relative z-10">
        
        {/* Brand Left Column */}
        <div className="space-y-3 max-w-md text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <img
              src="https://res.cloudinary.com/dpsvazol5/image/upload/v1781967772/IMG_0930_s4oews-removebg-preview_zeu4rg.png"
              alt="Lumina Wellness Logo"
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
            Lumina: modern wellness, made accessible and affordable for Nigeria.
          </p>
        </div>

        {/* Links Right Column */}
        <div className="space-y-4 text-center sm:text-left">
          <h4 className="text-xs font-mono font-bold text-zinc-400 tracking-widest uppercase">Connect With Us</h4>
          
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 text-xs font-semibold text-zinc-700">
            {/* WhatsApp Link */}
            <a
              id="footer-whatsapp-link"
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
            >
              <svg
                className="w-4 h-4 shrink-0 fill-current text-[#25D366]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Instagram Link */}
            <a
              id="footer-instagram-link"
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
            >
              <Instagram className="w-4 h-4 text-purple-600" />
              <span>Instagram</span>
            </a>

            {/* TikTok Link */}
            <a
              id="footer-tiktok-link"
              href={BRAND_CONFIG.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-zinc-900" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.044.87.13V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48 6.3 6.3 0 0 0 1.86-4.49v-7a8.21 8.21 0 0 0 4.91 1.63V6.86a4.86 4.86 0 0 1-1-.17z"/>
              </svg>
              <span>TikTok</span>
            </a>

            {/* Email Link */}
            <a
              id="footer-email-link"
              href={`mailto:${BRAND_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
            >
              <Mail className="w-4 h-4 text-zinc-500" />
              <span>{BRAND_CONFIG.email}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Disclaimer Section */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-[11px] sm:text-xs font-light leading-relaxed relative z-10">
        <p className="max-w-2xl text-center sm:text-left">
          Disclaimer: Lumina Tirz-Pen (tirzepatide) is a prescription medication. Results vary. Use as directed. Not for use during pregnancy or while breastfeeding.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-2 text-zinc-500 self-center md:self-end">
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Verified Nigerian Care
          </span>
          <span className="hidden sm:inline text-zinc-300">·</span>
          <span>&copy; 2026 Lumina Wellness. All rights reserved.</span>
        </div>
      </div>

    </footer>
  );
}
