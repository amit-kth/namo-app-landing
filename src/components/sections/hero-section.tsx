"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import ContactForm from "../forms/contact-form"
import { HoveredButton } from "../hover-button"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden hero-section-bg"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />

        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/40 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/30 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto min-h-[80vh]">
          {/* Left side - Hero content */}
          <div className="space-y-8 text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balanced">
                Automate your workflow using{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
                  NamoCRM AI
                </span>
              </h1>
            </motion.div>

            {/* Key benefits */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                "AI-Powered Automation",
                "Complete CRM System",
                "Smart Booking & Scheduling",
                "Automated Reports Generation",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/60 rounded-lg backdrop-blur-sm border border-white/10"
                >
                  <div className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-primary">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <HoveredButton variant="primary">
                Book A Demo
              </HoveredButton>

              <HoveredButton variant="primary">
                Watch Video Demo
              </HoveredButton>
            </motion.div>
          </div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/30 rounded-full animate-pulse" />
            <div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-emerald/30 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <ContactForm />
          </motion.div>
        </div>
      </div>

    </section>
  )
}
