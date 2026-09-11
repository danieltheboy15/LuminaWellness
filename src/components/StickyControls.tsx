import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function StickyControls() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky controls after scrolling down 240px
      if (window.scrollY > 240) {
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
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.12)] p-2 flex items-center justify-between gap-2"
        >
          {/* WhatsApp Quick Action */}
          <a
            id="sticky-whatsapp-btn"
            href={BRAND_CONFIG.whatsappConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold text-zinc-800 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 active:scale-95 transition-all text-center cursor-pointer shadow-2xs"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Consultation</span>
          </a>

          {/* Shop Now Action - Redirects to WhatsApp */}
          <a
            id="sticky-shop-btn"
            href={BRAND_CONFIG.whatsappShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-white bg-[#330e53] hover:bg-[#43146d] active:scale-95 transition-all text-center font-display cursor-pointer shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            <span>Shop Now</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
