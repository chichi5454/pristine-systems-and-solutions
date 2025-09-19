import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          {/* Header Section */}
<div className="text-center mb-16 bg-[#696DCB] rounded-lg py-8 px-4">
  <h1 className="text-4xl font-bold text-white mb-4">Get in Touch!</h1>
  <p className="text-lg text-gray-100 max-w-2xl mx-auto">
    Have questions or need a hand? Our team is here to assist and make sure you get the support you need!
  </p>
</div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section - Info Cards */}
            <div className="space-y-6">
             
              {/* Info Cards */}
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Need a helping hand?</h3>
                  <p className="text-gray-600">Our support experts are always available to assist.</p>
                </div>

                <div className="bg-green-50 border-l-4 border-[#696DCB]  p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to streamline your HR functions?</h3>
                  <p className="text-gray-600">
                    Chat with a Product Expert to get your questions answered and see how our platform perfectly fits your unique needs!
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Want pricing info?</h3>
                  <p className="text-gray-600">
                    Discover pricing options that align with your business size and goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-blue-50  p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-black mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <Input id="firstName" type="text" placeholder="First name" className="w-full bg-white text-gray-700" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <Input id="lastName" type="text" placeholder="Last name" className="w-full bg-white text-gray-700" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="w-full bg-white text-gray-700" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input id="phone" type="tel" placeholder="+254 712-780-000 " className="w-full bg-white text-gray-700" />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <Input id="company" type="text" placeholder="Company name" className="w-full bg-white text-gray-700" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <select
                      id="country"
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-1">Type of Enquiry</label>
                    <select
                      id="enquiryType"
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select enquiry type</option>
                      <option value="support">Support</option>
                      <option value="sales">Sales</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full bg-white text-gray-700"
                    required
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      I consent to the terms and conditions stated in the{' '}
                      <a href="/privacy-policy" className="text-blue-600 hover:text-blue-500 underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-[#696DCB]  text-white py-6 text-base font-medium transition-colors"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
