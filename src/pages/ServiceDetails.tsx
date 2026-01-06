import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ServiceDetails = () => {
  const [selectedService, setSelectedService] = useState(1) // Default to Backend Development (Custom Website Development)

  const serviceList = [
    { name: "Frontend Development", serviceId: 2 },
    { name: "Backend Development", serviceId: 1 },
    { name: "Full-Stack Development", serviceId: 3 },
    { name: "Performance Optimization", serviceId: 4 },
    { name: "Bug Fixing & Maintenance", serviceId: 5 }
  ]


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
              Service Details
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/80 font-poppins text-lg">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span>»</span>
              <span>Service Details</span>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 w-full bg-dark-bg">
          <div className="w-full px-8 lg:px-16 xl:px-24 mx-auto" style={{ maxWidth: '1280px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 justify-center">
              {/* Left Sidebar */}
              <div className="lg:col-span-1 space-y-6" style={{ maxWidth: '100%', minWidth: '350px' }}>
                {/* Services List */}
                <div 
                  className="rounded-[20px] flex flex-col"
                  style={{
                    backgroundColor: 'rgb(22, 22, 22)',
                    borderRadius: '20px',
                    padding: '30px',
                    gap: '20px',
                    width: '100%',
                    minWidth: '350px'
                  }}
                >
                  <h4 className="font-unbounded text-xl text-white font-semibold mb-0">Services</h4>
                  {/* Divider line */}
                  <div className="w-full h-px bg-gray-700 my-2"></div>
                  <div className="flex flex-col gap-3">
                    {serviceList.map((service, index) => {
                      const isSelected = selectedService === service.serviceId
                      return (
                        <button
                          key={index}
                          onClick={() => setSelectedService(service.serviceId)}
                          className="text-left font-poppins transition-all duration-300 whitespace-nowrap"
                          style={{
                            backgroundColor: isSelected ? '#9DE600' : 'rgb(22, 22, 22)',
                            color: isSelected ? '#000000' : '#9DE600',
                            border: isSelected ? 'none' : '1px solid #9DE600',
                            fontWeight: isSelected ? 600 : 400,
                            fontSize: '18px',
                            padding: '14px 20px',
                            borderRadius: '8px',
                            width: '100%',
                            textAlign: 'left',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {service.name}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Get Started Section */}
                <div 
                  className="rounded-[20px] flex flex-col"
                  style={{
                    backgroundColor: 'rgb(22, 22, 22)',
                    borderRadius: '20px',
                    padding: '30px',
                    gap: '20px',
                    width: '100%',
                    minWidth: '350px'
                  }}
                >
                  <h4 className="font-unbounded text-xl text-white mb-0 font-semibold">Get Started</h4>
                  {/* Divider line */}
                  <div className="w-full h-px bg-gray-700 my-2"></div>
                  <p 
                    className="font-poppins text-white/80 mb-4"
                    style={{ fontSize: '18px', marginBottom: '16px' }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    <li className="flex items-center gap-3">
                      <span className="text-accent" style={{ fontSize: '18px' }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      <span className="font-poppins text-white/80" style={{ fontSize: '18px' }}>+880 12345 6789</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent" style={{ fontSize: '18px' }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span className="font-poppins text-white/80" style={{ fontSize: '18px' }}>info@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-accent" style={{ fontSize: '18px' }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <span className="font-poppins text-white/80" style={{ fontSize: '18px' }}>Dhaka, Bangladesh</span>
                    </li>
                  </ul>
                </div>

                {/* Have any question Section */}
                <div 
                  className="overflow-hidden relative"
                  style={{
                    backgroundImage: `url(/portfolio/imajes/${encodeURI('backjround imaje.webp')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '300px',
                    borderRadius: '20px'
                  }}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="relative z-10 p-6">
                    <h2 className="font-unbounded text-xl text-white mb-2 font-semibold">Have any question?</h2>
                    <p 
                      className="font-poppins text-white/80 mb-6"
                      style={{ fontSize: '18px' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Link
                      to="/contact"
                      className="bg-accent text-dark-bg font-poppins text-[18px] font-semibold px-6 py-3 rounded-full hover:bg-black hover:border-2 hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2 border-2 border-transparent group"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      Contact Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-3 space-y-8" style={{ maxWidth: '709px', marginLeft: 'auto' }}>
                {/* Top Image */}
                <div 
                  className="w-full overflow-hidden"
                  style={{
                    borderRadius: '20px',
                    width: '100%',
                    maxWidth: '709px',
                    height: '473px'
                  }}
                >
                  <img 
                    src="/portfolio/imajes/service.jpg" 
                    alt="Service"
                    className="w-full h-full object-cover"
                    style={{
                      borderRadius: '20px',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Custom Website Development */}
                <div className="space-y-4" style={{ width: '100%', maxWidth: '709px' }}>
                  <h2 
                    className="font-unbounded text-white font-bold"
                    style={{
                      fontSize: '36px'
                    }}
                  >
                    Custom Website Development.
                  </h2>
                  <p 
                    className="font-poppins text-white/80 leading-relaxed"
                    style={{
                      fontSize: '18px',
                      maxWidth: '709px'
                    }}
                  >
                    I build modern, fast, and fully customized websites tailored to your unique brand needs, ensuring a powerful digital presence and smooth user experience.
                  </p>
                </div>

                {/* Responsive Frontend Development */}
                <div className="space-y-4" style={{ width: '100%', maxWidth: '709px' }}>
                  <h2 
                    className="font-unbounded text-white font-bold"
                    style={{
                      fontSize: '24px'
                    }}
                  >
                    Responsive Frontend Development
                  </h2>
                  <p 
                    className="font-poppins text-white/80 leading-relaxed"
                    style={{
                      fontSize: '18px',
                      maxWidth: '709px'
                    }}
                  >
                    I develop clean, responsive, and performance-optimized frontend layouts that work seamlessly across all devices, ensuring consistent design and better user engagement.
                  </p>
                </div>

                {/* Web Application Solutions */}
                <div className="space-y-4" style={{ width: '100%', maxWidth: '709px' }}>
                  <h2 
                    className="font-unbounded text-white font-bold"
                    style={{
                      fontSize: '24px'
                    }}
                  >
                    Web Application Solutions.
                  </h2>
                  <p 
                    className="font-poppins text-white/80 leading-relaxed"
                    style={{
                      fontSize: '18px',
                      maxWidth: '709px'
                    }}
                  >
                    I create scalable, secure, and feature-rich web applications designed to support business workflow, automate processes, and deliver long-term digital efficiency.
                  </p>
                </div>

                {/* Bottom Section with Text and Services List */}
                <div className="space-y-4" style={{ width: '100%', maxWidth: '709px' }}>
                  <p 
                    className="font-poppins text-white/80"
                    style={{ fontSize: '18px', maxWidth: '709px' }}
                  >
                    I optimize websites for speed, security, and performance, providing updates and maintenance.
                  </p>
                  <ul className="space-y-3 list-none p-0 m-0" style={{ maxWidth: '709px' }}>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                      </svg>
                      <span className="font-poppins text-white/80" style={{ fontSize: '18px' }}>Responsive Frontend Development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                      </svg>
                      <span className="font-poppins text-white/80" style={{ fontSize: '18px' }}>Custom Website Development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                      </svg>
                      <span className="font-poppins text-white/80" style={{ fontSize: '18px' }}>Creative UI/UX Design</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                      </svg>
                      <span className="font-poppins text-white/80" style={{ fontSize: '18px' }}>Full-Stack Web Development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                      </svg>
                      <span className="font-poppins text-white/80" style={{ fontSize: '18px' }}>Website Optimization & Maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ServiceDetails
