"use client"

import { TrendingUp, Clock, Users, Zap, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Scale Your Revenue",
      description: "Increase your income upto 10x with AI-powered automation, smart funnels, and subscription management.",
      stats: "Average 5x revenue increase",
      gradient: "from-emerald/20 to-green/20",
      iconBg: "from-emerald/20 to-green/20",
      iconColor: "text-emerald",
    },
    {
      icon: Clock,
      title: "Save Time Daily",
      description: "Automate repetitive tasks with AI and focus on what matters most - serving your clients better.",
      stats: "Save 6+ hours per day",
      gradient: "from-blue/20 to-cyan/20",
      iconBg: "from-blue/20 to-cyan/20",
      iconColor: "text-blue",
    },
    {
      icon: Users,
      title: "Manage More Clients",
      description: "Handle unlimited clients efficiently with AI-powered CRM and automated workflow management.",
      stats: "Manage 10,000+ clients easily",
      gradient: "from-amber/20 to-orange/20",
      iconBg: "from-amber/20 to-orange/20",
      iconColor: "text-amber",
    },
    {
      icon: Zap,
      title: "Instant Automation",
      description: "AI handles client interactions, follow-ups, and report generation while you focus on growth.",
      stats: "90% task automation",
      gradient: "from-rose/20 to-pink/20",
      iconBg: "from-rose/20 to-pink/20",
      iconColor: "text-rose",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Proven Results
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why Professionals Choose{" "}
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Namo CRM
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful astrologers, coaches, and consultants who have transformed their business
              with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-primary/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex gap-6 items-start">
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-100`}>
                      <benefit.icon className={`w-8 h-8 ${benefit.iconColor} group-hover:text-white transition-colors duration-300`} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {benefit.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {benefit.stats}
                        </div>

                        {/* Hover arrow */}
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                          <ArrowRight className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
