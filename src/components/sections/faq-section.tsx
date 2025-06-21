"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle, Shield, Zap, CreditCard } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How quickly can I get started with Namo CRM?",
      answer:
        "You can get started immediately! Our AI-powered setup process takes less than 5 minutes. Simply sign up, and our AI Assistant will guide you through customizing your profile, setting up your services, and configuring automation workflows. We also provide free onboarding support and training.",
      icon: Zap,
      category: "Getting Started"
    },
    {
      question: "Do I need any technical knowledge to use Namo CRM?",
      answer:
        "Not at all! Namo CRM is designed to be user-friendly for professionals of all technical levels. Our AI Assistant handles the complex setup, and the intuitive interface makes it easy to manage clients, conduct consultations, and automate workflows without any technical expertise.",
      icon: HelpCircle,
      category: "Ease of Use"
    },
    {
      question: "How does the AI automation work?",
      answer:
        "Our AI system includes three components: AI Assistant (helps with setup and workflows), AI Consultant (interacts with clients and provides insights), and AI Agent (tracks behavior and triggers automated actions). Together, they handle routine tasks, client interactions, and business processes automatically.",
      icon: Zap,
      category: "AI Features"
    },
    {
      question: "Can I use my own payment methods and branding?",
      answer:
        "Yes! Namo CRM integrates with all major payment gateways including UPI, cards, wallets, and net banking. You can use your existing merchant accounts and keep 100% of your earnings. We also offer complete white-labeling options for your branding needs.",
      icon: CreditCard,
      category: "Payments & Branding"
    },
    {
      question: "Is my client data secure and private?",
      answer:
        "Absolutely. We use enterprise-grade security with 256-bit SSL encryption, multi-factor authentication, and regular security audits. Your client data is stored securely in compliance with international privacy standards and is never shared with third parties.",
      icon: Shield,
      category: "Security & Privacy"
    },
    {
      question: "What kind of support and training do you provide?",
      answer:
        "We provide 24/7 AI-powered support along with human experts available via chat, email, and phone. Our team includes business automation specialists who understand consultation businesses. We also offer free training sessions, comprehensive documentation, and video tutorials.",
      icon: MessageCircle,
      category: "Support & Training"
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Namo CRM. Can&apos;t find what you&apos;re looking for? 
              <span className="text-primary font-semibold"> Contact our support team</span>.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-500 hover:border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.button
                    className="flex items-center justify-between w-full p-6 text-left hover:bg-muted/20 transition-colors rounded-2xl"
                    onClick={() => toggleFaq(index)}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <faq.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {faq.category}
                          </span>
                        </div>
                        <span className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      className="w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300"
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 ml-14">
                          <div className="border-l-2 border-primary/20 pl-4">
                            <p className="text-muted-foreground leading-relaxed text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-6 bg-gradient-to-r from-primary/10 to-accent/10 px-8 py-4 rounded-2xl border border-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5min</div>
                <div className="text-sm text-muted-foreground">Setup Time</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Secure</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
