import SafariNavbar from "@/components/safari-navbar";
import SafariHero from "@/components/safari-hero";
import CountryNavigator from "@/components/country-navigator";
import FeaturedTours from "@/components/featured-tours";
import ExperienceCategories from "@/components/experience-categories";
import TrustIndicators from "@/components/trust-indicators";
import InquiryForm from "@/components/inquiry-form";
import SafariFooter from "@/components/safari-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SafariNavbar />
      <SafariHero />
      <CountryNavigator />
      <FeaturedTours />
      <ExperienceCategories />
      <TrustIndicators />
      <InquiryForm />
      <SafariFooter />
    </div>
  );
}
