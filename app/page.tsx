import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyImportantSection } from "@/components/why-important-section"
import { QuickAccessSection } from "@/components/quick-access-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { EducationalBlogSection } from "@/components/educational-blog-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyImportantSection />
      <ServicesSection />
      <TestimonialsSection />
      <EducationalBlogSection />
      <CTASection />
      <Footer />
    </main>
  )
}
