import { ScrollReveal } from "@/components/scroll-reveal"
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
      </div>
    </div>
  )
}
