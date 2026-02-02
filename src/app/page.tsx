import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import WhyUs from "@/components/WhyUs";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
        <StatsSection />
        <CategoryGrid />
        <WhyUs />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}