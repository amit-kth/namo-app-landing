"use client"

import { Users, Calendar, CreditCard, BarChart3, Globe, MessageCircle, Brain, Smartphone } from "lucide-react"
import { HoveredButton } from "../hover-button"

export default function FeatureHighlights() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description:
        "AI Assistant, AI Consultant, and AI Agent work together to automate your workflows and client interactions.",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      icon: Users,
      title: "Complete CRM Dashboard",
      description:
        "Centralized client profiles with notes, tags, activity history, and drag-and-drop pipeline management.",
      gradient: "from-secondary/20 to-muted/20",
    },
    {
      icon: Calendar,
      title: "Smart Booking & Scheduling",
      description: "Intelligent calendar system with auto-reminders, rescheduling, and video call integration.",
      gradient: "from-accent/20 to-primary/10",
    },
    {
      icon: MessageCircle,
      title: "Multi-Channel Communication",
      description: "Built-in WhatsApp, Telegram integration with broadcast messages and automated campaigns.",
      gradient: "from-primary/10 to-secondary/20",
    },
    {
      icon: Globe,
      title: "Sales & Funnel Tools",
      description: "Drag-and-drop landing page builder with lead capture forms and automated behavior-based campaigns.",
      gradient: "from-accent/20 to-muted/20",
    },
    {
      icon: CreditCard,
      title: "Integrated Payments",
      description: "Support for UPI, cards, wallets, net banking with wallet-based pricing and commission management.",
      gradient: "from-secondary/20 to-primary/10",
    },
    {
      icon: BarChart3,
      title: "Instant Reports & Analytics",
      description: "One-click generation of professional reports with branding and detailed business analytics.",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      icon: Smartphone,
      title: "AI Report Generation",
      description: "Generate more than 40 types of astrology reports with single click using AI technology.",
      gradient: "from-accent/20 to-secondary/20",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              AI-Powered Features
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Everything You Need to Scale Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Business
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Namo CRM provides all the AI-powered tools you need to manage, grow, and automate your business efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-primary/30"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center mt-16">
            <HoveredButton>
              Ready to transform your business?
            </HoveredButton>
          </div>
        </div>
      </div>
    </section>
  )
}
