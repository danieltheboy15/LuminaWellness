import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, ShoppingBag, ArrowRight, Search, MessageCircle } from "lucide-react";
import { BRAND_CONFIG } from "../config";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "product" | "eligibility" | "storage" | "ordering";
  hasPriceButton?: boolean;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("q1");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const faqs: FAQItem[] = [
    {
      id: "q1",
      category: "product",
      question: "What is Lumina Tirz-Pen?",
      answer: "A once-weekly, pre-filled weight loss injection containing tirzepatide. It works through two pathways, GLP-1 and GIP, and is made available by Lumina."
    },
    {
      id: "q2",
      category: "product",
      question: "Is Lumina Tirz-Pen the same as tirzepatide?",
      answer: "Yes. Lumina Tirz-Pen contains tirzepatide, the same active ingredient used in leading dual GLP-1 + GIP weight loss treatments worldwide."
    },
    {
      id: "q3",
      category: "product",
      question: "What is GLP-1?",
      answer: "GLP-1 is a natural hormone pathway that regulates appetite and blood sugar. Lumina Tirz-Pen acts on both the GLP-1 and GIP pathways for a dual-action effect."
    },
    {
      id: "q4",
      category: "product",
      question: "Is it registered or approved?",
      answer: "Yes, it is FDA approved."
    },
    {
      id: "q5",
      category: "ordering",
      question: "Is consultation free?",
      answer: "Yes. Consultation and support are completely free. Message us on WhatsApp and our team will guide you before you order anything."
    },
    {
      id: "q6",
      category: "eligibility",
      question: "Can an ulcer patient use it?",
      answer: "Yes."
    },
    {
      id: "q7",
      category: "eligibility",
      question: "Can a PCOS patient use it?",
      answer: "Yes."
    },
    {
      id: "q8",
      category: "eligibility",
      question: "Can a BP (blood pressure) patient use it?",
      answer: "Yes."
    },
    {
      id: "q9",
      category: "eligibility",
      question: "Can TTC (trying to conceive) mums use it?",
      answer: "Yes, but you must stop immediately once you conceive."
    },
    {
      id: "q10",
      category: "eligibility",
      question: "Can pregnant women use it?",
      answer: "No."
    },
    {
      id: "q11",
      category: "eligibility",
      question: "Can breastfeeding mothers use it?",
      answer: "No."
    },
    {
      id: "q12",
      category: "storage",
      question: "How long does one pen last?",
      answer: "One month."
    },
    {
      id: "q13",
      category: "storage",
      question: "How do I preserve it to last the full month?",
      answer: "Refrigerate it, or keep it in an ice pack. Do not freeze it."
    },
    {
      id: "q14",
      category: "product",
      question: "Will it reduce my stomach and arms specifically?",
      answer: "Results show across the whole body, not in specific areas. Weight loss with this treatment is general, not targeted."
    },
    {
      id: "q15",
      category: "ordering",
      question: "How much does it cost?",
      answer: "Pricing is listed in our store. The dose starts low and steps up gradually over time.",
      hasPriceButton: true
    },
    {
      id: "q16",
      category: "ordering",
      question: "How do I order?",
      answer: "Order directly in our store, or message us on WhatsApp for a free weight loss consultation and our team will guide you through it."
    },
    {
      id: "q17",
      category: "ordering",
      question: "How do I know Lumina is real?",
      answer: "We're a registered Nigerian company, reachable on WhatsApp and social media. Ask us anything, for free, before you order."
    }
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [faqs, searchQuery, selectedCategory]);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq-section"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden text-zinc-900 text-left"
    >
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#dfabeb]/15 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#9f5fb0]" />
            <span>Questions & Answers</span>
          </div>
          <h2 id="faq-title" className="text-3xl sm:text-5xl font-display font-black text-zinc-950 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">
            Direct answers on Lumina Tirz-Pen, medical suitability, preservation, and ordering.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., ulcer, PCOS, cost, storage)..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-zinc-200 rounded-2xl text-xs sm:text-sm placeholder:text-zinc-400 focus:outline-none focus:border-[#dfabeb] focus:ring-2 focus:ring-[#dfabeb]/20 transition-all shadow-xs"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: "all", label: "All Questions" },
              { id: "product", label: "Product & Science" },
              { id: "eligibility", label: "Medical Eligibility" },
              { id: "storage", label: "Storage & Use" },
              { id: "ordering", label: "Pricing & Trust" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-zinc-950 text-white shadow-sm"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs List */}
        <div id="faq-items-container" className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm text-zinc-500">No questions match your search.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="mt-3 text-xs font-semibold text-[#9f5fb0] underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 text-left overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#dfabeb] shadow-[0_8px_24px_rgba(223,171,235,0.12)]"
                      : "bg-white border-zinc-200/80 hover:border-zinc-300"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(faq.id)}
                    className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-zinc-900 group-hover:text-[#9f5fb0] transition-colors pr-4 tracking-tight">
                      {faq.question}
                    </span>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-zinc-50 group-hover:bg-[#dfabeb]/20 text-zinc-400 group-hover:text-zinc-950 flex items-center justify-center transition-all border border-zinc-200">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-zinc-100 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light space-y-4 font-sans">
                          <p>{faq.answer}</p>
                          
                          {/* Dedicated Button for Cost Question */}
                          {faq.hasPriceButton && (
                            <div className="pt-2">
                              <a
                                id="faq-view-prices-btn"
                                href={BRAND_CONFIG.whatsappShopUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 py-3 px-5 rounded-full text-xs font-bold text-black bg-[#dfabeb] hover:bg-[#d598e3] transition-all font-display active:scale-95 shadow-xs cursor-pointer"
                              >
                                <ShoppingBag className="w-3.5 h-3.5" />
                                <span>View prices in our store</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Direct WhatsApp Guidance Callout */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-bold text-zinc-900">Have a personal question before ordering?</h4>
            <p className="text-xs text-zinc-500 font-light">Our intake team is online on WhatsApp with free guidance.</p>
          </div>
          <a
            href={BRAND_CONFIG.whatsappConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 py-2.5 px-5 rounded-full text-xs font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
