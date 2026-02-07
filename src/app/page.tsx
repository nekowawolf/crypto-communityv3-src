import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import { GlobeDemo } from "@/components/GlobeSection";
import WhyUs from "@/components/WhyUs";
import PlatformSection from "@/components/PlatformSection";
import LogoMarquee from "@/components/LogoMarquee";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ExploreCommunity from "@/components/ExploreCommunity";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Nww",
  description:
    "The ultimate hub for crypto communities. Find trading groups, dev channels, airdrop hunters, and more.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen body-color text-white overflow-x-hidden selection:bg-blue-500/30">
      <Header />

      <main>
        <HeroSection />
        <LogoMarquee />
        <GlobeDemo />
        <PlatformSection />
        <CategoryGrid />
        <WhyUs />
        <CTASection />
        <ExploreCommunity />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}