"use client";
import { useEffect, useRef } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import gsap from "gsap"

export default function AboutPage() {
  const aboutRef = useRef(null)
  const valuePropRef = useRef(null)

  useEffect(() => {
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
    }
    if (valuePropRef.current) {
      gsap.fromTo(
        valuePropRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: "power3.out" }
      )
    }
  }, [])

  return (
    <div className="pt-24 pb-16 ">
      <div className="container mx-auto px-6">
        {/* About Us beside image with GSAP animation */}
  <div ref={aboutRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 bg-white shadow-xl p-10 border border-gray-100 w-full">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#2a3eb1] mb-4 tracking-tight">About Us</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Pristine Systems & Solutions Inc. is a leading enterprise solutions provider, helping organizations across industries boost efficiency and accountability. We streamline processes, automate value chains, and deliver innovative applications that set us apart. Unlike traditional providers, we focus on robust, user-friendly solutions that elevate customer experience.     </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="overflow-hidden shadow-2xl h-64 w-full max-w-md">
              <img src="/about.jpg" alt="About Pristine Systems" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Full-width blue background section for value proposition and points with GSAP animation */}
        <div ref={valuePropRef} className="w-full bg-[#2a3eb1] text-white py-16 px-6 mb-12 shadow-2xl border border-[#2a3eb1]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-xl font-normal mb-4 tracking-tight text-center">Our Value Proposition: Why Pristine Solutions?</h2>
            <p className="text-base md:text-lg text-white mb-4">We understand that organizations want to improve on efficiency while at the same time using the minimum time possible to complete processes without compromising on quality.</p>
            <div className="space-y-4 text-base md:text-lg text-white">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-white text-xl">•</span>
                <span>The company has technical personnel with a vast experience acquired from implementing and supporting some of the mega software projects across industries within and beyond the country’s borders. The team brings together experts in their different areas who have implemented projects in organizations like National Construction Authority, several County Governments and others.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-white text-xl">•</span>
                <span>Pristine values capacity building of its personnel for maximum knowledge dissemination to its clients and therefore ensures continuous training and certifications of the technical team in its various product range.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-white text-xl">•</span>
                <span>Quality projects implementation is vital for the success of a software project; towards this end, we adopt the latest project management methodologies with a step-by-step approach leaning on clearly defined deliverables within the shortest time possible.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-white text-xl">•</span>
                <span>The management has put in place a clear support strategy for our clients to ensure there is no downtime experienced that would interfere with operations. Support calls are given personal attention within preset response times.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-white text-xl">•</span>
                <span>The personal relationship we develop with our clients ensure that we fully understand their operations and needs for maximum support and therefore offer best practice standards for increased efficiency.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-white text-xl">•</span>
                <span>Our solutions are based on flexible, expandable and reliable technology. To help our clients keep up with technology and enjoy value for the money, we advise on best industry practice and software upgrades whenever they are released.</span>
              </div>
            </div>
          </div>
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
             <div className="order-1 lg:order-2 flex flex-col justify-center h-full">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Our Mission</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-4">We are never satisfied until our customers are happy with our products and services.</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1 h-48 md:h-56">
              <img src="/cta.jpg" alt="Our Mission" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg md:text-xl text-gray-600">
              <li className="bg-[#696DCB]/10 shadow rounded-lg p-4">Reliability, Speed and Security</li>
              <li className="bg-[#696DCB]/10 shadow rounded-lg p-4">Customer Service: Honest and Trustworthy, First-class Service, Support Client Input</li>
              <li className="bg-[#696DCB]/10 shadow rounded-lg p-4">Technology: Performance, Flexibility, Expand-ability, Reliability</li>
              <li className="bg-[#696DCB]/10 shadow rounded-lg p-4">Expertise & Stability</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
