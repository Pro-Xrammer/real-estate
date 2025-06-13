"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    services: [
      { name: "Buy Property", href: "#" },
      { name: "Sell Property", href: "#" },
      { name: "Investment", href: "#" },
      { name: "Consultation", href: "#" },
    ],
    resources: [
      { name: "Market Reports", href: "#" },
      { name: "Property Guide", href: "#" },
      { name: "Legal Help", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  }

  return (
    <footer className="relative py-16 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/90 to-transparent" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Gilgit Properties
              </h3>
              <p className="text-white/70 leading-relaxed">
                Revolutionizing real estate in Gilgit with AI-powered solutions and cutting-edge technology. Your
                trusted partner in finding the perfect land investment.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60">
                <MapPin size={16} className="text-cyan-400" />
                <span className="text-sm">123 Main Road, Gilgit City</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Phone size={16} className="text-cyan-400" />
                <span className="text-sm">+92 345 1234567</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Mail size={16} className="text-cyan-400" />
                <span className="text-sm">ai@gilgitproperties.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 text-white/60 hover:text-cyan-400 transition-all duration-300"
                >
                  <div className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          className="border-t border-white/10 pt-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold text-white mb-4">Stay Updated with AI Market Insights</h4>
            <p className="text-white/70 mb-6">
              Get weekly AI-generated market reports and exclusive property opportunities delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Gilgit Properties. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>Made with ❤️ in Gilgit</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
