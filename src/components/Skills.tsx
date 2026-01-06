import { useEffect, useState } from 'react'

interface Skill {
  name: string
  percentage: number
  icon: string
  category: string
}

const Skills = () => {
  const skills: Skill[] = [
    // Frontend Development
    { name: "JavaScript (ES6+)", percentage: 95, icon: "fab fa-js-square", category: "Frontend Development" },
    { name: "TypeScript", percentage: 90, icon: "fab fa-js-square", category: "Frontend Development" },
    { name: "React.js", percentage: 95, icon: "fab fa-react", category: "Frontend Development" },
    { name: "Next.js", percentage: 88, icon: "fas fa-code", category: "Frontend Development" },
    { name: "HTML5", percentage: 98, icon: "fab fa-html5", category: "Frontend Development" },
    { name: "CSS3", percentage: 95, icon: "fab fa-css3-alt", category: "Frontend Development" },
    { name: "Responsive UI Development", percentage: 96, icon: "fas fa-mobile-alt", category: "Frontend Development" },
    
    // Backend & APIs
    { name: "Node.js", percentage: 92, icon: "fab fa-node-js", category: "Backend & APIs" },
    { name: "Express.js", percentage: 90, icon: "fas fa-server", category: "Backend & APIs" },
    { name: "REST API Development", percentage: 93, icon: "fas fa-plug", category: "Backend & APIs" },
    { name: "Authentication & API Integration", percentage: 91, icon: "fas fa-shield-alt", category: "Backend & APIs" },
    
    // Full Stack & Product Development
    { name: "End-to-End Web Application Development", percentage: 92, icon: "fas fa-layer-group", category: "Full Stack & Product Development" },
    { name: "SaaS / MRP / ERP-style Systems", percentage: 88, icon: "fas fa-building", category: "Full Stack & Product Development" },
    { name: "Dashboards & Admin Panels", percentage: 90, icon: "fas fa-chart-line", category: "Full Stack & Product Development" },
    
    // Mobile App Development
    { name: "React Native", percentage: 89, icon: "fab fa-react", category: "Mobile App Development" },
    { name: "Cross-platform Mobile Applications", percentage: 87, icon: "fas fa-mobile-alt", category: "Mobile App Development" },
    { name: "Backend & API Integration", percentage: 90, icon: "fas fa-exchange-alt", category: "Mobile App Development" },
    
    // Deployment, Cloud & DevOps
    { name: "Live Production Deployment (VPS)", percentage: 95, icon: "fas fa-rocket", category: "Deployment, Cloud & DevOps" },
    { name: "Domain & DNS Configuration", percentage: 88, icon: "fas fa-globe", category: "Deployment, Cloud & DevOps" },
    { name: "SSL & Email Setup", percentage: 92, icon: "fas fa-lock", category: "Deployment, Cloud & DevOps" },
    { name: "Docker (Basic)", percentage: 80, icon: "fab fa-docker", category: "Deployment, Cloud & DevOps" },
    { name: "Google Cloud & Firebase Console", percentage: 90, icon: "fab fa-google", category: "Deployment, Cloud & DevOps" }
  ]

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(skills.map(skill => skill.category)))]
  
  const [activeCategory, setActiveCategory] = useState<string>("Frontend Development")
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>(
    skills.map(skill => ({ ...skill, percentage: 0 }))
  )

  // Filter skills based on active category
  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  // Update animated skills when category changes
  useEffect(() => {
    setAnimatedSkills(
      filteredSkills.map(skill => ({ ...skill, percentage: 0 }))
    )
  }, [activeCategory])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate skills to their target percentages
            filteredSkills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => {
                  const updated = [...prev]
                  const skillIndex = updated.findIndex(s => s.name === skill.name)
                  if (skillIndex !== -1) {
                    updated[skillIndex] = { ...updated[skillIndex], percentage: skill.percentage }
                  }
                  return updated
                })
              }, index * 50) // Stagger animation
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('skills-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [activeCategory, filteredSkills])

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden w-full"
      style={{
        width: '100%',
        marginLeft: 0,
        marginRight: 0,
        background: 'linear-gradient(to bottom, rgba(0, 50, 0, 0.3), rgba(0, 0, 0, 1))',
        paddingTop: '80px',
        paddingBottom: '80px'
      }}
    >
      <div className="w-full px-8 lg:px-16 xl:px-24 mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Skills Label with Yellow Lines */}
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
              Skills
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
              lineHeight: '1.2em',
              letterSpacing: '1px'
            }}
          >
            Explore the Core Skills Behind <span style={{ color: '#FFC20C' }}>My Work.</span>
          </h2>

          {/* Description */}
          <p 
            className="font-poppins max-w-2xl mx-auto mb-8"
            style={{
              fontSize: '18px',
              fontWeight: 400,
              color: '#C7C7C7',
              lineHeight: '1.6em'
            }}
          >
            A comprehensive overview of my technical expertise and professional capabilities, spanning from frontend to backend, mobile to web, and development to deployment.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-6 py-3 rounded-full font-poppins text-sm font-medium transition-all duration-300"
              style={{
                backgroundColor: activeCategory === category ? '#FFC20C' : 'rgba(255, 255, 255, 0.1)',
                color: activeCategory === category ? '#000000' : '#FFFFFF',
                border: activeCategory === category ? '2px solid #FFC20C' : '2px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: activeCategory === category ? 600 : 400
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 194, 12, 0.2)'
                  e.currentTarget.style.borderColor = '#FFC20C'
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div 
          id="skills-section" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {animatedSkills.map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`} 
              className="relative overflow-hidden rounded-lg p-6"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                borderRadius: '12px',
                animation: 'fadeIn 0.5s ease-in'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-4">
                <i 
                  className={`${skill.icon} text-3xl`}
                  style={{ color: '#FFC20C' }}
                ></i>
                <div className="flex-1">
                  {/* Skill Name and Percentage */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 
                      className="font-unbounded"
                      style={{
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#FFFFFF'
                      }}
                    >
                      {skill.name}
                    </h3>
                    <span 
                      className="font-poppins font-semibold"
                      style={{
                        fontSize: '18px',
                        color: '#FFFFFF'
                      }}
                    >
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div 
                    className="w-full rounded-full overflow-hidden"
                    style={{
                      height: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.percentage}%`,
                        backgroundColor: '#9DE600',
                        boxShadow: '0 0 10px rgba(157, 230, 0, 0.5)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
