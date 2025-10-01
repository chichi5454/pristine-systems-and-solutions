import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of enterprise solutions do you provide?",
    answer:
      "We offer Microsoft Dynamics ERP, web portals, business intelligence, call center solutions, mobile applications, document management, help-desk systems, central database, and business analytics to support organizations across sectors.",
  },
  {
    question: "Can your systems be customized for my organization?",
    answer:
      "Yes, our solutions are highly customizable and can be tailored to meet the unique needs and processes of your organization, including personalization, modular growth, and flexible integration.",
  },
  {
    question: "How do your solutions improve productivity and user experience?",
    answer:
      "Our systems automate processes, streamline workflows, and provide intuitive interfaces, making it easier for users to learn new functions and work efficiently in familiar environments.",
  },
  {
    question: "What support and training do you offer after implementation?",
    answer:
      "We provide ongoing support, regular maintenance, user training, and continuous optimization to ensure your systems run smoothly and your team is fully equipped.",
  },
  {
    question: "How do you ensure data security and reliability?",
    answer:
      "Our solutions feature central databases, auditing capabilities, open database connectivity, and enterprise-grade security to protect your data and ensure reliable performance.",
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
