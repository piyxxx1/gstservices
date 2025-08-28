import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import ServicesOverview from "@/components/sections/services-overview";
import TrustedBrands from "@/components/sections/trusted-brands";
import NumbersStats from "@/components/sections/numbers-stats";
import UserCategories from "@/components/sections/user-categories";
import ProductsForEveryone from "@/components/sections/products-for-everyone";
import ITRFilingServices from "@/components/sections/itr-filing-services";
import PlugAndPlay from "@/components/sections/plug-and-play";
import DesignedByExperts from "@/components/sections/designed-by-experts";
import SecurityCommitment from "@/components/sections/security-commitment";
import Testimonials from "@/components/sections/testimonials";
import AwardsHeadlines from "@/components/sections/awards-headlines";
import ReadyToStart from "@/components/sections/ready-to-start";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesOverview />
      <TrustedBrands />
      <NumbersStats />
      <UserCategories />
      <ProductsForEveryone />
      <ITRFilingServices />
      <PlugAndPlay />
      <DesignedByExperts />
      <SecurityCommitment />
      <Testimonials />
      <AwardsHeadlines />
      <ReadyToStart />
      <FAQ />
      <Footer />
    </div>
  );
}