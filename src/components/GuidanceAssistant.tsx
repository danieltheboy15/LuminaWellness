import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, RefreshCw, ShoppingBag, HelpCircle, Check, AlertCircle } from "lucide-react";
import { BRAND_CONFIG } from "../config";

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    description: string;
    pointsTo: "zeplite" | "semalite" | "both";
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What is your primary weight-loss focus?",
    options: [
      {
        label: "Pinnacle efficacy & maximum power",
        description: "Zeplite (Tirzepatide) works on double receptors (GIP & GLP-1) for stronger appetite suppression.",
        pointsTo: "zeplite",
      },
      {
        label: "Established, globally trusted approach",
        description: "Semalite (Semaglutide) is the classic GLP-1 used successfully by millions worldwide.",
        pointsTo: "semalite",
      }
    ]
  },
  {
    id: 2,
    text: "Have you used GIP or GLP-1 therapy before?",
    options: [
      {
        label: "Brand new to clinical treatments",
        description: "No worries! Both treatments start at a low dose and step up gradually to minimize symptoms.",
        pointsTo: "both",
      },
      {
        label: "Yes, I have used semaglutide or other options",
        description: "Usually, people stepping up from classic solutions prefer Zeplite's advanced formula.",
        pointsTo: "zeplite",
      }
    ]
  },
  {
    id: 3,
    text: "What is your approach to price vs flagship features?",
    options: [
      {
        label: "I want Lumina's premier, highest-efficacy option",
        description: "Zeplite is our absolute flagship weight-loss treatment.",
        pointsTo: "zeplite",
      },
      {
        label: "I want a cost-effective, time-tested option",
        description: "Semalite offers incredible value paired with legendary clinical reliability.",
        pointsTo: "semalite",
      }
    ]
  }
];

export default function GuidanceAssistant() {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 = start, 1-3 = questions, 4 = result
  const [answers, setAnswers] = useState<("zeplite" | "semalite" | "both")[]>([]);

  const handleStart = () => {
    setCurrentStep(1);
    setAnswers([]);
  };

  const handleOptionSelect = (pointsTo: "zeplite" | "semalite" | "both") => {
    const updatedAnswers = [...answers, pointsTo];
    setAnswers(updatedAnswers);
    
    if (currentStep < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(4); // Show result
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
  };

  // Determine recommendation
  const getRecommendation = () => {
    let zepliteScore = 0;
    let semaliteScore = 0;
    
    answers.forEach(ans => {
      if (ans === "zeplite") zepliteScore += 1;
      if (ans === "semalite") semaliteScore += 1;
      if (ans === "both") {
        zepliteScore += 0.5;
        semaliteScore += 0.5;
      }
    });

    return zepliteScore >= semaliteScore ? "zeplite" : "semalite";
  };

  const resultType = getRecommendation();
  const isZeplite = resultType === "zeplite";

  // Pre-filled WhatsApp message based on recommendations
  const customWhatsAppUrl = `https://wa.me/2349072081918?text=Hi%20Lumina%20Wellness%20%F0%9F%91%8B!%20I%20came%20across%20your%20page%20and%20I%27d%20love%20to%20know%20more.%20Can%20you%20help%20me%20get%20started%3F`;

  return (
    <div className="w-full max-w-2xl mx-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl text-white">
      
      {/* Visual background glows */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#dfabeb]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-900/10 rounded-full blur-3xl -z-10" />

      <AnimatePresence mode="wait">
        {/* Step 0: Welcome / Call to Action */}
        {currentStep === 0 && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="text-center py-6"
          >
            <div className="inline-flex p-3 bg-zinc-90 w-fit shrink-0 bg-zinc-900 border border-zinc-800 text-[#dfabeb] rounded-full mb-4 shadow-inner">
              <HelpCircle className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-3">
              Not sure which is right for you?
            </h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              Take our interactive 30-second assessment. We will analyze your preferences and match you to your ideal GLP-1 weight-loss treatment.
            </p>
            <button
              onClick={handleStart}
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full text-sm font-bold text-black bg-white hover:bg-[#ebc4f3] active:scale-95 transition-all text-center font-display shadow-md cursor-pointer duration-200"
            >
              <span>Find My Match</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Steps 1-3: Questions */}
        {currentStep > 0 && currentStep <= QUESTIONS.length && (
          <motion.div
            key={`question-${currentStep}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="py-2 text-left"
          >
            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-[#dfabeb] tracking-widest uppercase font-bold">
                Step 0{currentStep} / 0{QUESTIONS.length}
              </span>
              <div className="flex gap-1.5">
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 w-8 rounded-full transition-all duration-305 ${
                      i + 1 <= currentStep ? "bg-[#dfabeb]" : "bg-zinc-800"
                    }`}
                  />
                ))}
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-display font-semibold text-white mb-6">
              {QUESTIONS[currentStep - 1].text}
            </h3>

            <div className="space-y-3">
              {QUESTIONS[currentStep - 1].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option.pointsTo)}
                  className="w-full text-left p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[#dfabeb]/50 hover:bg-zinc-900 active:scale-[0.99] transition-all group cursor-pointer"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-sm text-zinc-100 group-hover:text-white transition-colors">
                      {option.label}
                    </span>
                    <span className="w-5 h-5 rounded-full border border-zinc-700 group-hover:border-[#dfabeb] flex items-center justify-center text-[#dfabeb] opacity-0 group-hover:opacity-100 transition-all">
                      <Check className="w-3 h-3" style={{ strokeWidth: 3 }} />
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 group-hover:text-zinc-300 font-light leading-normal">
                    {option.description}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={handleReset}
                className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1 cursor-pointer"
              >
                Cancel assessment
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Result presentation */}
        {currentStep === 4 && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-2"
          >
            <div className="inline-flex p-3 bg-zinc-900 border border-zinc-805 text-[#dfabeb] rounded-full mb-3 shadow-inner">
              <Sparkles className="w-5 h-5 text-[#dfabeb]" />
            </div>
            
            <p className="text-xs font-mono text-zinc-400 tracking-widest mb-1">
              Your Recommended Match
            </p>
            
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-2">
              {isZeplite ? "Zeplite (Tirzepatide)" : "Semalite (Semaglutide)"}
            </h3>

            <span className="inline-block py-1 px-3.5 bg-zinc-900 border border-[#dfabeb]/40 text-[#dfabeb] rounded-full text-xs font-semibold mb-4 shadow-sm">
              {isZeplite ? "Double-Agonist Flagship" : "Proven Global Standard"}
            </span>

            <div className="max-w-md mx-auto text-sm text-zinc-350 space-y-4 mb-6 text-left bg-zinc-900/45 border border-zinc-800 p-5 rounded-2xl shadow-inner">
              {isZeplite ? (
                <>
                  <p className="text-zinc-200">
                    Based on your focus on **maximum therapy outcomes** and flagship performance, <strong className="text-white">Zeplite</strong> is your match.
                  </p>
                  <p className="text-xs text-zinc-400 leading-normal">
                    Zeplite works with twin receptors in the body for unparalleled appetite control, quietening persistent "food noise" so you remain naturally satisfied.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-zinc-200">
                    Based on your focus on **established global safety** and exceptional value, <strong className="text-white">Semalite</strong> is your match.
                  </p>
                  <p className="text-xs text-zinc-400 leading-normal">
                    Semalite uses Semaglutide—the clinical cornerstone of weight loss worldwide—providing consistent, gradual, and thoroughly documented weight-management results.
                  </p>
                </>
              )}
              
              <div className="flex items-start gap-2 pt-3 border-t border-zinc-800 text-xs text-zinc-500">
                <AlertCircle className="w-4 h-4 text-[#dfabeb] shrink-0 mt-0.5" />
                <span>Our medical success team will fully review your history before dispensing.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={isZeplite ? BRAND_CONFIG.zepliteStoreUrl : BRAND_CONFIG.semaliteStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-xs font-bold text-black bg-white hover:bg-[#dfabeb] active:scale-95 transition-all text-center font-display shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop {isZeplite ? "Zeplite" : "Semalite"}</span>
              </a>

              <a
                href={customWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950 border border-emerald-900/50 active:scale-95 transition-all text-center cursor-pointer"
              >
                <svg
                  className="w-4 h-4 shrink-0 fill-current text-[#25D366]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Consult on WhatsApp</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Retake assessment</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
