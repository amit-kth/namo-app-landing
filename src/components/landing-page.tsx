"use client"

import Navbar from "./navbar"
import HeroSection from "./sections/hero-section"
import FeatureHighlights from "./sections/feature-highlights"
import ScreenshotShowcase from "./sections/screenshot-showcase"
import BenefitsSection from "./sections/benefits-section"
import UserTypesSection from "./sections/user-types-section"
import TestimonialsSection from "./sections/testimonials-section"
import FaqSection from "./sections/faq-section"
import Footer from "./footer"
import BrandLogos from "./sections/client-slider"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandLogos />
      <ScreenshotShowcase />
      <UserTypesSection />
      <FeatureHighlights />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </div>
  )
}
