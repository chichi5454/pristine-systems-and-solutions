import { ScrollReveal } from "./scroll-reveal"

export function MissionSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal staggerChildren={true} childClassName="reveal-item">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            <span className="reveal-item block">PIONEERING DIGITAL</span>
            <span className="reveal-item block">TRANSFORMATION FOR</span>
            <span className="reveal-item block">KENYA'S SMES</span>
          </h2>

          <div className="reveal-item">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              At Pristine Systems and Solutions, we understand that every business is unique, which is why we take a
              personalized approach to digital transformation. Our team of experts works closely with you to understand your
              specific needs, challenges, and goals, ensuring that our solutions are tailored to drive real results for your
              business.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
