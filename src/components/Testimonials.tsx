const Testimonials = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden w-full"
      style={{
        width: '100%',
        marginLeft: 0,
        marginRight: 0,
        paddingTop: '80px',
        paddingBottom: '80px',
        background: 'linear-gradient(to right, rgba(0, 50, 0, 0.3), rgba(0, 0, 0, 1))'
      }}
    >
      <div className="w-full px-8 lg:px-16 xl:px-24 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Image Card */}
          <div className="hidden lg:block">
            <div 
              className="relative rounded-lg overflow-hidden"
              style={{
                borderRadius: '20px',
                minHeight: '500px',
                backgroundImage: 'url(/portfolio/imajes/imgi_23_blog-2.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            >
              {/* Overlay Card */}
              <div 
                className="absolute bottom-6 left-6 rounded-lg p-4"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                    style={{ 
                      backgroundColor: 'rgba(157, 230, 0, 0.2)',
                      borderColor: '#9DE600',
                      color: '#9DE600'
                    }}
                  >
                    <span className="font-poppins font-bold text-xs">AP</span>
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                    style={{ 
                      backgroundColor: 'rgba(157, 230, 0, 0.2)',
                      borderColor: '#9DE600',
                      color: '#9DE600'
                    }}
                  >
                    <span className="font-poppins font-bold text-xs">RD</span>
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                    style={{ 
                      backgroundColor: 'rgba(157, 230, 0, 0.2)',
                      borderColor: '#9DE600',
                      color: '#9DE600'
                    }}
                  >
                    <span className="font-poppins font-bold text-xs">JW</span>
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                    style={{ 
                      backgroundColor: '#9DE600',
                      borderColor: '#9DE600'
                    }}
                  >
                    <span className="text-black font-bold text-sm">+</span>
                  </div>
                </div>
                <p 
                  className="font-poppins font-semibold"
                  style={{
                    fontSize: '18px',
                    color: '#FFFFFF'
                  }}
                >
                  Happy Clients
                </p>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center lg:text-left">
            {/* Client Review Label with Yellow Lines */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
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
                Client Review
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
              Trusted by clients across the <span style={{ color: '#FFC20C' }}>globe.</span>
            </h2>

            {/* Description */}
            <p 
              className="font-poppins mb-6"
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: '#FFFFFF',
                lineHeight: '1.6em',
                marginBottom: '24px'
              }}
            >
              Real feedback from clients who trusted my work to build reliable and effective digital solutions.
            </p>

            {/* Stars */}
            <div className="flex items-center justify-center lg:justify-start gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  style={{ color: '#FFC20C' }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p 
              className="font-poppins mb-8"
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: '#FFFFFF',
                lineHeight: '1.6em',
                marginBottom: '32px'
              }}
            >
              Honest words from satisfied clients reflecting quality, consistency, and commitment behind every successful project delivered.
            </p>

            {/* Profile */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div 
                className="w-16 h-16 rounded-full bg-gray-600"
                style={{
                  backgroundImage: 'url(/portfolio/imajes/imgi_23_blog-2.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div>
                <p 
                  className="font-unbounded font-semibold"
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    marginBottom: '4px'
                  }}
                >
                  James Wilson
                </p>
                <p 
                  className="font-poppins"
                  style={{
                    fontSize: '16px',
                    color: '#C7C7C7'
                  }}
                >
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="hidden lg:block">
            <div 
              className="relative rounded-lg overflow-hidden"
              style={{
                borderRadius: '20px',
                minHeight: '500px',
                backgroundImage: 'url(/portfolio/imajes/imgi_24_Blog-3.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            >
              {/* Overlay Card */}
              <div 
                className="absolute bottom-6 left-6 rounded-lg p-4"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#4285F4' }}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span 
                    className="font-poppins font-semibold"
                    style={{
                      fontSize: '18px',
                      color: '#FFFFFF'
                    }}
                  >
                    Google
                  </span>
                </div>
                <p 
                  className="font-poppins"
                  style={{
                    fontSize: '16px',
                    color: '#C7C7C7'
                  }}
                >
                  1.5k Ratings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Reviews Section Below */}
        <div 
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          style={{
            marginTop: '80px'
          }}
        >
          {/* Left Side - Text Content */}
          <div>
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
              Genuine Google Reviews from Satisfied Portfolio Clients.
            </h2>
            <p 
              className="font-poppins mb-6"
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: '#FFFFFF',
                lineHeight: '1.6em',
                marginBottom: '24px'
              }}
            >
              Working with Hamza Parvaiz was an excellent experience! Professional, reliable, and solution-focused.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <span 
                className="font-unbounded font-bold"
                style={{
                  fontSize: '48px',
                  color: '#FFFFFF'
                }}
              >
                5.0
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-8 h-8" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    style={{ color: '#FFC20C' }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button 
                className="font-poppins font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
                style={{
                  backgroundColor: '#9DE600',
                  color: '#000000',
                  fontSize: '18px',
                  borderRadius: '50px'
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read All Reviews
              </button>
              <button 
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: '#9DE600',
                  color: '#000000'
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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:block">
            <div 
              className="relative rounded-lg overflow-hidden"
              style={{
                borderRadius: '20px',
                minHeight: '400px',
                backgroundImage: 'url(/portfolio/imajes/imgi_25_Blog-4.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
