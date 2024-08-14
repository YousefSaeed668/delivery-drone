import { Features } from "@/components/Features";
import { FeaturesDetails } from "@/components/FeaturesDetails";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturesDetails />
      <HowItWorks />
    </div>
  );
}
