import { useState } from 'react'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I build full-stack web applications, mobile apps, and handle deployment and cloud setup for production-ready products."
    },
    {
      question: "Do you work with remote clients?",
      answer: "Yes! I specialize in working with global clients from the USA, UK, and other countries remotely."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Timeline depends on the project scope. Small projects may take 1–2 weeks, while larger applications take several months."
    },
    {
      question: "Which technologies do you use?",
      answer: "I work with React, Next.js, Node.js, TypeScript, React Native, Firebase, and cloud deployment tools."
    },
    {
      question: "Can you maintain or update my existing project?",
      answer: "Absolutely. I provide maintenance, feature updates, and production support for ongoing projects."
    },
    {
      question: "How can I get started?",
      answer: "You can contact me via email or LinkedIn. We'll discuss your requirements and plan the project together."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      className="py-20 relative overflow-hidden w-full"
      style={{
        width: '100%',
        marginLeft: 0,
        marginRight: 0,
        paddingTop: '80px',
        paddingBottom: '80px',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 30, 0, 0.5))'
      }}
    >
      <div className="w-full px-8 lg:px-16 xl:px-24 mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* FAQs Label with Yellow Lines */}
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
              FAQs
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
            Your Questions, My Clear and <span style={{ color: '#FFC20C' }}>Honest Answers.</span>
          </h2>

          {/* Description */}
          <p 
            className="font-poppins max-w-2xl mx-auto"
            style={{
              fontSize: '18px',
              fontWeight: 400,
              color: '#C7C7C7',
              lineHeight: '1.6em'
            }}
          >
            Here you'll find answers about my web and mobile development process, deployment, and support for every project I handle.
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="rounded-lg overflow-hidden"
                style={{
                  backgroundColor: 'rgba(0, 50, 0, 0.6)',
                  border: '1px solid rgba(157, 230, 0, 0.3)',
                  borderRadius: '12px'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left transition-colors"
                  style={{
                    backgroundColor: openIndex === index ? 'rgba(157, 230, 0, 0.1)' : 'transparent'
                  }}
                >
                  <span 
                    className="font-unbounded"
                    style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#FFFFFF'
                    }}
                  >
                    {faq.question}
                  </span>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: openIndex === index ? 'transparent' : '#9DE600'
                    }}
                  >
                    {openIndex === index ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#9DE600' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#000000' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 5v14m7-7H5" />
                      </svg>
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p 
                      className="font-poppins"
                      style={{
                        fontSize: '18px',
                        fontWeight: 400,
                        color: '#C7C7C7',
                        lineHeight: '1.6em'
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Contact Card */}
          <div>
            <div 
              className="relative rounded-lg overflow-hidden p-8"
              style={{
                backgroundColor: 'rgba(0, 50, 0, 0.6)',
                border: '1px solid rgba(157, 230, 0, 0.3)',
                borderRadius: '20px',
                minHeight: '500px',
                backgroundImage: 'url(/portfolio/imajes/imgi_23_blog-2.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            >
              {/* Dark Overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                {/* Phone Icon */}
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: '#9DE600'
                  }}
                >
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#000000' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 
                  className="font-unbounded mb-4"
                  style={{
                    fontSize: '32px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: '1.3em',
                    marginBottom: '16px'
                  }}
                >
                  Want to know something? Ask.
                </h3>

                {/* Description */}
                <p 
                  className="font-poppins mb-8"
                  style={{
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#C7C7C7',
                    lineHeight: '1.6em',
                    marginBottom: '32px'
                  }}
                >
                  Curious about my work or services? Reach out anytime here.
                </p>

                {/* Contact Button */}
                <a 
                  href="/portfolio/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2"
                  style={{
                    backgroundColor: '#9DE600',
                    color: '#000000',
                    fontSize: '18px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    display: 'inline-flex'
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Now
                </a>
              </div>
            </div>

            {/* 24/7 Service Card */}
            <div 
              className="mt-6 rounded-lg p-6"
              style={{
                backgroundColor: 'rgba(0, 50, 0, 0.6)',
                border: '1px solid rgba(157, 230, 0, 0.3)',
                borderRadius: '20px'
              }}
            >
              <h4 
                className="font-unbounded mb-2"
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '8px'
                }}
              >
                24/7 Service
              </h4>
              <p 
                className="font-poppins"
                style={{
                  fontSize: '18px',
                  fontWeight: 400,
                  color: '#C7C7C7'
                }}
              >
                Your needs, our promise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs
