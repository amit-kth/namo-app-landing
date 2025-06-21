"use client"

import { Star, Quote, Award, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Vedic Astrologer",
      location: "Mumbai, India",
      content:
        "Namo CRM has completely revolutionized my astrology practice. The AI automation handles client inquiries while I focus on consultations. My revenue has increased by 400% in just 4 months!",
      rating: 5,
      image: "https://i.pravatar.cc/300?img=10",
      gradient: "from-emerald/20 to-green/20",
    },
    {
      name: "Michael Chen",
      role: "Life Coach",
      location: "San Francisco, USA",
      content:
        "The AI-powered features are incredible. The system automatically follows up with clients, schedules sessions, and even generates personalized reports. It is like having a virtual assistant that never sleeps!",
      rating: 5,
      image: "https://i.pravatar.cc/300?img=2",
      gradient: "from-blue/20 to-cyan/20",
    },
    {
      name: "Sarah Johnson",
      role: "Business Consultant",
      location: "London, UK",
      content:
        "As someone managing 500+ clients, Namo CRM automation has been a game-changer. The AI handles routine tasks while I focus on high-value consultations. Highly recommended for any consultation business!",
      rating: 5,
      image: "https://i.pravatar.cc/300?img=1",
      gradient: "from-amber/20 to-orange/20",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_50%)]"></div>
      
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
              <Award className="w-4 h-4" />
              Customer Success Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              What Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Customers
              </span> Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what successful professionals say about Namo CRM.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-primary/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-amber-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  
                  {/* Quote icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Testimonial content */}
                  <p className="text-muted-foreground mb-8 italic leading-relaxed text-lg group-hover:text-foreground/80 transition-colors duration-300">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-card"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground font-medium">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground/70 flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom trust indicators */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-8 bg-gradient-to-r from-primary/10 to-accent/10 px-8 py-4 rounded-2xl border border-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1,000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
