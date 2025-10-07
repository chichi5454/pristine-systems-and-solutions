import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { VisionSection } from "@/components/vision-section"
import { CoreValues } from "@/components/core-values"
import { ServicesSection } from "@/components/services-section"
import { ExpertiseSection } from "@/components/expertise-section"
import QuoteForm from "@/components/quote-form"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <ScrollReveal>
        <MissionSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <VisionSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.3}>
        <CoreValues />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <ServicesSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <ExpertiseSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <QuoteForm />
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <FAQSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
    </>
  )
}
