import { useState } from 'react'

interface ServicesProps {
  limit?: number
}

const Services = ({ limit }: ServicesProps = {}) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      number: "01",
      title: "App Development",
      description: "I build mobile apps with smooth flow and real use focus.",
      image: "/portfolio/imajes/Services/Mobile%20App%20Development.png"
    },
    {
      id: 2,
      number: "02",
      title: "Full Stack Development",
      description: "I handle front and back work to ship full products.",
      image: "/portfolio/imajes/Services/Full%20Stack%20Development.png"
    },
    {
      id: 3,
      number: "03",
      title: "Website Development",
      description: "I create fast, clean sites built for real business use.",
      image: "/portfolio/imajes/Services/Web%20Development.png"
    }
  ]

  return (
    <section id="services" className="py-20 w-full" style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
      <div className="w-full px-8 lg:px-16 xl:px-24 mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-start">
          {/* Left Side - Title and Heading */}
          <div className="lg:col-span-2">
            {/* Section Title with Yellow Lines */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-accent"></div>
              <p className="font-poppins text-lg text-white">Services</p>
              <div className="w-12 h-0.5 bg-accent"></div>
            </div>

            {/* Main Heading */}
            <h2 className="font-unbounded text-4xl md:text-5xl text-white mb-6 font-bold">
              Delivering Excellence Through <span className="text-accent">Experience.</span>
            </h2>

            {/* Descriptive Text */}
            <p className="font-poppins text-lg text-white max-w-2xl">
              With years of hands-on expertise, I craft innovative, high-quality digital solutions that drive lasting success.
            </p>
          </div>

          {/* Right Side - View All Button */}
          <div className="lg:col-span-1 flex justify-end items-start">
            <a
              href="/portfolio/services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-dark-bg font-poppins text-[18px] font-semibold px-6 py-3 rounded-full hover:bg-black hover:border-2 hover:border-accent hover:text-accent transition-colors flex items-center gap-2 border-2 border-transparent group"
            >
              <svg className="w-5 h-5 text-dark-bg group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View All
            </a>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, limit || services.length).map((service) => (
            <div 
              key={service.id} 
              className="service-card relative group"
              style={{
                backgroundColor: 'rgba(0, 50, 0, 0.6)',
                border: '1px solid rgba(157, 230, 0, 0.3)',
                boxShadow: '0 0 20px rgba(157, 230, 0, 0.2)',
                borderRadius: '28px',
                padding: '20px',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Top Row: Icon on left, Number on right */}
              <div className="flex items-center justify-between mb-4" style={{ zIndex: 2 }}>
                {/* Icon on left with padding */}
                <div className="text-accent" style={{ paddingLeft: '8px' }}>
                  {service.id === 1 && (
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="2" />
                      <circle cx="12" cy="6" r="2" />
                      <circle cx="18" cy="6" r="2" />
                      <circle cx="6" cy="12" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="18" cy="12" r="2" />
                      <circle cx="6" cy="18" r="2" />
                      <circle cx="12" cy="18" r="2" />
                      <circle cx="18" cy="18" r="2" />
                    </svg>
                  )}
                  {service.id === 2 && (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                    </svg>
                  )}
                  {service.id === 3 && (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>

                {/* Number on right with padding */}
                <div style={{ paddingRight: '8px' }}>
                  <p 
                    className="font-unbounded"
                    style={{
                      fontSize: '56px',
                      fontWeight: 600,
                      color: 'transparent',
                      WebkitTextStroke: '2px #FFFFFF',
                      lineHeight: '1em'
                    }}
                  >
                    {service.number}
                  </p>
                </div>
              </div>

              {/* Title */}
              <h3 
                className="font-unbounded text-white font-bold mb-2" 
                style={{ 
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: '1.3em',
                  zIndex: 2
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p 
                className="font-poppins text-white mb-4" 
                style={{ 
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  lineHeight: '1.5em',
                  zIndex: 2
                }}
              >
                {service.description}
              </p>

              {/* Image Container - Takes remaining space */}
              <div 
                className="service-image-wrapper relative flex-1 mt-auto"
                style={{
                  minHeight: '300px',
                  width: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    width: '100%',
                    height: '100%',
                    minHeight: '300px',
                    zIndex: 0,
                    borderRadius: '20px'
                  }}
                />
                
                {/* Circular Arrow Button at bottom right */}
                <div 
                  className="absolute bottom-0 right-0"
                  style={{
                    padding: '20px',
                    zIndex: 10
                  }}
                >
                  <a
                    href={`/portfolio/services/${service.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 ${hoveredCard === service.id ? 'scale-110 rotate-0' : 'scale-100 -rotate-45'}`}
                  >
                    <svg 
                      className="w-6 h-6 text-dark-bg"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
