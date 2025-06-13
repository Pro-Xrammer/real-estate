"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FormField } from "@/components/ui/form-field"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle } from "lucide-react"
import { validateEmail, validatePhone } from "@/lib/utils"
import { INTEREST_OPTIONS, ANIMATION_DURATION } from "@/lib/constants"
import type { ContactFormData, ContactInfo } from "@/types"

const contactInfo: ContactInfo[] = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Our Office",
    details: ["123 Main Road, Gilgit City", "Pakistan"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone Numbers",
    details: ["+92 345 1234567", "+92 345 7654321"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Contact",
    details: ["info@gilgitproperties.com", "sales@gilgitproperties.com"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Business Hours",
    details: ["Monday - Saturday: 9 AM - 6 PM", "Sunday: Closed"],
    gradient: "from-orange-500 to-red-600",
  },
]

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default function ContactSection() {
  const [formState, setFormState] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "buying",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formState.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formState.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!validatePhone(formState.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", formState)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "buying",
      })
    } catch (error) {
      console.error("Form submission error:", error)
      // Handle error (show toast, etc.)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-green-600 to-emerald-700">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: ANIMATION_DURATION.SLOW }}
          >
            <CheckCircle className="h-20 w-20 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-xl text-green-100 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-700"
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <ErrorBoundary>
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-green-600 to-emerald-700">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION.SLOW }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <MessageSquare className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Our Experts</h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Ready to find your perfect property in Gilgit? Contact our experienced team today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.SLOW, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        label="Full Name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        error={errors.name}
                        required
                      />
                      <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        error={errors.email}
                        required
                      />
                    </div>

                    <FormField
                      label="Phone Number"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+92 345 1234567"
                      error={errors.phone}
                      helperText="Include country code for international numbers"
                      required
                    />

                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-sm font-medium text-gray-700">
                        I'm interested in
                      </Label>
                      <select
                        id="interest"
                        name="interest"
                        value={formState.interest}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        required
                      >
                        {INTEREST_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements, preferred location, budget, or any questions you have..."
                        rows={4}
                        className="resize-none"
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        required
                      />
                      {errors.message && (
                        <p id="message-error" className="text-sm text-red-600" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full gap-2 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 py-4"
                    >
                      {isSubmitting ? (
                        <>
                          <LoadingSpinner size="sm" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION.SLOW, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: ANIMATION_DURATION.NORMAL, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${info.gradient} shadow-lg`}>
                            <div className="text-white">{info.icon}</div>
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-2">{info.title}</h4>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-green-100 text-sm leading-relaxed">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: ANIMATION_DURATION.NORMAL, delay: 0.8 }}
                className="relative"
              >
                <div className="p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
                  <h4 className="text-xl font-bold text-white mb-4">Schedule a Property Tour</h4>
                  <p className="text-green-100 mb-6">
                    Book a personalized property tour with our experts to see the best available plots in person.
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 rounded-xl"
                  >
                    Schedule Tour
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}
