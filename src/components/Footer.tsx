import { Mail, Sparkles } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function Footer() {
  return (
    <footer
      id="brand-footer"
      className="bg-[#330e53] border-t border-[#4a1677] py-16 px-4 sm:px-6 lg:px-8 text-center sm:text-left relative overflow-hidden text-white"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 relative z-10">
        
        {/* Brand Left Column */}
        <div className="space-y-3 max-w-md text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <img
              src="https://res.cloudinary.com/dpsvazol5/image/upload/v1789121091/WhatsApp_Image_2026-09-11_at_10.44.41_AM-removebg-preview_r6iwmj.png"
              alt="Lumina Wellness Logo"
              className="h-[94px] sm:h-[110px] w-auto object-contain -my-3 sm:-my-4"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-purple-200/90 text-xs sm:text-sm font-light leading-relaxed">
            Lumina: modern wellness, made accessible and affordable for Nigeria.
          </p>
        </div>

        {/* Links Right Column */}
        <div className="space-y-4 text-center sm:text-left">
          <h4 className="text-xs font-mono font-bold text-purple-300 tracking-widest uppercase">Connect With Us</h4>
          
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 text-xs font-semibold text-purple-100">
            {/* WhatsApp Link */}
            <a
              id="footer-whatsapp-link"
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
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
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4 shrink-0 rounded-[4px] overflow-hidden"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="ig-grad" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#515BD4" offset="0%" />
                    <stop stopColor="#8134AF" offset="30%" />
                    <stop stopColor="#DD2A7B" offset="60%" />
                    <stop stopColor="#FEDA77" offset="90%" />
                    <stop stopColor="#F58529" offset="100%" />
                  </linearGradient>
                </defs>
                <rect width="24" height="24" rx="5.5" fill="url(#ig-grad)" />
                <rect x="4.75" y="4.75" width="14.5" height="14.5" rx="4" stroke="#ffffff" strokeWidth="1.6" fill="none" />
                <circle cx="12" cy="12" r="3.5" stroke="#ffffff" strokeWidth="1.6" fill="none" />
                <circle cx="16.2" cy="7.8" r="0.9" fill="#ffffff" />
              </svg>
              <span>Instagram</span>
            </a>

            {/* TikTok Link */}
            <a
              id="footer-tiktok-link"
              href={BRAND_CONFIG.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4 shrink-0"
                viewBox="-58.35 -186.7 2548.29 2538.85"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#25f4ee">
                  <path d="M779.38 890.55v-88.12a650.81 650.81 0 0 0-92.45-7.94c-299.8-.64-565.22 193.64-655.25 479.6S47.92 1871.34 294 2042.56a684.7 684.7 0 0 1 485.36-1152z" />
                  <path d="M796 1888.72c167.62-.23 305.4-132.28 312.74-299.74V94.62h273A512.17 512.17 0 0 1 1373.8 0h-373.41v1492.92c-6.21 168.31-144.32 301.63-312.74 301.9a317.76 317.76 0 0 1-144.45-36.11A313.48 313.48 0 0 0 796 1888.72zM1891.66 601.64v-83.06a509.85 509.85 0 0 1-282.4-85.22 517.79 517.79 0 0 0 282.4 168.28z" />
                </g>
                <path d="M1609.26 433.36a514.19 514.19 0 0 1-127.84-339.47h-99.68a517.16 517.16 0 0 0 227.52 339.47zM686.93 1167.9a313.46 313.46 0 0 0-144.46 590.81A312.75 312.75 0 0 1 796 1262.51a329.69 329.69 0 0 1 92.44 14.49V897.05a654.77 654.77 0 0 0-92.44-7.22h-16.62v288.9a321.13 321.13 0 0 0-92.45-10.83z" fill="#fe2c55" />
                <path d="M1891.66 601.64v288.91a886.23 886.23 0 0 1-517.86-168.29v759.1c-.8 378.78-308.09 685.43-686.87 685.43A679.65 679.65 0 0 1 294 2042.56 685.43 685.43 0 0 0 1481.42 1576V819.05A887.71 887.71 0 0 0 2000 985.17v-372a529.59 529.59 0 0 1-108.34-11.53z" fill="#fe2c55" />
                <path d="M1373.8 1481.36v-759.1a886.11 886.11 0 0 0 518.58 166.12v-288.9a517.87 517.87 0 0 1-283.12-166.12 517.16 517.16 0 0 1-227.52-339.47h-273V1589a313.46 313.46 0 0 1-567 171.17 313.46 313.46 0 0 1 144.46-590.83 321.35 321.35 0 0 1 92.45 14.45V894.88A684.71 684.71 0 0 0 293.29 2050.5a679.65 679.65 0 0 0 393.64 116.29c378.78 0 686.07-306.65 686.87-685.43z" fill="#ffffff" />
              </svg>
              <span>TikTok</span>
            </a>

            {/* Email Link */}
            <a
              id="footer-email-link"
              href={`mailto:${BRAND_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-purple-300" />
              <span>{BRAND_CONFIG.email}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Disclaimer Section */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#4a1677] flex flex-col md:flex-row items-center justify-between gap-6 text-purple-200/80 text-[11px] sm:text-xs font-light leading-relaxed relative z-10">
        <p className="max-w-2xl text-center sm:text-left">
          Disclaimer: Lumina Tirz-Pen (tirzepatide) is a prescription medication. Results vary. Use as directed. Not for use during pregnancy or while breastfeeding.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-2 text-purple-300/90 self-center md:self-end">
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono text-purple-200">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" />
            Verified Nigerian Care
          </span>
          <span className="hidden sm:inline text-purple-400/50">·</span>
          <span>&copy; 2026 Lumina Wellness. All rights reserved.</span>
        </div>
      </div>

    </footer>
  );
}
