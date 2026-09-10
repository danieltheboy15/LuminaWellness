import { motion } from "motion/react";
import { ShieldCheck, Truck, Sparkles, Building2, HelpCircle, CheckCircle2, HeartHandshake } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function WhoWeAre() {
  const trustPoints = [
    {
      title: "Registered Nigerian Entity",
      desc: "Operating with transparency, based right here in Nigeria.",
      icon: <Building2 className="w-5 h-5 text-[#dfabeb]" />
    },
    {
      title: "Genuine Active Peptides",
      desc: "Same regulated tirzepatide active ingredients used in premier global GLP-1/GIP treatments.",
      icon: <ShieldCheck className="w-5 h-5 text-[#dfabeb]" />
    },
    {
      title: "Cold-Chain Protected",
      desc: "Temperature-controlled distribution to ensure peak peptide potency and safety upon arrival.",
      icon: <Truck className="w-5 h-5 text-[#dfabeb]" />
    }
  ];

  return (
    <section
      id="who-we-are"
      className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32 bg-black overflow-hidden text-white border-t border-zinc-900"
    >
      {/* Decorative dark lighting */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#dfabeb]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image / Visual Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#dfabeb] to-purple-600 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-700" />
            
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dpsvazol5/image/upload/v1789061715/IMG-20260910-WA0027_r5xssl.jpg"
                alt="Lumina Wellness Support Team"
                className="w-full h-[420px] object-cover filter brightness-[1.02] contrast-105 saturate-95 group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#dfabeb] uppercase tracking-wider">Clinical Guidance</div>
                  <div className="text-xs font-semibold text-white">Free Weight Loss Consultation</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#dfabeb]/20 flex items-center justify-center text-[#dfabeb]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Section 2 Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#dfabeb] uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-[#dfabeb]" />
                <span>Who We Are</span>
              </div>

              <h2 id="who-we-are-title" className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-none">
                Welcome to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfabeb] to-purple-300 font-display">
                  Lumina
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base font-light leading-relaxed font-sans">
              <p>
                Lumina exists to bring modern wellness home. We're a Nigerian company making effective, globally proven weight loss treatments easily accessible and affordable, right here at home, without the import wait or the import markup.
              </p>
              <p>
                Our main product is the <strong>Lumina Tirz-Pen</strong>, a tirzepatide-based, dual-action GLP-1 + GIP weight loss injection, pre-filled for ease of use. It uses the same active ingredient as leading weight loss peptides worldwide, made available locally, so you get a genuine, regulated product without paying imported, marked-up prices.
              </p>
              <p>
                If you've seen the Lumina Tirz-Pen on social media and wondered whether we're the real thing, yes, we are. We're happy to answer any question, with a free consultation, before you order anything.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {trustPoints.map((tp, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                  <div className="mb-1">{tp.icon}</div>
                  <div className="text-xs font-semibold text-white">{tp.title}</div>
                  <div className="text-[11px] text-zinc-400 font-light leading-tight">{tp.desc}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                id="who-we-are-ask-btn"
                href={BRAND_CONFIG.whatsappConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#dfabeb] hover:text-[#f4d4fb] transition-colors cursor-pointer group"
              >
                <HelpCircle className="w-4 h-4 text-[#dfabeb] group-hover:rotate-12 transition-transform" />
                <span className="underline decoration-[#dfabeb]/50 underline-offset-4 group-hover:decoration-[#dfabeb] transition-colors">
                  Ask us anything with a free consultation on WhatsApp
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
