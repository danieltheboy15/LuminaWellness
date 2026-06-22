import { motion } from "motion/react";
import { ShieldCheck, Truck, Sparkles, Building2, HelpCircle, CheckCircle2 } from "lucide-react";
import { BRAND_CONFIG } from "../config";

export default function WhoWeAre() {
  const trustMetrics = [
    {
      icon: <Building2 className="w-5 h-5 text-[#dfabeb]" />,
      title: "CAC Registered Entity",
      desc: "Fully registered and operating under complete Nigerian corporate regulations."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#dfabeb]" />,
      title: "Genuine Regulated Lots",
      desc: "Exactly the same active ingredients utilized by leading therapy brands global-wide."
    },
    {
      icon: <Truck className="w-5 h-5 text-[#dfabeb]" />,
      title: "Cold-Chain Logistics",
      desc: "Strictly temperature-controlled delivery to safeguard peptide potency all the way to you."
    }
  ];

  return (
    <section
      id="who-we-are"
      className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32 bg-black overflow-hidden text-white"
    >
      {/* Decorative premium dark glows */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#dfabeb]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Stunning luxury framed image with custom badge */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative group">
            {/* Elegant framing shadows and borders */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#dfabeb] to-purple-600 rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition duration-700" />
            
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dpsvazol5/image/upload/v1781981111/IMG_0933_yet5kk.jpg"
                alt="Lumina Wellness Medical-Grade Support Team"
                className="w-full h-[400px] object-cover filter brightness-[1.01] contrast-105 saturate-95 grayscale-[10%] group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Minimalist overlay indicator */}
              

              {/* Floating widget stamp */}
              
            </div>
          </div>

          {/* Right Column: Narrative elements and metallic trust cards */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#dfabeb] uppercase tracking-widest bg-zinc-90 w-fit px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-[#dfabeb]" />
                <span>Who We Are</span>
              </div>

              <h2 id="who-we-are-title" className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-none">
                Welcome to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfabeb] to-purple-400 font-display">
                  Lumina Wellness
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-zinc-305 text-sm sm:text-base font-light leading-relaxed font-sans text-zinc-300">
              <p>
                Lumina Wellness is a Nigerian company making modern, effective weight-loss medication accessible to people here, at very affordable prices.
              </p>
              <p>
                We offer two GLP-1 treatments: Zeplite (double receptor agonist), our flagship, and Semalite (GLP-1 receptor agonist). Both are the same active ingredients used in leading weight-loss treatments worldwide, made available locally, so you get genuine, regulated products without paying imported, marked-up prices.
              </p>
              <p>
                If you’ve seen Zeplite or Semalite on social media and wondered whether we’re the real thing — yes, we are. We’re happy to answer any question before you order anything.
              </p>
            </div>

            {/* Premium trust metrics list */}
            

            <div className="pt-2">
              <a
                id="who-we-are-ask-btn"
                href={BRAND_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#dfabeb] hover:text-[#f4d4fb] transition-colors cursor-pointer group"
              >
                <HelpCircle className="w-4 h-4 text-[#dfabeb] group-hover:rotate-12 transition-transform" />
                <span className="underline decoration-[#dfabeb]/50 underline-offset-4 group-hover:decoration-[#dfabeb] transition-colors">
                  Consult an intake specialist right now
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
