
const About = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Image */}
        <div className="relative">
          {/* Main Group Photo */}
          <div className="relative">
            <img 
              src="/portfolio/imajes/about.png" 
              alt="About" 
              className="rounded-lg w-full"
            />
            {/* 10+ Years Experience Block - Overlapping bottom-left */}
            <div className="absolute bottom-4 left-4 bg-gray-900/95 border border-accent rounded-lg px-6 py-4 backdrop-blur-sm">
              <p className="font-unbounded text-4xl text-white font-bold">10+</p>
              <p className="font-poppins text-base text-white">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div>
          {/* Section Title with Yellow Lines */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="w-12 h-0.5 bg-accent"></div>
            <p className="font-poppins text-lg text-white">About Me</p>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>

          {/* Main Headline - Two lines */}
          <h2 className="font-unbounded text-4xl md:text-5xl text-white mb-6 font-bold">
            Exploring Creativity to Shape a<br />
            <span className="text-accent">Better</span> Future.
          </h2>

          {/* Description Paragraph */}
          <p className="font-poppins text-lg text-white mb-8">
            I turn ideas into strong and meaningful digital work that inspires growth and builds real impact.
          </p>

          {/* Contact Information Card */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="font-poppins text-lg text-white mb-1">Name:</p>
                  <p className="font-poppins text-xl text-white font-semibold">Hamza Parvaiz</p>
                </div>
                <div>
                  <p className="font-poppins text-lg text-white mb-1">Email:</p>
                  <a 
                    href="mailto:hamzaparvaiz200227@gmail.com"
                    className="font-poppins text-base text-white font-normal break-all hover:text-accent transition-colors"
                  >
                    hamzaparvaiz200227@gmail.com
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-poppins text-lg text-white mb-1">Phone:</p>
                  <a 
                    href="https://wa.me/923368367395?text=I%20want%20help%20from%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins text-xl text-white font-semibold hover:text-accent transition-colors"
                  >
                    +92 3368367395
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="font-poppins text-lg text-white">Address:</p>
                  </div>
                  <p className="font-poppins text-xl text-white font-semibold">Remote — Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Read More Button and Profile */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Read More Button - Matching Hero Section Style */}
            <a 
              href="/portfolio/about" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-dark-bg font-poppins text-[18px] font-semibold px-6 py-3 rounded-full hover:bg-black hover:border-2 hover:border-accent hover:text-accent transition-colors flex items-center gap-2 border-2 border-transparent group"
            >
              <svg className="w-5 h-5 text-dark-bg group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Read More
            </a>

            {/* Profile Summary - Circular picture with text */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-accent overflow-hidden flex-shrink-0">
                <img 
                  src="/portfolio/imajes/Me.png" 
                  alt="Hamza Parvaiz" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-poppins text-xl text-white font-bold">Hamza Parvaiz</p>
                <p className="font-poppins text-lg text-white">Software Engineer — Web & Mobile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
