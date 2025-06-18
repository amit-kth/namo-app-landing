"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContactFormProps {
  compact?: boolean
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  if (isSubmitted) {
    return (
      <motion.div
        className={`bg-card rounded-2xl shadow-xl border ${compact ? "p-6" : "p-8"} relative overflow-hidden`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-emerald/10" />
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-emerald" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground">
            We&apos;ve received your inquiry and will get back to you within 24 hours with your free demo details and custom
            pricing information.
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <div
      className={`bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl border relative overflow-hidden ${compact ? "p-6" : "p-8"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />

      <div className="relative z-10">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Free Demo Available</span>
          </div>
          <h3 className={`font-bold text-foreground mb-2 ${compact ? "text-xl" : "text-2xl"}`}>
            Get Your Free <span className="text-primary">Namo CRM</span> Demo
          </h3>
          <p className="text-muted-foreground">
            See how Namo CRM can transform your business. Get personalized pricing and a custom demo
            tailored to your needs.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-black">Full Name *</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-black">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessType" className="text-black">Your Business Type</Label>
              <Select value={formData.businessType} onValueChange={(value) => handleChange("businessType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="astrologer">Astrologer</SelectItem>
                  <SelectItem value="coach">Coach/Mentor</SelectItem>
                  <SelectItem value="consultant">Consultant</SelectItem>
                  <SelectItem value="influencer">Influencer/Creator</SelectItem>
                  <SelectItem value="spiritual-expert">Spiritual Expert</SelectItem>
                  <SelectItem value="freelancer">Freelancer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {!compact && (
            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your business</Label>
              <Textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell us about your current business and what you're looking for..."
              />
            </div>
          )}

          <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Get Free Demo & Pricing
              </>
            )}
          </Button>
        </form>

        {!compact && <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center mb-4">Or contact us directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918947027625" className="flex items-center gap-2 text-primary hover:underline justify-center">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91-8947027625</span>
            </a>
            <a
              href="mailto:hello@kriscent.in"
              className="flex items-center gap-2 text-primary hover:underline justify-center"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@kriscent.in</span>
            </a>
          </div>
        </div>}
      </div>
    </div>
  )
}
