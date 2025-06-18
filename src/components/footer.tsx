"use client"

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import ContactForm from "./forms/contact-form"

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left section - 40% */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo and description */}
              <div className="flex items-center gap-2 mb-4">
                <img src="./logo.png" className="w-[120px] h-auto saturate-0 brightness-300" />
              </div>

              <p className="text-slate-300 leading-relaxed">
                The complete AI-powered platform designed for astrologers, coaches, consultants, and creators. Transform
                your consultation business with intelligent automation and seamless client management.
              </p>

              {/* Contact information */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-slate-300">hello@kriscent.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-slate-300">+91-8947027625</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-slate-300">Kota, Rajasthan, India</span>
                </div>
              </div>

              {/* Social media */}
              <div>
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right section - 60% */}
            <div className="lg:col-span-3">
              <ContactForm compact />
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm">© 2025 Kriscent Techno Hub Pvt. Ltd. All rights reserved.</div>
              <div className="flex gap-6 text-sm cursor-not-allowed">
                <a className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a className="text-slate-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
