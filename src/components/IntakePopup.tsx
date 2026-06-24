import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ClipboardCheck, Sparkles, ArrowRight } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function IntakePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed or filled the form in this session
    const hasSeenPopup = sessionStorage.getItem("lumina_intake_popup_seen");
    if (hasSeenPopup) return;

    // Trigger popup after exactly 10 seconds (10000ms)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("lumina_intake_popup_seen", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="absolute inset-0 bg-zinc-950/65 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800/80 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl overflow-hidden text-white text-left z-10"
          >
            {/* Visual gradient glows */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-700 transition-all text-zinc-400 hover:text-white cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Icon */}
            <div className="relative mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand to-purple-400 flex items-center justify-center shadow-lg shadow-brand/15">
                <ClipboardCheck className="w-7 h-7 text-zinc-950" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-zinc-900 border border-zinc-850 p-1 rounded-full text-brand animate-bounce-slow">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Main Headings */}
            <div className="space-y-3 mb-6">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-brand">
                Online Eligibility Intake Form
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight leading-none">
                Ready to Start Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfabeb] to-purple-300">
                  Weight-Loss Journey?
                </span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed font-sans">
                Take our quick, 2-minute clinical assessment to help our care team understand your health goals, assess your eligibility, and recommend the perfect starter plan.
              </p>
            </div>

            {/* Perks Bullet List */}
            <div className="space-y-2.5 mb-8">
              <div className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans font-light">
                <span className="text-brand shrink-0 mt-0.5">✦</span>
                <span>Fast &amp; Private — 100% confidential assessment</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans font-light">
                <span className="text-brand shrink-0 mt-0.5">✦</span>
                <span>Clinical Guidance — Personal dosage suggestions</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans font-light">
                <span className="text-brand shrink-0 mt-0.5">✦</span>
                <span>Direct Support — Seamless connection to our WhatsApp team</span>
              </div>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                id="popup-intake-form-btn"
                href={BRAND_CONFIG.intakeFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDismiss}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-xs font-black text-black bg-brand hover:bg-brand/90 transition-all text-center font-display shadow-lg shadow-brand/10 active:scale-95 cursor-pointer duration-200"
              >
                <span>Fill out Intake Form</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={handleDismiss}
                className="w-full sm:w-auto inline-flex items-center justify-center py-4 px-6 rounded-full text-xs font-semibold text-zinc-400 bg-zinc-900/60 hover:bg-zinc-900 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all text-center cursor-pointer active:scale-95 duration-200"
              >
                Decide Later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
