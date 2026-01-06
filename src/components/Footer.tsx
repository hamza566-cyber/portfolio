
const Footer = () => {
  return (
    <footer 
      className="border-t w-full"
      style={{
        width: '100%',
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: '#000000',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '60px',
        paddingBottom: '40px'
      }}
    >
      <div className="w-full px-8 lg:px-16 xl:px-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded"
                style={{
                  background: 'linear-gradient(135deg, #FFC20C 0%, #9DE600 100%)'
                }}
              ></div>
              <span 
                className="font-unbounded font-bold"
                style={{
                  fontSize: '24px',
                  color: '#FFFFFF'
                }}
              >
                HAMZA
              </span>
            </div>
            <p 
              className="font-poppins mb-6"
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: '#C7C7C7',
                lineHeight: '1.6em',
                marginBottom: '24px'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/923368367395?text=I%20want%20help%20from%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: '#9DE600',
                  color: '#000000'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFC20C'
                  e.currentTarget.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#9DE600'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a 
                href="https://github.com/hamza566-cyber"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: '#9DE600',
                  color: '#000000'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFC20C'
                  e.currentTarget.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#9DE600'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/hamza-parvaiz-541472203/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: '#9DE600',
                  color: '#000000'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFC20C'
                  e.currentTarget.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#9DE600'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/hamza_parvaiz_7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: '#9DE600',
                  color: '#000000'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFC20C'
                  e.currentTarget.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#9DE600'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Upwork */}
              <a 
                href="https://www.upwork.com/freelancers/~010aac2f9733b387cc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: '#9DE600',
                  color: '#000000'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFC20C'
                  e.currentTarget.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#9DE600'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.285 5.281 5.285 2.913 0 5.283-2.371 5.283-5.285v-1.569c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 
              className="font-unbounded mb-6"
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '12px'
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Me', 'Services', 'Projects', 'Contact'].map((link) => {
                const href = link === 'Home' ? '/portfolio/' : `/portfolio/${link.toLowerCase().replace(' ', '-')}`
                return (
                  <li key={link}>
                    <a 
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-poppins flex items-center gap-2 transition-colors"
                      style={{
                        fontSize: '18px',
                        fontWeight: 400,
                        color: '#C7C7C7'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#9DE600'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#C7C7C7'
                      }}
                    >
                      <span style={{ color: '#FFFFFF' }}>»</span>
                      {link}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 
              className="font-unbounded mb-6"
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '12px'
              }}
            >
              Contact
            </h4>
            <ul 
              className="space-y-3 font-poppins"
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: '#C7C7C7',
                lineHeight: '1.6em'
              }}
            >
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#9DE600' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="https://wa.me/923368367395?text=I%20want%20help%20from%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  style={{ color: '#C7C7C7', textDecoration: 'none' }}
                >
                  +92 3368367395
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="#9DE600" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a 
                  href="mailto:hamzaparvaiz200227@gmail.com"
                  className="hover:text-accent transition-colors"
                  style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '16px' }}
                >
                  hamzaparvaiz200227@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#9DE600' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Remote — Worldwide
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#9DE600' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <a 
                  href="https://www.linkedin.com/in/hamza-parvaiz-541472203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  style={{ color: '#C7C7C7', textDecoration: 'none' }}
                >
                  linkedin.com/in/hamza-parvaiz
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 
              className="font-unbounded mb-6"
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '12px'
              }}
            >
              Newsletter
            </h4>
            <p 
              className="font-poppins mb-6"
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: '#C7C7C7',
                lineHeight: '1.6em',
                marginBottom: '24px'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 font-poppins px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  fontSize: '18px',
                  borderRadius: '12px'
                }}
              />
              <button
                type="submit"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: '#9DE600',
                  color: '#000000',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFC20C'
                  e.currentTarget.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#9DE600'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Bar */}
        <div 
          className="border-t text-center pt-8"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '32px'
          }}
        >
          <p 
            className="font-poppins"
            style={{
              fontSize: '18px',
              fontWeight: 400,
              color: '#C7C7C7'
            }}
          >
            Copyright © 2025 Hamza Parvaiz. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
