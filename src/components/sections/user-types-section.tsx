"use client"

import { motion } from "framer-motion"
import { 
  Sparkles, 
  Users, 
  Heart, 
  Briefcase, 
  Brain, 
  Smartphone, 
  GraduationCap, 
  Calendar,
  Target
} from "lucide-react"

export default function UserTypesSection() {
  const userTypes = [
    {
      icon: Sparkles,
      title: "Astrologers & Tarot Readers",
      description: "Transform your spiritual practice with AI-powered automation and client management.",
      benefits: [
        "Auto-generate 40+ astrology reports with AI",
        "Manage client bookings with zero manual follow-up",
        "Send WhatsApp/Telegram broadcast horoscopes",
        "Track consultation history and payment status"
      ],
      gradient: "from-purple/20 to-pink/20",
      iconColor: "text-purple-600"
    },
    {
      icon: Users,
      title: "Coaches & Mentors",
      description: "Scale your coaching business with automated systems and personalized client tracking.",
      benefits: [
        "Schedule recurring coaching sessions with ease",
        "Personal CRM to track goals, habits, and notes",
        "Run automated onboarding and session reminders",
        "Collect payments and issue invoices instantly"
      ],
      gradient: "from-blue/20 to-cyan/20",
      iconColor: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Spiritual Healers & Reiki Practitioners",
      description: "Build lasting client relationships while focusing on your healing practice.",
      benefits: [
        "Maintain detailed healing logs per client",
        "Use auto-reminders for follow-up sessions",
        "Sell sessions/packages online with integrated payment",
        "Build a loyal client base with custom offers and WhatsApp updates"
      ],
      gradient: "from-green/20 to-emerald/20",
      iconColor: "text-green-600"
    },
    {
      icon: Briefcase,
      title: "Consultants & Freelancers",
      description: "Streamline your consulting business with professional client management tools.",
      benefits: [
        "Organize all clients, notes, and project stages",
        "Automate onboarding emails and intake forms",
        "Analyze revenue with real-time reports",
        "Use calendar syncing for effortless scheduling"
      ],
      gradient: "from-orange/20 to-red/20",
      iconColor: "text-orange-600"
    },
    {
      icon: Brain,
      title: "Therapists & Counselors",
      description: "Maintain client confidentiality while streamlining your practice management.",
      benefits: [
        "Securely store session notes and history",
        "Customize client intake forms",
        "Set recurring sessions and automated reminders",
        "Enable discreet WhatsApp/TG communication"
      ],
      gradient: "from-indigo/20 to-purple/20",
      iconColor: "text-indigo-600"
    },
    {
      icon: Smartphone,
      title: "Digital Creators & Influencers",
      description: "Turn your audience into a thriving business with smart CRM tools.",
      benefits: [
        "Build and manage your audience as a CRM",
        "Launch products or courses via WhatsApp funnels",
        "Track leads from landing pages and forms",
        "Automate freebie delivery, feedback, and upsells"
      ],
      gradient: "from-pink/20 to-rose/20",
      iconColor: "text-pink-600"
    },
    {
      icon: GraduationCap,
      title: "Astrology Schools or Institutes",
      description: "Manage your educational institution with comprehensive student tracking.",
      benefits: [
        "CRM for student management and course tracking",
        "Assign mentors, track attendance, and schedule classes",
        "Automate class reminders, fees, and certification delivery",
        "Run group sessions via integrated video tools"
      ],
      gradient: "from-yellow/20 to-amber/20",
      iconColor: "text-yellow-600"
    },
    {
      icon: Calendar,
      title: "Pandits",
      description: "Streamline event management for pujas, webinars, and spiritual gatherings.",
      benefits: [
        "Auto-manage registration, fees, and reminders",
        "Broadcast event links and follow-ups on WhatsApp",
        "Collect participant info and feedback",
        "Maintain event calendars with zero hassle"
      ],
      gradient: "from-teal/20 to-cyan/20",
      iconColor: "text-teal-600"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Perfect for Every Professional
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Designed for{" "}
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Growth-Driven
              </span>{" "}
              Professionals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re a spiritual guide or a digital creator, Namo CRM helps you automate, scale, and thrive.
            </p>
          </motion.div>

          {/* User Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {userTypes.map((userType, index) => (
              <motion.div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-primary/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${userType.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${userType.gradient.replace('/20', '/10')} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <userType.icon className={`w-6 h-6 ${userType.iconColor}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {userType.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {userType.description}
                  </p>
                  
                  {/* Benefits */}
                  <ul className="space-y-2">
                    {userType.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 