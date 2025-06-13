"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Award, Users, Shield, Cpu, Zap, Brain } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Intelligence",
      description:
        "Advanced machine learning algorithms analyze market trends and predict property values with 95% accuracy",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Blockchain Security",
      description: "Immutable transaction records and smart contracts ensure complete transparency and security",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Processing",
      description: "Automated workflows and digital documentation reduce transaction time by 70%",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Hyperlocal Expertise",
      description: "Satellite imagery and IoT sensors provide real-time insights into Gilgit's unique geography",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "15+ Years Innovation",
      description: "Pioneering digital transformation in real estate since 2005 with award-winning solutions",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personalized AI Assistant",
      description: "24/7 intelligent chatbot provides instant property recommendations and market insights",
      gradient: "from-pink-500 to-rose-600",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 mb-6">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-100 text-sm font-medium">Technology-Driven Excellence</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
            Why Choose Our Platform
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Experience the future of real estate with our revolutionary technology stack and unmatched local expertise
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <FeatureCard feature={feature} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }) {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
      <Card className="h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group overflow-hidden">
        <CardContent className="p-8 relative">
          {/* Background Gradient */}
          <div
            className={`absolute -inset-4 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
          />

          <div className="relative z-10">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg`}>
              <div className="text-white">{feature.icon}</div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors">
              {feature.title}
            </h3>

            <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
              {feature.description}
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </CardContent>
      </Card>
    </motion.div>
  )
}
