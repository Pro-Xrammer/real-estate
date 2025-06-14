"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Shield, Target } from "lucide-react"

export default function AboutSection() {
  const stats = [
    { number: "15+", label: "Years Experience", icon: <Target className="w-6 h-6" /> },
    { number: "500+", label: "Properties Sold", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Shield className="w-6 h-6" /> },
  ]

  return (
    <section className="py-24 md:py-32 relative bg-white">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl blur-xl opacity-50" />
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image src="/assets/land.jpg" alt="Gilgit Properties Office" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
              <Award className="w-4 h-4 text-green-700" />
              <span className="text-green-800 text-sm font-medium">Industry Leaders Since 2005</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Gilgit's Premier Land Specialists</h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Gilgit Properties, we combine deep local knowledge with professional expertise to connect buyers with
              pristine land opportunities in Pakistan's most breathtaking region. Our commitment to transparency,
              integrity, and client satisfaction has made us the trusted choice for property transactions in Gilgit.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex justify-center mb-2 text-green-600">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Our Story <ArrowRight size={16} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-300 text-green-700 hover:bg-green-50 rounded-xl"
              >
                Meet Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
