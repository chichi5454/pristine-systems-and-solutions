"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ]

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="bg-white border-b border-gray-100 fixed top-0 left-0 w-full z-[1000]">
      <div className="container mx-auto ps-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="/p1.png"
                  alt="pristine Logo"
                  className="h-20 w-auto object-contain"
                />
              </Link>
            </div>
      </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link 
                key={link.name}
                href={link.href}
                className={cn(
                  'transition-colors font-medium',
                  isActive 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/contact">
            <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
              Get Started
            </Button>
          </Link>
          <button 
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        'md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden',
        isOpen ? 'max-h-60 py-4' : 'max-h-0 py-0'
      )}>
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link 
                key={`mobile-${link.name}`}
                href={link.href}
                className={cn(
                  'py-2 text-base font-medium transition-colors',
                  isActive 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                )}
              >
                {link.name}
              </Link>
            )
          })}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
