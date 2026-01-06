import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="w-full">
      <nav className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/portfolio/" target="_blank" rel="noopener noreferrer" className="flex items-center flex-shrink-0">
            <img 
              src="/portfolio/imajes/imgi_26_Site-Logo-03.png" 
              alt="Ethan Miller Logo" 
              className="w-[160px] h-[72px] object-contain"
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center space-x-8 flex-1 px-8">
            <a 
              href="/portfolio/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins text-[18px] hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : 'text-white'}`}
            >
              Home
            </a>
            
            <a 
              href="/portfolio/about" 
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins text-[18px] hover:text-accent transition-colors ${isActive('/about') ? 'text-accent' : 'text-white'}`}
            >
              About Me
            </a>

            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`font-poppins text-[18px] hover:text-accent transition-colors flex items-center ${location.pathname.startsWith('/services') ? 'text-accent' : 'text-white'}`}>
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 w-48 bg-transparent backdrop-blur-sm border border-gray-700/30 rounded-lg shadow-lg py-2 z-50"
                  style={{ marginTop: '0px', paddingTop: '8px' }}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a 
                    href="/portfolio/services" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 font-poppins text-[18px] text-accent hover:text-yellow-400 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Services
                  </a>
                  <a 
                    href="/portfolio/service-details" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 font-poppins text-[18px] text-accent hover:text-yellow-400 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Service Details
                  </a>
                </div>
              )}
            </div>

            <a 
              href="/portfolio/projects" 
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins text-[18px] hover:text-accent transition-colors ${isActive('/projects') ? 'text-accent' : 'text-white'}`}
            >
              Projects
            </a>

            <a 
              href="/portfolio/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins text-[18px] hover:text-accent transition-colors ${isActive('/contact') ? 'text-accent' : 'text-white'}`}
            >
              Contact Us
            </a>
          </div>

          {/* Get In Touch Button - Right Side */}
          <div className="hidden lg:block flex-shrink-0">
            <a 
              href="https://wa.me/923368367395?text=I%20want%20help%20from%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-dark-bg font-poppins text-[18px] font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <a href="/portfolio/" target="_blank" rel="noopener noreferrer" className="block font-poppins text-[18px] text-white hover:text-accent">Home</a>
            <a href="/portfolio/about" target="_blank" rel="noopener noreferrer" className="block font-poppins text-[18px] text-white hover:text-accent">About Me</a>
            <a href="/portfolio/services" target="_blank" rel="noopener noreferrer" className="block font-poppins text-[18px] text-white hover:text-accent">Services</a>
            <a href="/portfolio/projects" target="_blank" rel="noopener noreferrer" className="block font-poppins text-[18px] text-white hover:text-accent">Projects</a>
            <a href="/portfolio/contact" target="_blank" rel="noopener noreferrer" className="block font-poppins text-[18px] text-white hover:text-accent">Contact Us</a>
            <a 
              href="https://wa.me/923368367395?text=I%20want%20help%20from%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-dark-bg font-poppins text-[18px] font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors mt-4"
            >
              Get In Touch
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
