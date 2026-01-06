import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  direction?: 'left' | 'right' | 'top' | 'bottom' | 'fade'
  delay?: number
  className?: string
}

const AnimatedSection = ({ 
  children, 
  direction = 'fade', 
  delay = 0,
  className = '' 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationStyle = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return {
            opacity: 0,
            transform: 'translateX(-50px)'
          }
        case 'right':
          return {
            opacity: 0,
            transform: 'translateX(50px)'
          }
        case 'top':
          return {
            opacity: 0,
            transform: 'translateY(-50px)'
          }
        case 'bottom':
          return {
            opacity: 0,
            transform: 'translateY(50px)'
          }
        default:
          return {
            opacity: 0,
            transform: 'translateY(30px)'
          }
      }
    }
    return {
      opacity: 1,
      transform: 'translate(0, 0)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        ...getAnimationStyle()
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection

