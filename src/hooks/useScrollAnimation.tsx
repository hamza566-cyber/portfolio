import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  direction?: 'left' | 'right' | 'top' | 'bottom' | 'fade'
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', direction = 'fade' } = options
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin])

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return 'animate-slide-in-left'
        case 'right':
          return 'animate-slide-in-right'
        case 'top':
          return 'animate-slide-in-top'
        case 'bottom':
          return 'animate-slide-in-bottom'
        default:
          return 'animate-fade-in'
      }
    }
    return ''
  }

  return { ref, isVisible, animationClass: getAnimationClass() }
}

