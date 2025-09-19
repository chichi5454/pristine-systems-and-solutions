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
      title: "Web Development",
      description: "Custom websites built with modern technologies to ensure fast, responsive, and scalable solutions.",
      icon: <Code2 className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed to enhance user experience and drive engagement.",
      icon: <Palette className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that work seamlessly on both iOS and Android devices.",
      icon: <Smartphone className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store setup with secure payment processing and inventory management.",
      icon: <ShoppingCart className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "SEO Optimization",
      description: "Improve your website's visibility and ranking on search engines to attract more visitors.",
      icon: <Search className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your digital assets running smoothly.",
      icon: <Wrench className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Cloud Solutions",
      description: "Migrate and manage your infrastructure on the cloud for enhanced scalability and security.",
      icon: <Cloud className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Data Analytics",
      description: "Turn raw data into actionable insights with our advanced analytics solutions.",
      icon: <BarChart3 className="w-7 h-7 text-[#696DCB]" />
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with cutting-edge cybersecurity measures and monitoring.",
      icon: <ShieldCheck className="w-7 h-7 text-[#696DCB]" />
    }
  ]

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              At <span className="font-semibold text-[#696DCB]">Pristine Systems and Solutions, Inc.</span>, 
              we provide comprehensive digital services designed to accelerate your business transformation.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-6">
              Let’s work together to bring your digital vision to life with innovative and reliable solutions.
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
