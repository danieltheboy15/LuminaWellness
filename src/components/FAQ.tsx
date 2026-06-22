import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, ShoppingBag, ArrowUpRight } from "lucide-react";
import { BRAND_CONFIG } from "../config";

interface FAQCard {
  id: string;
  question: string;
  answer: string;
  hasButton?: boolean;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("q1");

  const faqs: FAQCard[] = [
    {
      id: "q1",
      question: "What is Zeplite?",
      answer: "Zeplite is tirzepatide — a once-weekly weight-loss treatment and the same active ingredient used in leading GLP-1 medications worldwide. It’s made by Lumina Wellness."
    },
    {
      id: "q2",
      question: "What is Semalite?",
      answer: "Semalite is our semaglutide-based weight-loss treatment, also a once-weekly option."
    },
    {
      id: "q3",
      question: "Is Zeplite safe?",
      answer: "Zeplite is made available through Lumina Wellness. As with any medication, we help confirm it’s right for you before you start."
    },
    {
      id: "q4",
      question: "How much does it cost?",
      answer: "Pricing for all doses is listed on our store. Zeplite starts low and the dose steps up gradually over time.",
      hasButton: true
    },
    {
      id: "q5",
      question: "How do I order?",
      answer: "Order directly on our store, or message us on WhatsApp and our team will guide you through it."
    },
    {
      id: "q6",
      question: "How do I know Lumina is real?",
      answer: "We’re a Nigerian company, CAC-registered, and we’re reachable on WhatsApp and social media. Ask us anything before you order."
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq-section"
      className="px-4 sm:px-6 lg:px-8 py-24 bg-white border-t border-zinc-200 relative overflow-hidden text-zinc-900 text-left"
    >
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#dfabeb]/10 rounded-full blur-[140px] -z-10 pointer-events-none animate-pulse-slow" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4 shadow-inner">
            <HelpCircle className="w-3.5 h-3.5 text-[#8a4a99] animate-pulse" />
            <span>FAQ</span>
          </div>
          <h2 id="faq-title" className="text-3xl sm:text-5xl font-display font-black text-zinc-900 tracking-tight leading-none">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">
            Essential information regarding Zeplite, Semalite, safety approvals, and ordering systems. Click to expand answers.
          </p>
        </div>

        {/* FAQs List */}
        <div id="faq-items-container" className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 text-left overflow-hidden ${
                  isOpen
                    ? "bg-[#faf8fc] border-[#dfabeb]/70 shadow-[0_12px_30px_rgba(138,74,153,0.04)]"
                    : "bg-zinc-50/60 border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50"
                }`}
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none group cursor-pointer"
                >
                  <span className="font-display font-black text-base text-zinc-800 group-hover:text-[#8a4a99] transition-colors pr-4 tracking-tight">
                    {faq.question}
                  </span>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-[#dfabeb]/10 text-zinc-400 group-hover:text-[#8a4a99] flex items-center justify-center transition-all border border-zinc-200">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer Content Dropdown */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-zinc-100 text-sm text-zinc-600 leading-relaxed font-light space-y-4 font-sans">
                        <p>{faq.answer}</p>
                        
                        {/* Custom shop price trigger button for Section 4 Question */}
                        {faq.hasButton && (
                          <div className="pt-2">
                            <a
                              id="faq-view-prices-btn"
                              href={BRAND_CONFIG.catlogStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 py-3 px-5 rounded-full text-xs font-bold text-white bg-zinc-900 hover:bg-[#8a4a99] transition-all font-display active:scale-95 shadow-sm cursor-pointer"
                            >
                              <ShoppingBag className="w-3.5 h-3.5 text-white" />
                              <span>View prices on our store</span>
                              <ArrowUpRight className="w-3 h-3 text-white" />
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
