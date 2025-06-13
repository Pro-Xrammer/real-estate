"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Tech Entrepreneur",
    image: "/images/testimonial-1.png",
    quote:
      "The AI-powered property matching was incredible. Within hours, I found the perfect mountain-view plot that matched all my criteria. The blockchain verification gave me complete confidence in the transaction.",
    rating: 5,
    location: "Hunza Valley",
  },
  {
    id: 2,
    name: "Fatima Zahra",
    role: "Digital Nomad",
    image: "/images/testimonial-2.png",
    quote:
      "The virtual reality tours saved me multiple trips to Gilgit. I could explore every property in detail from my home in Karachi. The smart contract integration made the purchase seamless and secure.",
    rating: 5,
    location: "Gilgit City",
  },
  {
    id: 3,
    name: "Mohammad Ali",
    role: "Investment Analyst",
    image: "/images/testimonial-3.png",
    quote:
      "Their predictive analytics helped me identify high-growth areas before they became popular. The ROI on my Gilgit properties has exceeded all expectations thanks to their data-driven insights.",
    rating: 5,
    location: "Naltar Valley",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 mb-6">
            <Star className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-100 text-sm font-medium">Client Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Discover how our technology-driven approach has transformed real estate experiences for our clients
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -15 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl" />
              <Card className="relative bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Quote Section */}
                    <div className="lg:col-span-2">
                      <Quote className="h-16 w-16 text-cyan-400/30 mb-6" />
                      <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed italic">
                        "{testimonials[current].quote}"
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-6 w-6 ${
                              i < testimonials[current].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                            }`}
                          />
                        ))}
                        <span className="text-white/60 ml-2">5.0 out of 5</span>
                      </div>
                    </div>

                    {/* Profile Section */}
                    <div className="text-center lg:text-left">
                      <div className="relative inline-block mb-6">
                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-50" />
                        <div className="relative h-24 w-24 mx-auto lg:mx-0 rounded-full overflow-hidden border-2 border-white/20">
                          <Image
                            src={testimonials[current].image || "/placeholder.svg"}
                            alt={testimonials[current].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-2">{testimonials[current].name}</h4>
                      <p className="text-cyan-100/80 mb-2">{testimonials[current].role}</p>
                      <p className="text-white/60 text-sm">Property in {testimonials[current].location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center mt-12 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
