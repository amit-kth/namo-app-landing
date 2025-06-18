"use client"

import { TrendingUp, Clock, Users, Zap } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Scale Your Revenue",
      description: "Increase your income by 5x with AI-powered automation, smart funnels, and subscription management.",
      stats: "Average 500% revenue increase",
      color: "emerald",
    },
    {
      icon: Clock,
      title: "Save Time Daily",
      description: "Automate repetitive tasks with AI and focus on what matters most - serving your clients better.",
      stats: "Save 6+ hours per day",
      color: "blue",
    },
    {
      icon: Users,
      title: "Manage More Clients",
      description: "Handle unlimited clients efficiently with AI-powered CRM and automated workflow management.",
      stats: "Manage 10,000+ clients easily",
      color: "amber",
    },
    {
      icon: Zap,
      title: "Instant Automation",
      description: "AI handles client interactions, follow-ups, and report generation while you focus on growth.",
      stats: "90% task automation",
      color: "rose",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: "bg-emerald/10 text-emerald",
      blue: "bg-blue/10 text-blue",
      amber: "bg-amber/10 text-amber",
      rose: "bg-rose/10 text-rose",
    }
    return colorMap[color as keyof typeof colorMap] || "bg-primary/10 text-primary"
  }

  return (
    <section id="benefits" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Professionals Choose Namo CRM</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of successful astrologers, coaches, and consultants who have transformed their business
              with our AI-powered platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-xl bg-card border hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${getColorClasses(benefit.color)}`}
                >
                  <benefit.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">{benefit.description}</p>
                  <div className="text-sm font-medium text-primary">{benefit.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
