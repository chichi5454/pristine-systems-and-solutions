import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Secure Your Spot Today!</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 text-pretty">
              Don't let your competition get ahead. Partner with Pristine Systems and Solutions and transform your
              business with cutting-edge digital solutions designed specifically for Kenya's SMEs.
            </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <Button size="lg" variant="secondary" className="group bg-white hover:bg-white hover:text-[#696dcb] px-8 py-6">
                  <span className="flex items-center text-[#696dcb]">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative h-full min-h-[250px] lg:min-h-[350px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/cta.jpg"
                alt="Business Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
