'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { api } from "@/lib/api"
import { toast } from "sonner"

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    try {
      setIsSubscribing(true)
      await api.subscribeToNewsletter(email)
      toast.success('Subscribed successfully!', {
        description: 'Thank you for subscribing to our newsletter.'
      })
      setEmail('')
    } catch (error) {
      console.error('Subscription error:', error)
      toast.error('Subscription failed', {
        description: error instanceof Error ? error.message : 'Please try again later.'
      })
    } finally {
      setIsSubscribing(false)
    }
  }
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
              Subscribe to our newsletter for the latest updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-background/20 border-border text-foreground placeholder:text-foreground/70"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubscribing}
                  required
                />
                <Button 
                  type="submit" 
                  variant="secondary"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
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
