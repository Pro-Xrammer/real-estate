"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Mountain } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      image: "/assets/1.jpg",
      title: "Discover Premium Land in Gilgit's Breathtaking Landscapes",
      subtitle: "Where Natural Beauty Meets Investment Opportunity",
    },
    {
      image: "/assets/2.jpg",
      title: "Invest in Nature's Paradise",
      subtitle: "Premium Properties in the Heart of the Karakoram",
    },
    {
      image: "/assets/4.jpg",
      title: "Your Gateway to Mountain Real Estate",
      subtitle: "Trusted Expertise in Gilgit's Property Market",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.05,
            transition: { duration: 2, ease: "easeInOut" },
          }}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={`Gilgit landscape ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </motion.div>
      ))}

      <div className="container relative z-10 h-full flex flex-col justify-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm border border-green-200 shadow-lg mb-6"
          >
            <Mountain className="w-5 h-5 text-green-700" />
            <span className="text-green-800 font-medium">Trusted Since 2005</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-green-100 mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.p
            className="text-lg text-white/90 mb-12 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Find your perfect piece of land in Gilgit's most sought-after locations. From mountain views to riverside
            plots, we have the expertise to help you buy or sell with confidence.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl max-w-3xl border border-white/20">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative group">
                  <MapPin
                    className="absolute left-4 top-4 text-green-600 group-hover:text-green-700 transition-colors"
                    size={20}
                  />
                  <select className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all">
                    <option value="">All Locations</option>
                    <option value="gilgit-city">Gilgit City</option>
                    <option value="hunza">Hunza Valley</option>
                    <option value="skardu">Skardu</option>
                    <option value="naltar">Naltar Valley</option>
                  </select>
                </div>
                <div className="flex-1 relative group">
                  <Search
                    className="absolute left-4 top-4 text-green-600 group-hover:text-green-700 transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search properties..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <Button
                  size="lg"
                  className="lg:w-auto w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Search Properties
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Slide Indicators */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                currentSlide === index ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
