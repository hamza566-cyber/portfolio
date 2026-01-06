import { useState } from 'react'

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "Designing the Beauty Behind the Data.",
      image: encodeURI("/portfolio/imajes/projects/Full Stack Development.jpg")
    },
    {
      id: 2,
      title: "Mobile App Design & Development",
      description: "Designing the Beauty Behind the Data.",
      image: encodeURI("/portfolio/imajes/projects/Mobile App Design & Development.jpg")
    },
    {
      id: 3,
      title: "Web Design & Development",
      description: "Designing the Beauty Behind the Data.",
      image: encodeURI("/portfolio/imajes/projects/Web Design & Development.jpg")
    },
    {
      id: 4,
      title: "Web Development",
      description: "Designing the Beauty Behind the Data.",
      image: encodeURI("/portfolio/imajes/projects/Web Development.jpg")
    },
    {
      id: 5,
      title: "MRP ERP Product",
      description: "Designing the Beauty Behind the Data.",
      image: encodeURI("/portfolio/imajes/projects/MRP  ERP Product.jpg")
    }
  ]

  return (
    <section 
      id="projects" 
      className="py-20 w-full"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '0',
        paddingRight: '0',
        width: '100%',
        marginLeft: 0,
        marginRight: 0
      }}
    >
      <div className="w-full px-8 lg:px-16 xl:px-24 mx-auto">
        {/* Top Section */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-start"
          style={{
            width: '100%',
            maxWidth: '100%'
          }}
        >
          {/* Left Side - Project Label and Title */}
          <div className="lg:col-span-2">
            {/* Project Divider with Yellow Lines */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="w-12 h-0.5" style={{ backgroundColor: '#FFC20C' }}></div>
              <p 
              className="font-poppins text-lg"
              style={{
                color: '#FFFFFF',
                fontSize: '18px',
                fontWeight: 400
              }}
            >
              Project
            </p>
              <div className="w-12 h-0.5" style={{ backgroundColor: '#FFC20C' }}></div>
            </div>

            {/* Main Heading */}
            <h2 
              className="font-unbounded mb-6"
              style={{
                fontSize: '44px',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: '1.1em',
                letterSpacing: '2px'
              }}
            >
              Where Design Meets <span style={{ color: '#FFC20C' }}>Function.</span>
            </h2>
          </div>

          {/* Right Side - Description and Button */}
          <div className="lg:col-span-1 flex flex-col gap-6 items-start lg:items-end">
            {/* Description */}
            <p 
              className="font-poppins text-lg max-w-md lg:text-right"
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: '#FFFFFF',
                lineHeight: '1.5em'
              }}
            >
              Showcasing creative projects blending design, strategy, and innovation for meaningful digital experiences.
            </p>

            {/* View All Button */}
            <a
              href="/portfolio/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              style={{
                backgroundColor: '#9DE600',
                color: '#000000',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                padding: '12px 24px',
                borderRadius: '50px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000'
                e.currentTarget.style.border = '2px solid #9DE600'
                e.currentTarget.style.color = '#9DE600'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#9DE600'
                e.currentTarget.style.border = '2px solid transparent'
                e.currentTarget.style.color = '#000000'
              }}
            >
              <svg 
                className="w-5 h-5"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ width: '20px', height: '20px' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>View All</span>
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: '50px',
            rowGap: '50px',
            columnGap: '50px',
            width: '100%',
            padding: '20px'
          }}
        >
          {/* First Row - 3 Cards */}
          {projects.slice(0, 3).map((project) => (
            <div 
              key={project.id} 
              className="project-card relative overflow-hidden rounded-lg group"
              style={{
                height: '350px',
                borderRadius: '20px',
                position: 'relative',
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Content Overlay */}
              <div 
                className="absolute inset-0 flex flex-col justify-end p-6"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
                  padding: '30px'
                }}
              >
                {/* Title */}
                <h3 
                  className="font-unbounded mb-2"
                  style={{
                    fontSize: '36px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: '1.3em',
                    marginBottom: '12px'
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
                    lineHeight: '1.5em'
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
                  href={`/portfolio/projects/${project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#9DE600',
                    color: '#000000',
                    transform: hoveredCard === project.id ? 'scale(1.1) rotate(0deg)' : 'scale(1) rotate(-45deg)'
                  }}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
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
          ))}

          {/* Second Row - 2 Cards */}
          <div className="md:col-span-2">
            <div 
              className="project-card relative overflow-hidden rounded-lg group"
              style={{
                height: '350px',
                borderRadius: '20px',
                position: 'relative',
                backgroundImage: `url(${projects[3].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
              onMouseEnter={() => setHoveredCard(projects[3].id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Content Overlay */}
              <div 
                className="absolute inset-0 flex flex-col justify-end p-6"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
                  padding: '30px'
                }}
              >
                <h3 
                  className="font-unbounded mb-2"
                  style={{
                    fontSize: '36px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: '1.3em',
                    marginBottom: '12px'
                  }}
                >
                  {projects[3].title}
                </h3>
                <p 
                  className="font-poppins"
                  style={{
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: '1.5em'
                  }}
                >
                  {projects[3].description}
                </p>
              </div>

              {/* Arrow Button */}
              <div 
                className="absolute bottom-0 right-0"
                style={{
                  padding: '20px',
                  zIndex: 10
                }}
              >
                <a
                  href={`/portfolio/projects/${projects[3].id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#9DE600',
                    color: '#000000',
                    transform: hoveredCard === projects[3].id ? 'scale(1.1) rotate(0deg)' : 'scale(1) rotate(-45deg)'
                  }}
                  onMouseEnter={() => setHoveredCard(projects[3].id)}
                  onMouseLeave={() => setHoveredCard(null)}
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
          </div>

          <div>
            <div 
              className="project-card relative overflow-hidden rounded-lg group"
              style={{
                height: '350px',
                borderRadius: '20px',
                position: 'relative',
                backgroundImage: `url(${projects[4].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
              onMouseEnter={() => setHoveredCard(projects[4].id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Content Overlay */}
              <div 
                className="absolute inset-0 flex flex-col justify-end p-6"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%)',
                  padding: '30px'
                }}
              >
                <h3 
                  className="font-unbounded mb-2"
                  style={{
                    fontSize: '36px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: '1.3em',
                    marginBottom: '12px'
                  }}
                >
                  {projects[4].title}
                </h3>
                <p 
                  className="font-poppins"
                  style={{
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: '1.5em'
                  }}
                >
                  {projects[4].description}
                </p>
              </div>

              {/* Arrow Button */}
              <div 
                className="absolute bottom-0 right-0"
                style={{
                  padding: '20px',
                  zIndex: 10
                }}
              >
                <a
                  href={`/portfolio/projects/${projects[4].id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#9DE600',
                    color: '#000000',
                    transform: hoveredCard === projects[4].id ? 'scale(1.1) rotate(0deg)' : 'scale(1) rotate(-45deg)'
                  }}
                  onMouseEnter={() => setHoveredCard(projects[4].id)}
                  onMouseLeave={() => setHoveredCard(null)}
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
