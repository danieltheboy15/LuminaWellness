import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Products from "./components/Products";
import ZepliteDetail from "./components/ZepliteDetail";
import SemaliteDetail from "./components/SemaliteDetail";
import WhyLumina from "./components/WhyLumina";
import HowToGetStarted from "./components/HowToGetStarted";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyControls from "./components/StickyControls";
import IntakePopup from "./components/IntakePopup";

export default function App() {
  return (
    <div className="mesh-gradient min-h-screen relative text-zinc-800 font-sans selection:bg-brand/30 selection:text-brand-deep">
      {/* 10-second Delay Clinical Intake Form Popup */}
      <IntakePopup />

      {/* Sticky actions (WhatsApp / Catlog Store Quick CTAs) */}
      <StickyControls />

      {/* Main Structural Flow */}
      <Header />
      
      <main id="lumina-main-content">
        {/* Section 1 - Hero */}
        <Hero />

        {/* Section 2 - Who We Are */}
        <WhoWeAre />

        {/* Section 3 - Products Suite & Selector */}
        <Products />

        {/* Section 4 - Zeplite Deep Dive */}
        <ZepliteDetail />

        {/* Section 5 - Semalite Deep Dive */}
        <SemaliteDetail />

        {/* Section 6 - Brand Differentiators */}
        <WhyLumina />

        {/* Section 7 - How to Get Started */}
        <HowToGetStarted />

        {/* Section 8 - Success Reviews & Transformational Cases */}
        <Reviews />

        {/* Section 9 - FAQ & Structured Data */}
        <FAQ />

        {/* Section 9 - Final CTA */}
        <FinalCTA />
      </main>

      {/* Section 10 - Footer & Disclaimer */}
      <Footer />
    </div>
  );
}
