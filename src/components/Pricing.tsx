const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: 50,
      description: "A simple plan for small projects and quick setups.",
      features: [
        "Single Page Website",
        "Minor Updates & Fixes",
        "Basic Deployment Setup",
        "Email & Domain Support"
      ],
      icon: "fas fa-star"
    },
    {
      name: "Standard Plan",
      price: 150,
      description: "Ideal for growing products and business websites.",
      features: [
        "3–5 Page Website or Web App",
        "Feature Updates & Improvements",
        "Responsive Layout",
        "Live Deployment & Testing"
      ],
      icon: "fas fa-bolt"
    },
    {
      name: "Premium Plan",
      price: 300,
      description: "Best for full-scale products and long-term development.",
      features: [
        "Full Stack Web Application",
        "Custom Features & APIs",
        "Performance & Security Setup",
        "Priority Support & Maintenance"
      ],
      icon: "fas fa-gem"
    }
  ]

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
          {/* Pricing Label with Yellow Lines */}
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
              Pricing
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
            Flexible Plans for Real <span style={{ color: '#FFC20C' }}>Projects.</span>
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
            Simple and clear pricing built to support product development and long-term growth.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className="relative rounded-lg p-8"
              style={{
                backgroundColor: 'rgba(0, 50, 0, 0.6)',
                border: '1px solid rgba(157, 230, 0, 0.3)',
                boxShadow: '0 0 20px rgba(157, 230, 0, 0.2)',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(157, 230, 0, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(157, 230, 0, 0.2)'
              }}
            >
              {/* Icon */}
              <div className="mb-6">
                <i 
                  className={`${plan.icon} text-4xl`}
                  style={{ 
                    WebkitTextStroke: '2px #9DE600',
                    color: 'transparent'
                  }}
                ></i>
              </div>

              {/* Title */}
              <h3 
                className="font-unbounded mb-4"
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: '1.3em',
                  marginBottom: '16px'
                }}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p 
                className="font-poppins mb-6"
                style={{
                  fontSize: '18px',
                  fontWeight: 400,
                  color: '#C7C7C7',
                  lineHeight: '1.5em',
                  marginBottom: '24px'
                }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span 
                  className="font-unbounded"
                  style={{
                    fontSize: '48px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: '1em'
                  }}
                >
                  ${plan.price}
                </span>
                <span 
                  className="font-poppins ml-2"
                  style={{
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#C7C7C7'
                  }}
                >
                  /per month
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="w-5 h-5 mr-3 mt-1 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      style={{ color: '#9DE600' }}
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span 
                      className="font-poppins"
                      style={{
                        fontSize: '18px',
                        fontWeight: 400,
                        color: '#FFFFFF',
                        lineHeight: '1.5em'
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Get Started Button */}
              <button 
                className="w-full font-poppins font-semibold px-6 py-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: '#9DE600',
                  color: '#000000',
                  fontSize: '18px',
                  fontWeight: 500,
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
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
