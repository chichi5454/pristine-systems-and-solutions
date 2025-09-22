"use client"

import { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type ScrollRevealProps = {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
  stagger?: number
  staggerChildren?: boolean
  childClassName?: string
  distance?: number // Additional distance for dropdown effect
}

export function ScrollReveal({ 
  children, 
  delay = 0,
  duration = 0.8,
  y = 40, // Increased default Y offset
  className = '',
  stagger = 0.15, // Increased default stagger
  staggerChildren = false,
  childClassName = '',
  distance = 20 // Additional distance for dropdown
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Animate the main container
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      defaults: { ease: 'power3.out' }
    })

    // Animate the container with a more pronounced dropdown
    tl.fromTo(
      element,
      { 
        y: y + 50, // Increased initial Y offset for more dramatic dropdown
        opacity: 0,
        rotationX: 5, // Slight 3D rotation for depth
        transformOrigin: 'top center',
        transformPerspective: 1000
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: duration * 1.2, // Slightly longer duration for smoothness
        delay,
        rotationX: 0,
        ease: 'back.out(1.4)' // More pronounced bounce effect
      }
    )

    // Animate direct children with staggered dropdown effect
    if (staggerChildren) {
      const children = childClassName 
        ? element.querySelectorAll(`.${childClassName}`)
        : element.children

      gsap.fromTo(
        children,
        { 
          y: y + 40, // Larger initial Y offset for children
          opacity: 0,
          rotationX: 3, // Subtle 3D effect
          transformOrigin: 'top center'
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: duration * 1.1, // Slightly longer duration
          stagger: stagger * 1.5, // Increased stagger for better visibility
          delay: delay + 0.1,
          ease: 'back.out(1.2)', // Bounce effect
          scrollTrigger: {
            trigger: element,
            start: 'top 85%', // Slightly earlier trigger
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [delay, duration, y, stagger, staggerChildren, childClassName])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
