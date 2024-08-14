"use client";
import { Features } from "@/components/Features";
import { FeaturesDetails } from "@/components/FeaturesDetails";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  if (isLoading) {
    return "true";
  }
  return (
    <div>
      <Hero />
      <Features />
      <FeaturesDetails />
      <HowItWorks />
    </div>
  );
}
