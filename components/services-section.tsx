"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Building, Landmark, Users, Cpu, Zap } from "lucide-react"

export default function ServicesSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const services = [
    {
      id: "buying",
      icon: <Home size={20} />,
      title: "Smart Buying",
      subtitle: "AI-Powered Property Discovery",
      features: [
        "AI-driven property matching based on your preferences",
        "Blockchain-verified land document authentication",
        "Real-time market analysis and price predictions",
        "Virtual reality property tours and 3D mapping",
        "Smart contract integration for secure transactions",
      ],
    },
    {
      id: "selling",
      icon: <Building size={20} />,
      title: "Digital Selling",
      subtitle: "Maximum Exposure, Optimal Returns",
      features: [
        "Advanced property valuation using machine learning",
        "Multi-channel digital marketing campaigns",
        "Professional drone photography and virtual staging",
        "Automated buyer matching and qualification",
        "Real-time analytics and performance tracking",
      ],
    },
    {
      id: "investment",
      icon: <Landmark size={20} />,
      title: "Investment Intelligence",
      subtitle: "Data-Driven Investment Strategies",
      features: [
        "Predictive analytics for market trend forecasting",
        "ROI optimization through portfolio analysis",
        "Risk assessment using satellite imagery and data",
        "Automated investment opportunity alerts",
        "Comprehensive market intelligence reports",
      ],
    },
    {
      id: "consultation",
      icon: <Users size={20} />,
      title: "Expert Consultation",
      subtitle: "Personalized Advisory Services",
      features: [
        "One-on-one sessions with certified property experts",
        "Custom development potential assessments",
        "Legal and regulatory compliance guidance",
        "Market trend analysis and future projections",
        "Tailored solutions for complex real estate challenges",
      ],
    },
  ]

  return (
    <section className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 mb-6">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-100 text-sm font-medium">Next-Gen Real Estate Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
            Revolutionary Services
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Experience the future of real estate with our technology-driven approach to property transactions in Gilgit
          </p>
        </motion.div>

        <Tabs defaultValue="buying" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex items-center gap-2 px-4 py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white text-white/70 hover:text-white transition-all duration-300"
              >
                {service.icon}
                <span className="hidden md:inline font-medium">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl" />
                <div className="relative p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                          <p className="text-cyan-100/80">{service.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-white/70 mb-8 text-lg leading-relaxed">
                        Leverage cutting-edge technology and deep market expertise to achieve your real estate goals
                        with unprecedented efficiency and security.
                      </p>

                      <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                        Learn More <ArrowRight size={16} />
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {service.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mt-0.5">
                            <Zap className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-white/80 leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
