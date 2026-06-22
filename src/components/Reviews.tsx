import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Check, Sparkles, TrendingDown, Quote, QuoteIcon } from "lucide-react";

interface Review {
  id: string;
  name: string;
  location: string;
  treatment: "Zeplite (Tirzepatide)" | "Semalite (Semaglutide)" | "Lumina Care";
  lossAmount: string;
  duration: string;
  rating: number;
  quote: string;
  verified: boolean;
}

export default function Reviews() {
  const [activeTab, setActiveTab] = useState<"All" | "Zeplite" | "Semalite" | "Care">("All");

  const reviews: Review[] = [
    {
      id: "r1",
      name: "Little Desirez",
      location: "Verified Customer",
      treatment: "Zeplite (Tirzepatide)",
      lossAmount: "6kg",
      duration: "2 Weeks",
      rating: 5,
      quote: "Hi sissy, good afternoon. Today is my 3rd use. The first week I loosed 5kg. Week2 I ony shed 1kg, read about it and I saw that’s totally normal. All together 6kg as at yesterday. I’m just super excited, I’m not as tired as I used to be, my puffy face went down day 3, tummy too, visible change all over my body.",
      verified: true
    },
    {
      id: "r2",
      name: "Morenike",
      location: "Verified Customer",
      treatment: "Semalite (Semaglutide)",
      lossAmount: "Tremendous Amount",
      duration: "Starter Pack Complete",
      rating: 5,
      quote: "Hello, Good morning. I’m done with my starter pack, and I can say I lost a tremendous amount of weight. I’ll like to move to the next stage because I’m not satisfied. Though my husband said I am okay the way I am now. I’m in love with my new self now. God bless the day I came across your page ❤️",
      verified: true
    },
    {
      id: "r3",
      name: "Ajibola",
      location: "Verified Customer",
      treatment: "Zeplite (Tirzepatide)",
      lossAmount: "6kg",
      duration: "2 Weeks",
      rating: 5,
      quote: "Good evening. I have taken two shots so far, will be taking the 3rd one tomorrow night. My waist measurement was 48 when I started as at yesterday it was 45 and half, my under burst from 44 is now 41. Am excited to share with you that I have lost 6kg within 2 weeks.",
      verified: true
    },
    {
      id: "r4",
      name: "Humshe",
      location: "Verified Customer",
      treatment: "Semalite (Semaglutide)",
      lossAmount: "10.4kg",
      duration: "Completed Cycle",
      rating: 5,
      quote: "Hiiii, good morning. Anyways hope you’re doing well, sooo I decided to check the scale this morning and I’m 10.4kg down. Chai, thank God o and thank you.",
      verified: true
    },
    {
      id: "r5",
      name: "Banke",
      location: "Verified Customer",
      treatment: "Lumina Care",
      lossAmount: "Drastic Reduction",
      duration: "Ongoing",
      rating: 5,
      quote: "Hello good evening, how are you doing today? I tried on a dress I couldn't wear in January and it fit. Super excited. I'm super greatful for your support, just the sight of my ankles this morning warmed my heart, my ankles and feet have been quiet big for a while. God bless you, looking forward to hearing from you.",
      verified: true
    }
  ];

  const filteredReviews = reviews.filter((review) => {
    if (activeTab === "All") return true;
    if (activeTab === "Zeplite") return review.treatment.includes("Zeplite");
    if (activeTab === "Semalite") return review.treatment.includes("Semalite");
    if (activeTab === "Care") return review.treatment === "Lumina Care";
    return true;
  });

  // Calculate summary metrics
  const totalReviews = reviews.length;
  const avgLoss = "12kg";
  const supportRating = "98%";

  return (
    <section
      id="reviews-section"
      className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-zinc-950 border-t border-zinc-900 overflow-hidden text-white relative text-left"
    >
      {/* Background premium glows */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#dfabeb]/5 rounded-full blur-[140px] pointer-events-none select-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#dfabeb]" />
            <span>Success Stories</span>
          </span>
          <h2 id="reviews-title" className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-none">
            Real Results from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfabeb] to-purple-400 font-display">Our Customers</span>
          </h2>
          {/*<p className="mt-4 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            See how Lumina client-members have transformed their physical health, eliminated food noise, and discovered sustained lifestyle success on Zeplite and Semalite.
          </p>*/}
        </div>

        

        

        {/* Reviews Animated Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
              >
                {/* Micro accent block */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#dfabeb] to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Quote details */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    {/* Stars & Verified badge */}
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-medium">
                      <Check className="w-3 h-3" />
                      <span>Verified Customer</span>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="w-8 h-8 text-zinc-800 absolute -top-4 -left-2 -z-0 opacity-50 transform -rotate-12 scale-110 pointer-events-none" />
                    <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mb-6 italic relative z-10">
                      "{review.quote}"
                    </p>
                  </div>
                </div>

                {/* Patient Information */}
                <div className="border-t border-zinc-800/80 pt-4 mt-auto relative z-10 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">{review.name}</h4>
                    <p className="text-[11px] text-zinc-500 font-light">{review.location}</p>
                  </div>
                </div>

                {/* Mini watermark treatment */}
                <span className="absolute bottom-20 right-4 font-mono text-[9px] text-[#dfabeb]/10 uppercase tracking-widest block font-black select-none pointer-events-none">
                  {review.treatment.split(" ")[0]}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        

      </div>
    </section>
  );
}
