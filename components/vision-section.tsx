import { ScrollReveal } from "./scroll-reveal"

export function VisionSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal staggerChildren={true} childClassName="reveal-item">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary reveal-item">
              OUR VISION
            </h2>
            <div className="reveal-item">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
                To be the definitive partner in digital transformation for SMEs in Kenya, empowering all
                businesses of ERP systems, advanced analytics, and innovative digital solutions to achieve sustainable
                growth and competitive advantage in the digital economy.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
