const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden w-full" style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-gray-900/50 to-dark-bg opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,194,12,0.1),transparent_50%)]"></div>
      
      <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-4">
            <p className="font-unbounded text-[24px] text-[#C7C7C7] mb-2">I'm</p>
            <h1 
              className="font-unbounded text-white mb-2 font-bold leading-tight whitespace-nowrap"
              style={{
                fontSize: '42px',
                lineHeight: '1.2em'
              }}
            >
              Hamza Parvaiz
            </h1>
            <h2 
              className="font-unbounded text-accent mb-6 font-bold leading-tight"
              style={{
                fontSize: '38px',
                lineHeight: '1.3em',
                maxWidth: '100%'
              }}
            >
              Software Engineer | Web & Mobile Apps
            </h2>
            <p className="font-poppins text-[18px] text-[#C7C7C7] mb-8 max-w-md">
              I'm Hamza Parvaiz, creating full-stack web and mobile applications designed for real-world business workflows.
            </p>
            
            {/* Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <a 
                href="https://wa.me/923368367395?text=I%20want%20help%20from%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-dark-bg font-poppins text-[18px] font-semibold px-6 py-3 rounded-full hover:bg-black hover:border-2 hover:border-accent hover:text-accent transition-colors flex items-center gap-2 border-2 border-transparent group"
              >
                <svg className="w-5 h-5 text-dark-bg group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Hire Me Now
              </a>
              <button className="w-12 h-12 rounded-full border-2 border-accent bg-transparent flex items-center justify-center hover:bg-black hover:border-accent transition-colors animate-pulse-play">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </button>
            </div>
            
            {/* LinkedIn Link */}
            <div className="flex items-center gap-2 mb-8">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              <a 
                href="https://www.linkedin.com/in/hamza-parvaiz-541472203/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-poppins text-white hover:text-accent transition-colors"
                style={{ fontSize: '16px' }}
              >
                linkedin.com/in/hamza-parvaiz
              </a>
            </div>
          </div>

          {/* Center Column - Image */}
          <div className="lg:col-span-4 flex justify-center items-center relative">
            <div className="relative">
              <img 
                src="/portfolio/imajes/Me.png" 
                alt="Hamza Parvaiz" 
                className="relative z-10 rounded-lg"
                style={{
                  width: '380px',
                  height: '480px',
                  maxWidth: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
              />
              {/* Small filled circular dots of different sizes */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-accent rounded-full opacity-60"></div>
              <div className="absolute top-16 right-12 w-2 h-2 bg-accent rounded-full opacity-50"></div>
              <div className="absolute top-4 right-16 w-4 h-4 bg-accent rounded-full opacity-70"></div>
            </div>
          </div>

          {/* Right Column - Specialized In */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              <p className="font-poppins text-[18px] text-white">Specialized In</p>
            </div>
            <h3 className="font-unbounded text-2xl text-white mb-4 font-bold">
              I build web and mobile apps that help products scale and grow.
            </h3>
            <p className="font-poppins text-[18px] text-white mb-6">
              Building web and mobile apps that help brands grow.
            </p>
            <a 
              href="#about" 
              className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors mb-8"
            >
              <span className="font-poppins text-[18px] font-bold">Download CV</span>
              <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-dark-bg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </a>
            <div>
              <p className="font-poppins text-[18px] text-white mb-4">Follow Me:</p>
              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/923368367395?text=I%20want%20help%20from%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5 text-dark-bg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                {/* GitHub */}
                <a 
                  href="https://github.com/hamza566-cyber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5 text-dark-bg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/hamza-parvaiz-541472203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5 text-dark-bg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/hamza_parvaiz_7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5 text-dark-bg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* Upwork */}
                <a 
                  href="https://www.upwork.com/freelancers/~010aac2f9733b387cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5 text-dark-bg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.285 5.281 5.285 2.913 0 5.283-2.371 5.283-5.285v-1.569c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
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

export default Hero
