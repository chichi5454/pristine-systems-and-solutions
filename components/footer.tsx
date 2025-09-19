import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Visit Us</h3>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              Westlands Business Park
              <br />
              Nairobi, Kenya
              <br />
              00100 Nairobi
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Working Hours</h3>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              Monday - Friday
              <br />
              9:00 AM - 6:00 PM
              <br />
              East Africa Time
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-primary-foreground/90 hover:text-accent transition-colors">
                About Us
              </a>
              <a href="#services" className="block text-primary-foreground/90 hover:text-accent transition-colors">
                Our Services
              </a>
              <a href="#contact" className="block text-primary-foreground/90 hover:text-accent transition-colors">
                Contact
              </a>
              <a href="#careers" className="block text-primary-foreground/90 hover:text-accent transition-colors">
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-primary-foreground/90 text-sm mb-4">
              Stay updated with our latest insights and solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button 
                variant="secondary" 
                size="sm" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/90 text-sm">
            © 2024 Pristine Systems and Solutions, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
