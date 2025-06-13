export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.5,
  SLOW: 0.8,
  VERY_SLOW: 1.0,
} as const

export const SLIDE_INTERVAL = 6000
export const PARTICLE_COUNT_FACTOR = 15000
export const FLOATING_ELEMENTS_COUNT = 8

export const LOCATIONS = [
  { value: "", label: "All Locations" },
  { value: "gilgit-city", label: "Gilgit City" },
  { value: "hunza", label: "Hunza Valley" },
  { value: "skardu", label: "Skardu" },
  { value: "naltar", label: "Naltar Valley" },
] as const

export const PROPERTY_TYPES = ["all", "residential", "commercial", "agricultural"] as const

export const INTEREST_OPTIONS = [
  { value: "buying", label: "Smart Land Buying" },
  { value: "selling", label: "Digital Property Selling" },
  { value: "investment", label: "AI Investment Analysis" },
  { value: "consultation", label: "Expert Consultation" },
] as const
