import { useState } from 'react'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const service = formData.get('service') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    try {
      // Using FormSubmit - free service that sends emails directly
      const response = await fetch('https://formsubmit.co/ajax/hamzaparvaiz200227@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name || 'Not provided',
          email: email || 'Not provided',
          service: service || 'Not specified',
          subject: subject || 'Contact Form Submission',
          message: message || 'No message provided',
          _subject: `Portfolio Contact: ${subject || 'New Message'}`,
          _template: 'box'
        })
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        form.reset()
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
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
      <div className="w-full px-8 lg:px-16 xl:px-24 mx-auto relative z-10" style={{ maxWidth: '1280px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Form */}
          <div 
            className="flex flex-col"
            style={{
              backgroundColor: 'rgb(22, 22, 22)',
              borderRadius: '20px',
              padding: '40px',
              gap: '24px'
            }}
          >
            <h3 
              className="font-unbounded"
              style={{
                fontSize: '32px',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: '1.2em'
              }}
            >
              Connect With <span style={{ color: '#FFC20C' }}>Us.</span>
            </h3>
            
            <form 
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full font-poppins px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    borderRadius: '12px'
                  }}
                />
              </div>

              {/* Email Address */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full font-poppins px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    borderRadius: '12px'
                  }}
                />
              </div>

              {/* Select Service */}
              <div>
                <select
                  name="service"
                  className="w-full font-poppins px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all appearance-none"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    borderRadius: '12px',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23FFFFFF\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '3rem'
                  }}
                >
                  <option value="" style={{ backgroundColor: '#161616', color: '#FFFFFF' }}>Select Service</option>
                  <option value="App Development" style={{ backgroundColor: '#161616', color: '#FFFFFF' }}>App Development</option>
                  <option value="Full Stack Development" style={{ backgroundColor: '#161616', color: '#FFFFFF' }}>Full Stack Development</option>
                  <option value="Website Development" style={{ backgroundColor: '#161616', color: '#FFFFFF' }}>Website Development</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full font-poppins px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    borderRadius: '12px'
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Write Your Message"
                  rows={5}
                  className="w-full font-poppins px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    borderRadius: '12px'
                  }}
                ></textarea>
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-poppins font-semibold px-8 py-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: isSubmitting ? '#666666' : '#9DE600',
                  color: '#000000',
                  fontSize: '16px',
                  borderRadius: '50px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = '#000000'
                    e.currentTarget.style.border = '2px solid #9DE600'
                    e.currentTarget.style.color = '#9DE600'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = '#9DE600'
                    e.currentTarget.style.border = '2px solid transparent'
                    e.currentTarget.style.color = '#000000'
                  }
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 font-poppins text-sm mt-2">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 font-poppins text-sm mt-2">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div 
            className="flex flex-col"
            style={{
              backgroundColor: 'rgb(22, 22, 22)',
              borderRadius: '20px',
              padding: '40px',
              gap: '16px',
              minWidth: '0',
              overflow: 'visible'
            }}
          >
            {/* Contact Label */}
            <div className="flex items-center justify-center gap-4">
              <span style={{ color: '#FFC20C', fontSize: '16px' }}>—</span>
              <p 
                className="font-poppins uppercase tracking-wider"
                style={{
                  color: '#FFC20C',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '2px'
                }}
              >
                Contact Us
              </p>
              <span style={{ color: '#FFC20C', fontSize: '16px' }}>—</span>
            </div>

            {/* Main Heading */}
            <h2 
              className="font-unbounded"
              style={{
                fontSize: '38px',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: '1.2em',
                letterSpacing: '1px'
              }}
            >
              Get In Touch <span style={{ color: '#FFC20C' }}>With Me.</span>
            </h2>

            {/* Description */}
            <p 
              className="font-poppins"
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: '#FFFFFF',
                lineHeight: '1.5em'
              }}
            >
              Have a project or technical question? Feel free to reach out anytime — I'm happy to discuss web and mobile solutions directly.
            </p>

            {/* Value Section */}
            <div>
              <h4 
                className="font-unbounded mb-3"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '12px'
                }}
              >
                What I Offer in Consultation
              </h4>
              <ul className="space-y-2">
                {[
                  "Clear planning for web and mobile applications",
                  "Analysis of project requirements and scope",
                  "Expert guidance on full-stack solutions",
                  "Reliable support for live projects"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="w-4 h-4 mr-2 mt-1 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      style={{ color: '#9DE600' }}
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span 
                      className="font-poppins"
                      style={{
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#FFFFFF',
                        lineHeight: '1.4em'
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect With Me - Left Aligned */}
            <div style={{ marginTop: '24px' }}>
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: '#9DE600'
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#000000' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 
                  className="font-unbounded whitespace-nowrap"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#FFFFFF'
                  }}
                >
                  Connect With Me
                </h4>
              </div>
              <div className="flex flex-col gap-1 ml-11">
                <a 
                  href="https://wa.me/923368367395?text=I%20want%20help%20from%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins hover:text-accent transition-colors"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#C7C7C7',
                    lineHeight: '1.4em',
                    textDecoration: 'none'
                  }}
                >
                  Phone: +92 3368367395
                </a>
                <a 
                  href="mailto:hamzaparvaiz200227@gmail.com"
                  className="font-poppins hover:text-accent transition-colors"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#9DE600',
                    lineHeight: '1.4em',
                    textDecoration: 'none'
                  }}
                >
                  Email: hamzaparvaiz200227@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
