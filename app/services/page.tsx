import { ScrollReveal } from "@/components/scroll-reveal"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { 
  Code2, 
  Palette, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Wrench, 
  Cloud, 
  BarChart3, 
  ShieldCheck 
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Microsoft Dynamics ERP",
      description: "Comprehensive enterprise resource planning solution to streamline your business processes.",
      icon: <Code2 className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Web Portals",
      description: "Custom web portals for seamless interaction between your business and clients.",
      icon: <Palette className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Dynamics Business Intelligence",
      description: "Powerful analytics and reporting tools to drive data-driven decisions.",
      icon: <BarChart3 className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Call Center Solutions",
      description: "Efficient call center systems to enhance customer service and support.",
      icon: <Smartphone className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Mobile Applications",
      description: "Custom mobile apps to keep your business connected on the go.",
      icon: <Smartphone className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Document Management",
      description: "Electronic Document Management System for organized and secure document handling.",
      icon: <Search className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Help-Desk System",
      description: "Comprehensive ticket management system for efficient issue resolution.",
      icon: <Wrench className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Central Database",
      description: "Unified data storage solution for all your business needs.",
      icon: <Cloud className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Business Analytics",
      description: "Advanced analytics to gain valuable business insights and drive growth.",
      icon: <BarChart3 className="w-7 h-7 text-[#696DCB]" />
    }
  ]

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What We Offer
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              At <span className="font-semibold text-[#696DCB]">Pristine Systems and Solutions, Inc.</span>, 
              we provide comprehensive business solutions designed to transform your operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full group">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#696DCB]/10 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#696DCB] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 text-center bg-gradient-to-r from-[#696DCB] to-[#4a4fc0] text-white py-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">BENEFITS OF OUR SYSTEMS</h2>
            <p className="text-lg mb-6">
              Experience Increased productivity, improved user experience, and business growth with our tailored solutions.
            </p>
            <a
              href="/contact"
              className="bg-white text-[#696DCB] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Get in Touch
            </a>
          </div>
        </ScrollReveal>

        {/* Benefits and Features Section - Accordion */}
        <ScrollReveal>
          <div className="mt-12 max-w-4xl mx-auto bg-white shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features & Benefits</h2>
            <div className="mb-6">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="productivity">
                  <AccordionTrigger>Increased Productivity</AccordionTrigger>
                  <AccordionContent>Boosts efficiency and output across your organization.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="user-experience">
                  <AccordionTrigger>Improved User Experience</AccordionTrigger>
                  <AccordionContent>Software is easy to use, learn, and adapts to user needs.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="navision-benefit">
                  <AccordionTrigger>Microsoft NAVISION Value</AccordionTrigger>
                  <AccordionContent>Lets employees use business software easily, learn new functions quickly, and work in familiar ways.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="personalization">
                  <AccordionTrigger>Personalization and Customization</AccordionTrigger>
                  <AccordionContent>Tailor the system to your organization’s unique needs.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="event-management">
                  <AccordionTrigger>Event Management with Notifications and Alerts</AccordionTrigger>
                  <AccordionContent>Stay informed and respond quickly to important events.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="chart-of-accounts">
                  <AccordionTrigger>Collapsible Chart of Accounts</AccordionTrigger>
                  <AccordionContent>Organize and manage accounts efficiently.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="business-analytics">
                  <AccordionTrigger>Business Analytics</AccordionTrigger>
                  <AccordionContent>Gain insights and drive growth with advanced analytics.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="central-database">
                  <AccordionTrigger>Central Database</AccordionTrigger>
                  <AccordionContent>Unified data storage for all business needs.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="drill-down">
                  <AccordionTrigger>Drill-Down Capability</AccordionTrigger>
                  <AccordionContent>Analyze data at granular levels for better decision-making.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="xml-data">
                  <AccordionTrigger>XML Data Transfer</AccordionTrigger>
                  <AccordionContent>Seamlessly transfer data between systems.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="auditing">
                  <AccordionTrigger>Auditing Capability</AccordionTrigger>
                  <AccordionContent>Track changes and maintain compliance.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="business-growth">
                  <AccordionTrigger>Business Growth</AccordionTrigger>
                  <AccordionContent>Scalable solutions to support your organization’s expansion.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="scalability">
                  <AccordionTrigger>Scalability</AccordionTrigger>
                  <AccordionContent>Accommodate more users and larger data volumes (MS-SQL).</AccordionContent>
                </AccordionItem>
                <AccordionItem value="open-environment">
                  <AccordionTrigger>Open Environment</AccordionTrigger>
                  <AccordionContent>Flexible and adaptable to changing business needs.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="modular-growth">
                  <AccordionTrigger>Modular Growth and Upgrades</AccordionTrigger>
                  <AccordionContent>Easily add new modules and upgrade features.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="dependability">
                  <AccordionTrigger>Dependability</AccordionTrigger>
                  <AccordionContent>Reliable performance for mission-critical operations.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="flexibility">
                  <AccordionTrigger>Flexibility to Change</AccordionTrigger>
                  <AccordionContent>Adapt quickly to new requirements and market conditions.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="tailored-system">
                  <AccordionTrigger>Tailored System</AccordionTrigger>
                  <AccordionContent>Custom solutions for your specific business processes.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="open-db">
                  <AccordionTrigger>Open Database Connectivity</AccordionTrigger>
                  <AccordionContent>Integrate with other platforms and tools easily.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="integration">
                  <AccordionTrigger>Integration</AccordionTrigger>
                  <AccordionContent>Connect seamlessly with other business systems.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="tech-roadmap">
                  <AccordionTrigger>Technology Road-Map</AccordionTrigger>
                  <AccordionContent>Stay ahead with planned upgrades and innovations.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="competitiveness">
                  <AccordionTrigger>Improved Competitiveness</AccordionTrigger>
                  <AccordionContent>Enhance your market position with advanced tools.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="data-analysis">
                  <AccordionTrigger>Data Analysis</AccordionTrigger>
                  <AccordionContent>Analyze performance data and plan improvements.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="decision-support">
                  <AccordionTrigger>Decision Support</AccordionTrigger>
                  <AccordionContent>Make informed decisions with robust reporting.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="reporting">
                  <AccordionTrigger>Reporting</AccordionTrigger>
                  <AccordionContent>Generate detailed reports for all business areas.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="self-service">
                  <AccordionTrigger>Self Service Portals</AccordionTrigger>
                  <AccordionContent>Empower users to access information and services independently.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
