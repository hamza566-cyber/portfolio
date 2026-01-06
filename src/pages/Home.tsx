import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import GetInTouch from '../components/GetInTouch'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkProcess from '../components/WorkProcess'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FAQs from '../components/FAQs'
import Contact from '../components/Contact'
import AnimatedSection from '../components/AnimatedSection'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnimatedSection direction="fade" delay={100}>
          <About />
        </AnimatedSection>
        <AnimatedSection direction="right" delay={200}>
          <Services limit={3} />
        </AnimatedSection>
        <AnimatedSection direction="left" delay={100}>
          <GetInTouch />
        </AnimatedSection>
        <AnimatedSection direction="fade" delay={200}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection direction="right" delay={100}>
          <Skills />
        </AnimatedSection>
        <AnimatedSection direction="left" delay={200}>
          <WorkProcess />
        </AnimatedSection>
        <AnimatedSection direction="fade" delay={100}>
          <Pricing />
        </AnimatedSection>
        <AnimatedSection direction="right" delay={200}>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection direction="left" delay={100}>
          <FAQs />
        </AnimatedSection>
        <AnimatedSection direction="fade" delay={200}>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}

export default Home

