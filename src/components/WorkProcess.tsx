const WorkProcess = () => {
  const processes = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Understanding goals, requirements, and system needs before starting development."
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description: "Defining architecture, tools, and timelines to ensure smooth execution."
    },
    {
      step: "03",
      title: "Build & Implementation",
      description: "Developing features, APIs, and interfaces based on the defined plan."
    },
    {
      step: "04",
      title: "Launch & Delivery",
      description: "Deploying the application live with proper server and domain setup."
    },
    {
      step: "05",
      title: "Testing & Review",
      description: "Testing functionality, fixing issues, and refining performance."
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Providing updates, fixes, and ongoing support for live systems."
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
        paddingLeft: '20px',
        paddingRight: '20px',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 30, 0, 0.5))'
      }}
    >
      <div className="w-full px-8 lg:px-16 xl:px-24 mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Work Process Label with Yellow Lines */}
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
              Work Process
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
            Step-by-Step Process Behind Every <span style={{ color: '#9DE600' }}>Solid Project.</span>
          </h2>

          {/* Description */}
          <p 
            className="font-poppins max-w-2xl mx-auto"
            style={{
              fontSize: '18px',
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: '1.6em'
            }}
          >
            A clear and structured process helps turn ideas into stable, working digital solutions.
          </p>
        </div>

        {/* Process Steps Grid with Central Circle */}
        <div className="relative">
          {/* Grid Container */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            style={{
              gap: '50px',
              rowGap: '50px',
              columnGap: '40px',
              position: 'relative'
            }}
          >
            {/* Step 01 - Top Left */}
            <div 
              className="relative rounded-lg p-5"
              style={{
                backgroundColor: 'rgba(0, 50, 0, 0.6)',
                border: '1px solid rgba(157, 230, 0, 0.3)',
                boxShadow: '0 0 20px rgba(157, 230, 0, 0.2)',
                borderRadius: '28px',
                minHeight: '140px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                width: '100%'
              }}
            >
              <div 
                className="font-unbounded"
                style={{
                  fontSize: '56px',
                  fontWeight: 600,
                  color: 'transparent',
                  WebkitTextStroke: '2px #FFFFFF',
                  lineHeight: '1em',
                  flexShrink: 0
                }}
              >
                {processes[0].step}
              </div>
              <div className="flex-1">
                <h3 
                  className="font-unbounded mb-3"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: '1.3em',
                    marginBottom: '8px'
                  }}
                >
                  {processes[0].title}
                </h3>
                <p 
                  className="font-poppins"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: '1.5em'
                  }}
                >
                  {processes[0].description}
                </p>
              </div>
            </div>

            {/* Step 02 - Top Right */}
            <div 
              className="relative rounded-lg p-5"
              style={{
                backgroundColor: 'rgba(0, 50, 0, 0.6)',
                border: '1px solid rgba(157, 230, 0, 0.3)',
                boxShadow: '0 0 20px rgba(157, 230, 0, 0.2)',
                borderRadius: '28px',
                minHeight: '140px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                width: '100%'
              }}
            >
              <div 
                className="font-unbounded"
                style={{
                  fontSize: '56px',
                  fontWeight: 600,
                  color: 'transparent',
                  WebkitTextStroke: '2px #FFFFFF',
                  lineHeight: '1em',
                  flexShrink: 0
                }}
              >
                {processes[1].step}
              </div>
              <div className="flex-1">
                <h3 
                  className="font-unbounded mb-3"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: '1.3em',
                    marginBottom: '8px'
                  }}
                >
                  {processes[1].title}
                </h3>
                <p 
                  className="font-poppins"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: '1.5em'
                  }}
                >
                  {processes[1].description}
                </p>
              </div>
            </div>

            {/* Step 03 - Middle Left */}
            <div 
              className="relative rounded-lg p-5"
              style={{
                backgroundColor: 'rgba(0, 50, 0, 0.6)',
                border: '1px solid rgba(157, 230, 0, 0.3)',
                boxShadow: '0 0 20px rgba(157, 230, 0, 0.2)',
                borderRadius: '28px',
                minHeight: '140px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                width: '100%',
                marginRight: '120px',
                marginLeft: '-40px',
                transform: 'translateX(-20px)'
              }}
            >
              <div 
                className="font-unbounded"
                style={{
                  fontSize: '56px',
                  fontWeight: 600,
                  color: 'transparent',
                  WebkitTextStroke: '2px #FFFFFF',
                  lineHeight: '1em',
                  flexShrink: 0
                }}
              >
                {processes[2].step}
              </div>
              <div className="flex-1">
                <h3 
                  className="font-unbounded mb-3"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: '1.3em',
                    marginBottom: '8px'
                  }}
                >
                  {processes[2].title}
                </h3>
                <p 
                  className="font-poppins"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: '1.5em'
                  }}
                >
                  {processes[2].description}
                </p>
              </div>
            </div>

            {/* Central Circle - Only visible on desktop, positioned between steps 03 and 04 */}
            <div 
              className="hidden md:flex absolute items-center justify-center"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '130px',
                height: '130px',
                zIndex: 10,
                pointerEvents: 'none'
              }}
            >
              {/* Circular Text Path */}
              <svg 
                width="130" 
                height="130" 
                viewBox="0 0 130 130"
                style={{ position: 'absolute' }}
              >
                <defs>
                  <path 
                    id="circle-path-work"
                    d="M 65,65 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
                  />
                </defs>
                {/* Outer Circle */}
                <circle 
                  cx="65" 
                  cy="65" 
                  r="52" 
                  fill="#9DE600"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(157, 230, 0, 0.5))' }}
                />
                {/* Circular Text - White */}
                <text 
                  fill="#FFFFFF"
                  fontSize="9"
                  fontWeight="600"
                  fontFamily="Poppins, sans-serif"
                  letterSpacing="1"
                >
                  <textPath href="#circle-path-work" startOffset="0%">
                    WORK PROCESS. WORK PROCESS.
                  </textPath>
                </text>
                {/* Inner Circle with Arrow */}
                <circle 
                  cx="65" 
                  cy="65" 
                  r="26" 
                  fill="#0A5A0A"
                />
                {/* Arrow Icon - White */}
                <g transform="translate(65, 65) rotate(45)">
                  <path 
                    d="M -10 0 L 10 0 M 10 0 L 2.5 -7.5 M 10 0 L 2.5 7.5"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </g>
              </svg>
            </div>

            {/* Step 04 - Middle Right */}
            <div 
              className="relative rounded-lg p-5"
              style={{
                backgroundColor: 'rgba(0, 50, 0, 0.6)',
                border: '1px solid rgba(157, 230, 0, 0.3)',
                boxShadow: '0 0 20px rgba(157, 230, 0, 0.2)',
                borderRadius: '28px',
                minHeight: '140px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                marginLeft: '25px',
                width: '100%',
                transform: 'translateX(40px)'
              }}
            >
              <div 
                className="font-unbounded"
                style={{
                  fontSize: '56px',
                  fontWeight: 600,
                  color: 'transparent',
                  WebkitTextStroke: '2px #FFFFFF',
                  lineHeight: '1em',
                  flexShrink: 0
                }}
              >
                {processes[3].step}
              </div>
              <div className="flex-1">
                <h3 
                  className="font-unbounded mb-3"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: '1.3em',
                    marginBottom: '8px'
                  }}
                >
                  {processes[3].title}
                </h3>
                <p 
                  className="font-poppins"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: '1.5em'
                  }}
                >
                  {processes[3].description}
                </p>
              </div>
            </div>

            {/* Step 05 - Bottom Left */}
            <div 
              className="relative rounded-lg p-5"
              style={{
                backgroundColor: 'rgba(0, 50, 0, 0.6)',
                border: '1px solid rgba(157, 230, 0, 0.3)',
                boxShadow: '0 0 20px rgba(157, 230, 0, 0.2)',
                borderRadius: '28px',
                minHeight: '140px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                width: '100%'
              }}
            >
              <div 
                className="font-unbounded"
                style={{
                  fontSize: '56px',
                  fontWeight: 600,
                  color: 'transparent',
                  WebkitTextStroke: '2px #FFFFFF',
                  lineHeight: '1em',
                  flexShrink: 0
                }}
              >
                {processes[4].step}
              </div>
              <div className="flex-1">
                <h3 
                  className="font-unbounded mb-3"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: '1.3em',
                    marginBottom: '8px'
                  }}
                >
                  {processes[4].title}
                </h3>
                <p 
                  className="font-poppins"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: '1.5em'
                  }}
                >
                  {processes[4].description}
                </p>
              </div>
            </div>

            {/* Step 06 - Bottom Right */}
            <div 
              className="relative rounded-lg p-5"
              style={{
                backgroundColor: 'rgba(0, 50, 0, 0.6)',
                border: '1px solid rgba(157, 230, 0, 0.3)',
                boxShadow: '0 0 20px rgba(157, 230, 0, 0.2)',
                borderRadius: '28px',
                minHeight: '140px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                width: '100%'
              }}
            >
              <div 
                className="font-unbounded"
                style={{
                  fontSize: '56px',
                  fontWeight: 600,
                  color: 'transparent',
                  WebkitTextStroke: '2px #FFFFFF',
                  lineHeight: '1em',
                  flexShrink: 0
                }}
              >
                {processes[5].step}
              </div>
              <div className="flex-1">
                <h3 
                  className="font-unbounded mb-3"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: '1.3em',
                    marginBottom: '8px'
                  }}
                >
                  {processes[5].title}
                </h3>
                <p 
                  className="font-poppins"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: '1.5em'
                  }}
                >
                  {processes[5].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
