
const GetInTouch = () => {
  return (
    <section 
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'url(/portfolio/imajes/section3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '0',
        paddingRight: '0',
        width: '100%',
        marginLeft: 0,
        marginRight: 0
      }}
    >
      {/* Inner Container with Dark Transparent Overlay */}
      <div 
        className="mx-auto"
        style={{
          width: '85%',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative'
        }}
      >
        {/* Nested Container with Dark Overlay Background */}
        <div 
          className="text-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '60px 40px',
            borderRadius: '0',
            position: 'relative',
            zIndex: 1
          }}
        >
          {/* Heading */}
          <h2 
            className="mb-6"
            style={{
              fontFamily: 'Unbounded, sans-serif',
              fontSize: '44px',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: '1.2em',
              marginBottom: '24px'
            }}
          >
            Let's Build Something Powerful.
          </h2>
          
          {/* Paragraph */}
          <p 
            className="max-w-2xl mx-auto mb-8"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: '1.5em',
              marginBottom: '32px'
            }}
          >
            I focus on building reliable web and mobile solutions that solve real problems and support product growth.
          </p>
          
          {/* Button with Phone Icon */}
          <a 
            href="/portfolio/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
            style={{
              backgroundColor: '#FFC20C',
              color: '#000000',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              padding: '12px 24px',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#000000'
              e.currentTarget.style.border = '2px solid #FFC20C'
              e.currentTarget.style.color = '#FFC20C'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFC20C'
              e.currentTarget.style.border = '2px solid transparent'
              e.currentTarget.style.color = '#000000'
            }}
          >
            {/* Phone Icon */}
            <svg 
              className="w-5 h-5"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ width: '20px', height: '20px' }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            <span>Contact Now</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch

