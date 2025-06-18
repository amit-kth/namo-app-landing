"use client"

import { Users, Calendar, CreditCard, BarChart3, Globe, MessageCircle, Brain, Smartphone } from "lucide-react"

export default function FeatureHighlights() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description:
        "AI Assistant, AI Consultant, and AI Agent work together to automate your workflows and client interactions.",
    },
    {
      icon: Users,
      title: "Complete CRM Dashboard",
      description:
        "Centralized client profiles with notes, tags, activity history, and drag-and-drop pipeline management.",
    },
    {
      icon: Calendar,
      title: "Smart Booking & Scheduling",
      description: "Intelligent calendar system with auto-reminders, rescheduling, and video call integration.",
    },
    {
      icon: MessageCircle,
      title: "Multi-Channel Communication",
      description: "Built-in WhatsApp, Telegram integration with broadcast messages and automated campaigns.",
    },
    {
      icon: Globe,
      title: "Sales & Funnel Tools",
      description: "Drag-and-drop landing page builder with lead capture forms and automated behavior-based campaigns.",
    },
    {
      icon: CreditCard,
      title: "Integrated Payments",
      description: "Support for UPI, cards, wallets, net banking with wallet-based pricing and commission management.",
    },
    {
      icon: BarChart3,
      title: "Instant Reports & Analytics",
      description: "One-click generation of professional reports with branding and detailed business analytics.",
    },
    {
      icon: Smartphone,
      title: "AI Report Generation",
      description: "Generate more than 40 types of  astrology reports with single click using AI technology.",
    },
  ]

  return (
    <section id="features" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Scale Your <span className="text-primary">Business</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Namo CRM provides all the AI-powered tools you need to manage, grow, and automate your business efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all duration-300 hover:border-primary/20"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
