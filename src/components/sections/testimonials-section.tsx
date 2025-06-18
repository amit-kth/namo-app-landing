"use client"

import { Star, Quote } from "lucide-react"

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
    },
    {
      name: "Michael Chen",
      role: "Life Coach",
      location: "San Francisco, USA",
      content:
        "The AI-powered features are incredible. The system automatically follows up with clients, schedules sessions, and even generates personalized reports. It is like having a virtual assistant that never sleeps!",
      rating: 5,
      image: "https://i.pravatar.cc/300?img=2",
    },
    {
      name: "Sarah Johnson",
      role: "Business Consultant",
      location: "London, UK",
      content:
        "As someone managing 500+ clients, Namo CRM automation has been a game-changer. The AI handles routine tasks while I focus on high-value consultations. Highly recommended for any consultation business!",
      rating: 5,
      image: "https://i.pravatar.cc/300?img=1",
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what successful professionals say about Namo CRM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gray-200 mb-4" />
                <p className="text-muted-foreground mb-6 italic leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
