import { ScrollReveal } from "@/components/scroll-reveal"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                About Us
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                At <span className="font-semibold text-[#696DCB]">Pristine Systems and Solutions, Inc.</span>, 
                we're dedicated to delivering exceptional digital solutions that drive business growth. 
                Our team of experts combines creativity with technical expertise to build beautiful, 
                functional, and user-friendly websites and applications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in the industry, we've helped businesses of all sizes establish 
                and expand their online presence. Our commitment to quality and customer satisfaction 
                sets us apart in the digital landscape.
              </p>
            </div>

            {/* Right Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
              <img
                src="/about.jpg"
                alt="About Pristine Systems"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Mission Section */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Mission Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1 h-64 md:h-80">
              <img
                src="/cta.jpg"
                alt="Our Mission"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Mission Text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with innovative digital solutions that solve real-world problems 
                and create meaningful connections with their audience.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Values Section */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-600">
  <li className="bg-[#696DCB]/10 shadow rounded-lg p-4">Excellence in every project we undertake</li>
  <li className="bg-[#696DCB]/10 shadow rounded-lg p-4">Transparent and open communication</li>
  <li className="bg-[#696DCB]/10 shadow rounded-lg p-4">Continuous learning and innovation</li>
  <li className="bg-[#696DCB]/10 shadow rounded-lg p-4">Customer-centric approach</li>
  <li className="bg-[#696DCB]/10 shadow rounded-lg p-4">Integrity in all our dealings</li>
</ul>
          </div>
        </ScrollReveal>
      </div>

      {/* ISO Certification Section */}
      <section className="w-full py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            {/* Left Content */}
            <div className="text-white max-w-2xl">
              <h2 className="text-4xl font-extrabold mb-4">
                Pristine Systems is ISO Certified
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                Protect your data with our ISO 27001 certified, GDPR-compliant 
                platform. We offer enterprise-grade security, multi-factor 
                authentication, and continuous monitoring for uncompromising 
                safety and compliance.
              </p>
            </div>

            {/* Right Compliance Cards */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* GDPR Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 w-56 text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src="/iso1.png"
                    alt="GDPR Logo"
                    className="w-[60px] h-[60px] object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">GDPR</h3>
                <p className="text-gray-600">Compliant</p>
              </div>

              {/* ISO Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 w-56 text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src="/iso2.png"
                    alt="ISO Logo"
                    className="w-[60px] h-[60px] object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">ISO 27001</h3>
                <p className="text-gray-600">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
