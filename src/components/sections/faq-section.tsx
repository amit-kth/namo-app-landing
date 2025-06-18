"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How quickly can I get started with Namo CRM?",
      answer:
        "You can get started immediately! Our AI-powered setup process takes less than 5 minutes. Simply sign up, and our AI Assistant will guide you through customizing your profile, setting up your services, and configuring automation workflows. We also provide free onboarding support and training.",
    },
    {
      question: "Do I need any technical knowledge to use Namo CRM?",
      answer:
        "Not at all! Namo CRM is designed to be user-friendly for professionals of all technical levels. Our AI Assistant handles the complex setup, and the intuitive interface makes it easy to manage clients, conduct consultations, and automate workflows without any technical expertise.",
    },
    {
      question: "How does the AI automation work?",
      answer:
        "Our AI system includes three components: AI Assistant (helps with setup and workflows), AI Consultant (interacts with clients and provides insights), and AI Agent (tracks behavior and triggers automated actions). Together, they handle routine tasks, client interactions, and business processes automatically.",
    },
    {
      question: "Can I use my own payment methods and branding?",
      answer:
        "Yes! Namo CRM integrates with all major payment gateways including UPI, cards, wallets, and net banking. You can use your existing merchant accounts and keep 100% of your earnings. We also offer complete white-labeling options for your branding needs.",
    },
    {
      question: "Is my client data secure and private?",
      answer:
        "Absolutely. We use enterprise-grade security with 256-bit SSL encryption, multi-factor authentication, and regular security audits. Your client data is stored securely in compliance with international privacy standards and is never shared with third parties.",
    },
    {
      question: "What kind of support and training do you provide?",
      answer:
        "We provide 24/7 AI-powered support along with human experts available via chat, email, and phone. Our team includes business automation specialists who understand consultation businesses. We also offer free training sessions, comprehensive documentation, and video tutorials.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about Namo CRM</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border overflow-hidden hover:shadow-sm transition-all duration-300"
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left hover:bg-muted/30 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
