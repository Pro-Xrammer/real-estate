import HeroSection from "@/components/hero-section"
import FeaturedProperties from "@/components/featured-properties"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import WhyChooseUs from "@/components/why-choose-us"
import MountainBackground from "@/components/mountain-background"
import FloatingLeaves from "@/components/floating-leaves"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-green-50 z-0" />
      <MountainBackground />
      <FloatingLeaves />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturedProperties />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
