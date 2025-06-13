"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { MapPin, ArrowRight, Maximize2, Eye, Heart } from "lucide-react"
import { properties } from "@/data/properties"
import { PROPERTY_TYPES, ANIMATION_DURATION } from "@/lib/constants"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import type { Property } from "@/types"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: ANIMATION_DURATION.NORMAL } },
}

interface PropertyCardProps {
  property: Property
  onLike: (id: number) => void
  isLiked: boolean
}

function PropertyCard({ property, onLike, isLiked }: PropertyCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: ANIMATION_DURATION.FAST }}>
      <Card className="overflow-hidden h-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Overlay Elements */}
          <div className="absolute top-4 left-4 flex gap-2">
            {property.featured && (
              <Badge className="bg-gradient-to-r from-green-600 to-emerald-700 text-white border-none">Featured</Badge>
            )}
            <Badge variant="outline" className="bg-black/20 backdrop-blur-sm border-white/20 text-white">
              {property.type}
            </Badge>
          </div>

          <button
            onClick={() => onLike(property.id)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 transition-all"
            aria-label={isLiked ? "Unlike property" : "Like property"}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </button>

          {/* Stats */}
          <div className="absolute bottom-4 right-4 flex gap-3 text-white/80 text-sm">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{property.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{property.likes}</span>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
              {property.title}
            </h3>
            <p className="text-lg font-bold text-green-600">{property.price}</p>
          </div>

          <div className="flex items-center text-gray-600 mb-3">
            <MapPin size={16} className="mr-2 text-green-600" />
            <span>{property.location}</span>
          </div>

          <p className="text-gray-700 mb-4 text-sm leading-relaxed">{property.description}</p>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Maximize2 size={16} className="text-green-600" />
              <span className="text-gray-700">{property.size}</span>
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white transition-all duration-300">
            View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState<(typeof PROPERTY_TYPES)[number]>("all")
  const [likedProperties, setLikedProperties] = useLocalStorage<number[]>("likedProperties", [])
  const [isLoading, setIsLoading] = useState(false)

  const filteredProperties = useMemo(() => {
    if (activeFilter === "all") return properties
    return properties.filter((property) => property.type.toLowerCase() === activeFilter)
  }, [activeFilter])

  const handleLike = (propertyId: number) => {
    setLikedProperties((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId],
    )
  }

  const handleFilterChange = (filter: (typeof PROPERTY_TYPES)[number]) => {
    setIsLoading(true)
    setActiveFilter(filter)
    // Simulate loading for better UX
    setTimeout(() => setIsLoading(false), 300)
  }

  return (
    <ErrorBoundary>
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.SLOW }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
              <Eye className="w-4 h-4 text-green-700" />
              <span className="text-green-800 text-sm font-medium">Curated Selection</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Featured Properties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium land opportunities in Gilgit's most desirable locations
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex justify-center mb-12 overflow-x-auto pb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.NORMAL, delay: 0.2 }}
          >
            <div className="flex space-x-2 p-2 rounded-2xl bg-white shadow-lg border border-gray-200">
              {PROPERTY_TYPES.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "ghost"}
                  onClick={() => handleFilterChange(filter)}
                  className={`capitalize px-6 py-2 rounded-xl transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  disabled={isLoading}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Properties Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <LoadingSpinner size="lg" />
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              key={activeFilter} // Force re-animation on filter change
            >
              {filteredProperties.map((property) => (
                <motion.div key={property.id} variants={item}>
                  <PropertyCard
                    property={property}
                    onLike={handleLike}
                    isLiked={likedProperties.includes(property.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {filteredProperties.length === 0 && !isLoading && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No properties found for the selected filter.</p>
            </div>
          )}

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.NORMAL, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 px-8 py-4"
            >
              View All Properties <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </section>
    </ErrorBoundary>
  )
}
