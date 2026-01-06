import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const Skills = () => {
  const skills = [
    { name: "Figma", percentage: 90, image: "/portfolio/imajes/imgi_10_figma.png" },
    { name: "WordPress", percentage: 85, image: "/portfolio/imajes/imgi_11_wordpress.png" },
    { name: "Sketch", percentage: 80, image: "/portfolio/imajes/imgi_12_sketch.png" },
    { name: "Web Design", percentage: 95, image: "/portfolio/imajes/imgi_13_graphic-designer.png" },
    { name: "Xd", percentage: 75, image: "/portfolio/imajes/imgi_14_experience.png" },
    { name: "Mobile App", percentage: 88, image: "/portfolio/imajes/imgi_15_user-interface.png" }
  ]

  const [animatedSkills, setAnimatedSkills] = useState(skills.map(s => ({ ...s, percentage: 0 })))

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedSkills(skills)
        }
      })
    }, { threshold: 0.5 })

    const element = document.getElementById('skills-page-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main className="pt-20">
        <section id="skills-page-section" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <p className="subtitle-text mb-4">Skills</p>
              <h1 className="title-text mb-6">Explore the Core Skills Behind My Work.</h1>
              <p className="paragraph-text text-secondary-text max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {animatedSkills.map((skill, index) => (
                <div key={index} className="bg-dark-bg border border-gray-800 rounded-lg p-6 hover:border-accent transition-colors">
                  <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-4 object-contain" />
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="title-text text-xl">{skill.name}</h3>
                    <span className="subtitle-text">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Skills

