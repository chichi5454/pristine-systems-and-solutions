import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does Pristine Systems and Solutions offer?",
    answer:
      "We offer comprehensive digital transformation services including ERP implementation, custom software development, project management, training, service reviews, and managed support services specifically tailored for Philippine SMEs.",
  },
  {
    question: "How long does a typical implementation project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical ERP implementation can range from 3-12 months, while custom development projects are scoped individually. We provide detailed project timelines during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer:
      "Yes, we offer comprehensive managed support services including 24/7 monitoring, regular maintenance, user support, and continuous optimization to ensure your systems perform at their best.",
  },
  {
    question: "What makes Pristine Systems and Solutions different from other providers?",
    answer:
      "Our deep expertise in Microsoft Dynamics, client-centric approach, proven track record with Philippine SMEs, and commitment to ethical and transparent practices set us apart. We focus on building long-term partnerships, not just completing projects.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
