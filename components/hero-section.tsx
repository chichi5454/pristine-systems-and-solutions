"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect } from "react"
import gsap from "gsap"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - only hide the paragraph and buttons initially
      gsap.set([paragraphRef.current, buttonsRef.current], { opacity: 0, y: 30 });

      // Get the heading spans
      const headingText = headingRef.current?.querySelectorAll('span');
      if (!headingText) return;

      // Store original text content
      const originalText: string[] = [];
      headingText.forEach(line => {
        originalText.push(line.textContent || '');
        // Clear the line but keep it visible
        line.innerHTML = '';
      });

      // Animate each line
      headingText.forEach((line, lineIndex) => {
        const chars = originalText[lineIndex].split('');
        
        // Create a span for each character
        chars.forEach((char, charIndex) => {
          const charSpan = document.createElement('span');
          charSpan.textContent = char === ' ' ? '\u00A0' : char;
          charSpan.style.display = 'inline-block';
          charSpan.style.transform = 'translateY(-20px)';
          charSpan.style.opacity = '0';
          line.appendChild(charSpan);
          
          // Animate each character
          gsap.to(charSpan, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.1 + (charIndex * 0.02) + (lineIndex * 0.1), // Reduced delays for faster appearance
            ease: 'back.out(1.5)'
          });
        });
      });

      // Animate paragraph
      gsap.to(paragraphRef.current, {
        y: 0,
        opacity: 1,
        delay: 0.6,
        duration: 0.8,
        ease: "power3.out"
      })

      // Animate buttons
      gsap.to(buttonsRef.current, {
        y: 0,
        opacity: 1,
        delay: 0.9,
        duration: 0.8,
        ease: "power3.out"
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])
  return (
    <section ref={heroRef} className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-20 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/about.jpg')",
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/20" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          <span style={{ display: 'block', lineHeight: '1.2', minHeight: '1.2em' }}>YOUR PARTNER IN DIGITAL</span>
          <span className="text-accent" style={{ display: 'block', lineHeight: '1.2', minHeight: '1.2em' }}>EXCELLENCE</span>
        </h1>

        <p ref={paragraphRef} className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
          At Pristine Systems and Solutions, Inc., we're more than just a service provider; we're a partner in your
          digital journey towards excellence.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground text-black bg-primary-foreground "
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
