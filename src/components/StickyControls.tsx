import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function StickyControls() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky controls after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="sticky-floating-controls"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-2 flex items-center justify-between gap-2"
        >
          {/* WhatsApp Quick Action */}
          <a
            id="sticky-whatsapp-btn"
            href={BRAND_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold text-[#a7f3d0] bg-emerald-950/40 hover:bg-emerald-950 border border-emerald-900/40 active:scale-95 transition-all text-center cursor-pointer"
          >
            <svg
              className="w-4 h-4 shrink-0 fill-[currentColor] text-[#25D366] animate-pulse"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Catlog Store Quick Action */}
          <a
            id="sticky-shop-btn"
            href={BRAND_CONFIG.catlogStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-black bg-white hover:bg-[#dfabeb] active:scale-95 transition-all text-center font-display cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-black" />
            <span>Shop Now</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
