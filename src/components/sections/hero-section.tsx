"use client"

import { motion } from "framer-motion"
import { Check, Play, ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react"
import ContactForm from "../forms/contact-form"
import { HoveredButton } from "../hover-button"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[800px] w-full overflow-hidden hero-section-bg flex items-center"
    >
      {/* Enhanced Background Elements */}


      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 items-center container mx-auto">

          {/* Left side - Hero content */}
          <div className="space-y-4 text-white">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium border border-white/20">
                <Sparkles className="w-3 h-3" />
                #1 AI-Powered CRM for Solopreneurs
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3">
                Scale Your Business upto 10X with NAMO App
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              className="text-sm lg:text-base text-white/90 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join 1,000+ astrologers, coaches & consultants who automated their business with NamoCRM.
              <span className="font-bold"> Save 6+ hours daily</span> and focus on what matters.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { icon: Zap, text: "AI Automation", highlight: "90% Tasks", highlightColor: "text-green-600" },
                { icon: TrendingUp, text: "Revenue Growth", highlight: "Upto 10x", highlightColor: "text-indigo-500" },
                { icon: Check, text: "Client Management", highlight: "1k+ Clients", highlightColor: "text-orange-500" },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-2 py-1.5 bg-white backdrop-blur-sm rounded-lg border border-white/20"
                >
                  <benefit.icon className={cn(benefit.highlightColor, "w-3 h-3")} />
                  <span className="text-xs font-medium text-secondary-foreground">{benefit.text}</span>
                  <span className={cn(benefit.highlightColor, "text-xs font-bold")}>{benefit.highlight}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 items-start sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <HoveredButton variant="primary">
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </HoveredButton>

              <div className="flex items-center gap-2">
                <HoveredButton variant="secondary" className="">
                  <Play className="w-3 h-3 mr-1" />
                  <span>Watch Demo</span>
                </HoveredButton>
                <div className="text-xs text-white/70">
                  <div className="font-semibold">No Credit Card Required</div>
                  <div>14-day free trial</div>
                </div>
              </div>
            </motion.div>

            {/* Social Proof - Compact */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/32?img=${i}`}
                    alt="User"
                    className="w-6 h-6 rounded-full border border-white"
                  />
                ))}
              </div>
              <div className="text-xs text-white/80">
                <div className="font-semibold">1,000+ professionals trust us</div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-yellow-400 text-xs">★</span>
                    ))}
                  </div>
                  <span>4.9/5</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative z-10 w-full">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
