import { motion } from "motion/react";

export default function PreFAQBanner() {
  return (
    <section
      id="pre-faq-banner-section"
      className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16 bg-white relative overflow-hidden flex justify-center items-center"
    >
      <div className="w-full max-w-[809px] mx-auto relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-[809px] aspect-[809/1080] rounded-3xl overflow-hidden border border-zinc-200 shadow-xl bg-white group"
          style={{ maxHeight: "1080px" }}
        >
          {/* Subtle brand glow highlight */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#330e53]/15 via-[#521884]/10 to-[#330e53]/15 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700 pointer-events-none" />

          <img
            id="pre-faq-featured-image"
            src="https://res.cloudinary.com/dpsvazol5/image/upload/v1789061715/IMG-20260910-WA0041_ww9fok.jpg"
            alt="Lumina Wellness Weight Management Treatment"
            width={809}
            height={1080}
            className="w-full h-full object-contain filter brightness-[1.01] contrast-[1.02] relative z-10 transition-transform duration-700 group-hover:scale-[1.005]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
