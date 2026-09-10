import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Products from "./components/Products";
import HowItWorks from "./components/HowItWorks";
import WhyLumina from "./components/WhyLumina";
import SupportBeyondThePen from "./components/SupportBeyondThePen";
import HowToGetStarted from "./components/HowToGetStarted";
import PreFAQBanner from "./components/PreFAQBanner";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyControls from "./components/StickyControls";
import IntakePopup from "./components/IntakePopup";

export default function App() {
  return (
    <div className="mesh-gradient min-h-screen relative text-zinc-900 font-sans selection:bg-[#dfabeb]/40 selection:text-zinc-950">
      {/* 10-second Delay Clinical Intake Form Popup */}
      <IntakePopup />

      {/* Sticky Mobile/Desktop Actions (WhatsApp & Shop to WhatsApp) */}
      <StickyControls />

      {/* Global Header */}
      <Header />
      
      <main id="lumina-main-content">
        {/* Section 1: Hero (brand-first) */}
        <Hero />

        {/* Section 2: Who We Are */}
        <WhoWeAre />

        {/* Section 3: Our Product */}
        <Products />

        {/* Section 4: How It Works */}
        <HowItWorks />

        {/* Section 5: Why Lumina */}
        <WhyLumina />

        {/* Section 6: Support Beyond the Pen */}
        <SupportBeyondThePen />

        {/* Section 7: How to Get Started */}
        <HowToGetStarted />

        {/* Featured Visual Banner */}
        <PreFAQBanner />

        {/* Section 8: FAQ */}
        <FAQ />

        {/* Section 9: Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
}
