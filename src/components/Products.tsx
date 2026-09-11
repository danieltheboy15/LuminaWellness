import { motion } from "motion/react";
import { Sparkles, ShoppingBag, ArrowRight, ShieldCheck, Syringe, MessageCircle, HelpCircle, Check } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function Products() {
  const highlights = [
    "Dual-Action GLP-1 + GIP Tirzepatide",
    "Once-weekly injection pen",
    "Pre-filled & ready to use (no mixing required)",
    "Dose started low & stepped up gradually for best results",
    "Genuine, regulated active peptides",
    "Cold-chain delivery straight to your doorstep in Nigeria"
  ];

  return (
    <section
      id="our-products-section"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative overflow-hidden bg-white border-y border-zinc-200/80"
    >
      {/* Soft background glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#330e53]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#330e53]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-mono text-zinc-700 uppercase tracking-widest mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#330e53]" />
            <span className="font-medium">Our Product</span>
          </div>
          <h2 id="products-section-title" className="text-3xl sm:text-5xl font-display font-bold text-zinc-950 tracking-tight">
            What We Offer
          </h2>
        </div>

        {/* Flagship Product Showcase Card */}
        <motion.div
          id="product-card-lumina-tirzpen"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-zinc-200 hover:border-[#330e53]/40 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(51,14,83,0.06)] relative overflow-hidden group transition-all duration-300"
        >
          {/* Ambient internal light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#330e53]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Flagship Badge */}
          <div className="absolute top-6 right-6 z-20 inline-flex items-center gap-1.5 py-1.5 px-4 bg-zinc-950 text-white font-bold text-[10px] sm:text-xs font-mono uppercase tracking-widest rounded-full shadow-md">
            <Sparkles className="w-3 h-3 text-purple-300" />
            <span>Main Product · Most Popular</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Product Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl border border-zinc-200 overflow-hidden shadow-sm group-hover:border-[#330e53]/50 transition-colors bg-white">
                <img
                  src="https://res.cloudinary.com/dpsvazol5/image/upload/v1789061715/IMG-20260910-WA0026_g0ra8p.jpg"
                  alt="Lumina Tirz-Pen Tirzepatide Weight Loss Pen"
                  className="w-full h-full object-cover filter brightness-[1.03] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-zinc-200 p-3 rounded-2xl flex items-center justify-between text-zinc-900 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Syringe className="w-4 h-4 text-[#330e53]" />
                    <span className="text-xs font-mono font-medium">Pre-Filled Pen (1 Month Supply)</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#330e53] font-bold">FDA Approved</span>
                </div>
              </div>
            </div>

            {/* Product Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#330e53]">
                  Dual GLP-1 + GIP Receptor Agonist
                </div>
                <h3 className="text-2xl sm:text-4xl font-display font-black text-zinc-950 tracking-tight">
                  Lumina Tirz-Pen <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 font-semibold text-xl sm:text-2xl">
                    (Tirzepatide, Dual GLP-1 + GIP)
                  </span>
                </h3>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                Our main product and most popular choice. Once-weekly, pre-filled and ready to use, no mixing required. Started low and stepped up gradually for the best results.
              </p>

              {/* Feature checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 pb-1">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 font-normal">
                    <div className="w-4 h-4 rounded-full bg-[#330e53]/15 text-zinc-950 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#330e53] stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Primary Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  id="product-shop-btn"
                  href={BRAND_CONFIG.whatsappShopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-xs font-black text-white bg-[#330e53] hover:bg-[#43146d] active:scale-95 transition-all text-center font-display shadow-md hover:shadow-lg duration-200 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  id="product-consult-btn"
                  href={BRAND_CONFIG.whatsappConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full text-xs font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 active:scale-95 transition-all text-center cursor-pointer duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Free Consultation</span>
                </a>
              </div>

              {/* Section 3 Note */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 text-xs text-zinc-600 leading-relaxed space-y-1">
                <p>
                  <strong>Full pricing and dosing are in our store.</strong> Not sure if it's right for you?{" "}
                  <a
                    href={BRAND_CONFIG.whatsappConsultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-zinc-950 underline decoration-[#330e53]/40 hover:text-[#330e53] transition-colors"
                  >
                    Message us for a free weight loss consultation
                  </a>{" "}
                  and we'll guide you.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
