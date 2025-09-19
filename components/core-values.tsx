import { Shield, Users, Lightbulb, Target, Handshake, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "./scroll-reveal"

const values = [
  {
    icon: Shield,
    title: "INTEGRITY",
    description:
      "We're committed to operating with the highest ethical standards, ensuring transparency and honesty in all our interactions.",
  },
  {
    icon: Users,
    title: "COLLABORATION",
    description:
      "We work as one team with our clients, fostering partnerships built on trust, communication, and shared success.",
  },
  {
    icon: Lightbulb,
    title: "INNOVATION",
    description:
      "We stay at the forefront of technology, continuously exploring new solutions to meet evolving business needs.",
  },
  {
    icon: Target,
    title: "EXCELLENCE",
    description:
      "We deliver exceptional quality in everything we do, exceeding expectations and driving measurable results.",
  },
  {
    icon: Handshake,
    title: "CUSTOMER-CENTRICITY",
    description:
      "Our clients' success is our success. We prioritize their needs and work tirelessly to achieve their goals.",
  },
  {
    icon: Award,
    title: "ACCOUNTABILITY",
    description: "We take ownership of our commitments and deliver on our promises with reliability and consistency.",
  },
]

export function CoreValues() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal y={60} duration={1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">OUR CORE VALUES</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal staggerChildren={true} childClassName="reveal-item" y={80} duration={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="reveal-item">
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 mb-4 rounded-full bg-primary/10 transform transition-transform hover:scale-110">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
