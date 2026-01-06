import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect, useRef } from 'react'

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All')
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [displayCount, setDisplayCount] = useState<number>(6)
  const galleryRef = useRef<HTMLDivElement>(null)

  const filters = [
    'All',
    'Frontend Development',
    'Full-Stack Development',
    'Mobile App Development',
    'CRM'
  ]

  const allProjects = [
    {
      id: 1,
      title: "Capella Ventures",
      description: "Modern website for construction company projects.",
      image: encodeURI("/portfolio/imajes/projects/frontend development/capellaVenturesProject4.png"),
      categories: ["Frontend Development", "Full-Stack Development"],
      url: "https://capella-ventures.com/wp/"
    },
    {
      id: 2,
      title: "Neat Roots",
      description: "Clean design for eco-friendly pet supplies.",
      image: encodeURI("/portfolio/imajes/projects/frontend development/neatRootsProject5.png"),
      categories: ["Frontend Development", "Full-Stack Development"],
      url: "#"
    },
    {
      id: 3,
      title: "PetBidder",
      description: "Pet auction platform with responsive UI.",
      image: encodeURI("/portfolio/imajes/projects/frontend development/petbidder.png"),
      categories: ["Frontend Development", "Full-Stack Development"],
      url: "#"
    },
    {
      id: 4,
      title: "Protow Website",
      description: "Corporate site for consulting services solutions.",
      image: encodeURI("/portfolio/imajes/projects/frontend development/protowWebsiteProject3.png"),
      categories: ["Frontend Development", "Full-Stack Development"],
      url: "https://protow-recovery.co.uk/"
    },
    {
      id: 5,
      title: "Seru-Grammar",
      description: "Educational platform with interactive web interface.",
      image: encodeURI("/portfolio/imajes/projects/frontend development/seruGrammarProject2.png"),
      categories: ["Frontend Development", "Full-Stack Development"],
      url: "http://seru-grammar.co.uk/"
    },
    {
      id: 6,
      title: "Euro Installations",
      description: "Professional construction and installation services website.",
      image: encodeURI("/portfolio/imajes/projects/frontend development/euro-installations.png"),
      categories: ["Frontend Development", "Full-Stack Development"],
      url: "https://euro-installations.co.uk/"
    },
    {
      id: 7,
      title: "Strategic Innovations",
      description: "Business solutions site with modern front-end.",
      image: encodeURI("/portfolio/imajes/projects/Web Development.jpg"),
      categories: ["Frontend Development", "Full-Stack Development"],
      url: "https://strategic-innovations.co.uk/"
    },
    {
      id: 8,
      title: "Cocobeanz",
      description: "Pet care services website with smooth UI.",
      image: encodeURI("/portfolio/imajes/projects/Web Design & Development.jpg"),
      categories: ["Frontend Development", "Full-Stack Development"],
      url: "https://cocobeanz.co.uk/"
    },
    {
      id: 9,
      title: "The EDUNest",
      description: "Education platform featuring interactive learning modules.",
      image: encodeURI("/portfolio/imajes/projects/Full Stack Development.jpg"),
      categories: ["Frontend Development", "Full-Stack Development"],
      url: "#"
    },
    {
      id: 10,
      title: "EasyFix Joiners",
      description: "Construction services website with responsive design.",
      image: encodeURI("/portfolio/imajes/projects/frontend development/easyfixjoiners.png"),
      categories: ["Frontend Development", "Full-Stack Development"],
      url: "https://easyfixjoiners.co.uk/"
    },
    {
      id: 11,
      title: "Euro Installations",
      description: "Advanced website for European construction services.",
      image: encodeURI("/portfolio/imajes/projects/frontend development/euro-installations.png"),
      categories: ["Frontend Development", "Full-Stack Development"],
      url: "https://euro-installations.co.uk/"
    },
    {
      id: 12,
      title: "Mr. Expert Carpet Cleaning",
      description: "Carpet cleaning service website, fully responsive.",
      image: encodeURI("/portfolio/imajes/projects/frontend development/mrexpertcarpet.png"),
      categories: ["Frontend Development", "Full-Stack Development"],
      url: "https://mrexpertcarpetcleaning.com/"
    },
    {
      id: 13,
      title: "Tic-Tac-Toe App",
      description: "Classic game app with smooth UI.",
      image: encodeURI("/portfolio/imajes/projects/App Development/Tic-Tac-Toe App.jpg"),
      categories: ["Mobile App Development"],
      url: "#"
    },
    {
      id: 14,
      title: "Social Connect",
      description: "Connect with users through chat and posts.",
      image: encodeURI("/portfolio/imajes/projects/App Development/Social Connect.jpg"),
      categories: ["Mobile App Development"],
      url: "#"
    },
    {
      id: 15,
      title: "Give and Grow",
      description: "Donation platform app for easy giving.",
      image: encodeURI("/portfolio/imajes/projects/App Development/Give and Grow.jpeg"),
      categories: ["Mobile App Development"],
      url: "#"
    },
    {
      id: 16,
      title: "Currency Converter",
      description: "Real-time currency conversion mobile app.",
      image: encodeURI("/portfolio/imajes/projects/App Development/Currency Convertor.png"),
      categories: ["Mobile App Development"],
      url: "#"
    },
    {
      id: 17,
      title: "MRP System",
      description: "Manage inventory, production, and workflows efficiently.",
      image: encodeURI("/portfolio/imajes/projects/CRM/MRP System.png"),
      categories: ["CRM"],
      url: "#"
    },
    {
      id: 18,
      title: "Company Portal System",
      description: "Centralized platform for company operations management.",
      image: encodeURI("/portfolio/imajes/projects/CRM/Company Portal System.png"),
      categories: ["CRM"],
      url: "#"
    },
    {
      id: 19,
      title: "EuroInstallation Portal",
      description: "Construction project management and client tracking portal.",
      image: encodeURI("/portfolio/imajes/projects/CRM/EuroInstallation Portal.png"),
      categories: ["CRM"],
      url: "#"
    },
    {
      id: 20,
      title: "Cocobeanz Portal",
      description: "Pet service portal with booking and updates.",
      image: encodeURI("/portfolio/imajes/projects/Web Design & Development.jpg"),
      categories: ["CRM"],
      url: "#"
    }
  ]

  const filteredProjects = selectedFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.categories.includes(selectedFilter))

  const displayedProjects = filteredProjects.slice(0, displayCount)
  const hasMore = filteredProjects.length > displayCount

  // Reset display count when filter changes
  useEffect(() => {
    setDisplayCount(6)
  }, [selectedFilter])

  // Reset visible items when filter or display count changes
  useEffect(() => {
    setVisibleItems(new Set())
    const projectsToShow = filteredProjects.slice(0, displayCount)
    const timer = setTimeout(() => {
      projectsToShow.forEach((project, index) => {
        setTimeout(() => {
          setVisibleItems(prev => new Set([...prev, project.id]))
        }, index * 100)
      })
    }, 100)
    return () => clearTimeout(timer)
  }, [selectedFilter, displayCount, filteredProjects.length])

  return (
    <>
      <Header />
      <main className="w-full">
        {/* Hero Section with Title and Breadcrumbs */}
        <section 
          className="relative py-32 w-full"
          style={{
            backgroundImage: `url(/portfolio/imajes/${encodeURI('backjround imaje.webp')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Content */}
          <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24 mx-auto text-center">
            <h1 className="font-unbounded text-5xl md:text-6xl lg:text-7xl text-white mb-4 font-bold">
              Projects
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/80 font-poppins text-lg">
              <a href="/portfolio/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Home</a>
              <span>»</span>
              <span>Projects</span>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 w-full bg-dark-bg">
          <div className="w-full px-8 lg:px-16 xl:px-24 mx-auto" style={{ maxWidth: '1280px' }}>
            {/* Subtitle, Title, and Description */}
            <div className="text-center mb-12">
              {/* Subtitle with Yellow Lines */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-0.5" style={{ backgroundColor: '#FFC20C' }}></div>
                <p 
                  className="font-poppins uppercase tracking-wider"
                  style={{
                    color: '#FFFFFF',
                    fontSize: '18px',
                    fontWeight: 400,
                    letterSpacing: '2px'
                  }}
                >
                  Project
                </p>
                <div className="w-12 h-0.5" style={{ backgroundColor: '#FFC20C' }}></div>
              </div>

              {/* Main Title */}
              <h2 
                className="font-unbounded mb-6"
                style={{
                  fontSize: '44px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: '1.2em',
                  letterSpacing: '1px'
                }}
              >
                Where Design Meets <span style={{ color: '#FFC20C' }}>Function.</span>
              </h2>

              {/* Description */}
              <p 
                className="font-poppins max-w-2xl mx-auto"
                style={{
                  fontSize: '18px',
                  fontWeight: 400,
                  color: '#C7C7C7',
                  lineHeight: '1.6em'
                }}
              >
                Showcasing creative projects blending design, strategy, and innovation for meaningful digital experiences.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className="font-poppins px-6 py-3 rounded-full filter-transition"
                  style={{
                    backgroundColor: selectedFilter === filter ? '#9DE600' : 'transparent',
                    color: selectedFilter === filter ? '#000000' : '#FFFFFF',
                    border: selectedFilter === filter ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
                    fontWeight: selectedFilter === filter ? 600 : 400,
                    fontSize: '18px',
                    transform: selectedFilter === filter ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Projects Gallery */}
            <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project) => {
                const index = displayedProjects.indexOf(project)
                return (
                <div 
                  key={project.id}
                  className={`relative overflow-hidden rounded-lg group gallery-item ${
                    visibleItems.has(project.id) ? 'visible' : ''
                  }`}
                  style={{
                    borderRadius: '20px',
                    minHeight: '400px',
                    position: 'relative',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: visibleItems.has(project.id) ? 1 : 0,
                    transform: visibleItems.has(project.id) 
                      ? `translateY(0) scale(1)` 
                      : `translateY(30px) scale(0.95)`,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      width: '100%',
                      height: '100%',
                      minHeight: '400px'
                    }}
                  />

                  {/* Dark Overlay for Text Readability */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%)'
                    }}
                  />

                  {/* Content Overlay - Title and Description Above Image */}
                  <div 
                    className="absolute inset-0 flex flex-col justify-start p-6"
                    style={{
                      padding: '30px',
                      zIndex: 2
                    }}
                  >
                    {/* Title */}
                    <h3 
                      className="font-unbounded mb-3"
                      style={{
                        fontSize: '28px',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        lineHeight: '1.3em',
                        marginBottom: '12px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="font-poppins"
                      style={{
                        fontSize: '18px',
                        fontWeight: 400,
                        color: '#FFFFFF',
                        lineHeight: '1.5em',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow Button - Bottom Right */}
                  <div 
                    className="absolute bottom-0 right-0"
                    style={{
                      padding: '20px',
                      zIndex: 10
                    }}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#9DE600',
                        color: '#000000'
                      }}
                    >
                      <svg 
                        className="w-6 h-6"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ width: '24px', height: '24px' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
                )
              })}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setDisplayCount(prev => Math.min(prev + 6, filteredProjects.length))}
                  className="px-8 py-4 rounded-full font-poppins font-semibold text-lg transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#9DE600',
                    color: '#000000'
                  }}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Projects
