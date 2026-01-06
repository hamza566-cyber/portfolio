import Header from '../components/Header'
import Footer from '../components/Footer'
import ServicesSection from '../components/Services'
import FAQs from '../components/FAQs'
import Testimonials from '../components/Testimonials'

const Services = () => {
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
              Services
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/80 font-poppins text-lg">
              <span>Home</span>
              <span>»</span>
              <span>Services</span>
            </div>
          </div>
        </section>

        {/* Services Section - 6 Services */}
        <ServicesSection />

        {/* FAQs Section */}
        <FAQs />

        {/* Client Review Section */}
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default Services
