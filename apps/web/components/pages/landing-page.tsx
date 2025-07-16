import React from "react";
import { MainNavbar } from "@/components/global/main-navbar";
import { HeroSection } from "@/components/hero-section";
import { BodySection } from "@/components/body-section";
import { Footer } from "@/components/global/footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar />
      <HeroSection />
      <BodySection />
      <Footer />
    </div>
  );
}
