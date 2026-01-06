const SpecializedIn = () => {
  const specialties = [
    { name: "UI/UX Design", icon: "🎨" },
    { name: "App Development", icon: "📱" },
    { name: "Graphic Design", icon: "🖼️" },
    { name: "Website Development", icon: "💻" },
    { name: "Digital Marketing", icon: "📈" }
  ]

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="title-text mb-6">Specialized In</h2>
          <p className="paragraph-text text-secondary-text max-w-3xl mx-auto mb-4">
            We are creating digital solutions to promote global brands every day.
          </p>
          <p className="paragraph-text text-white max-w-3xl mx-auto">
            I create websites, effective SEO, and creative graphics that help brands grow.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {specialties.map((specialty) => (
            <div key={specialty.name} className="flex flex-col items-center">
              <div className="text-5xl mb-4">{specialty.icon}</div>
              <p className="subtitle-text text-center">{specialty.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecializedIn

