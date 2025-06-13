import type React from "react"
export interface Property {
  id: number
  title: string
  location: string
  price: string
  size: string
  type: "Residential" | "Commercial" | "Agricultural"
  featured: boolean
  image: string
  description: string
  views: number
  likes: number
}

export interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  quote: string
  rating: number
  location: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  interest: "buying" | "selling" | "investment" | "consultation"
}

export interface Slide {
  image: string
  title: string
  subtitle: string
}

export interface Stat {
  number: string
  label: string
  icon: React.ReactNode
}

export interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}

export interface Service {
  id: string
  icon: React.ReactNode
  title: string
  subtitle: string
  features: string[]
}

export interface ContactInfo {
  icon: React.ReactNode
  title: string
  details: string[]
  gradient: string
}
