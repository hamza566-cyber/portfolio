import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "My Inspiring Journey from Beginner to Professional Web Developer.",
      date: "November 6, 2025",
      excerpt: "I started with basic HTML and CSS, and step by step became a professional developer.…",
      image: "/portfolio/imajes/imgi_23_blog-2.webp",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Creative Design Ideas That Make Websites Unique and User Friendly.",
      date: "November 6, 2025",
      excerpt: "A website's success depends on smart design and usability. I share creative UI/UX ideas that…",
      image: "/portfolio/imajes/imgi_24_Blog-3.webp",
      category: "Design"
    },
    {
      id: 3,
      title: "Freelancing Freedom and Challenges Every New Developer Must Face.",
      date: "November 6, 2025",
      excerpt: "Freelancing gives freedom and flexibility, but demands discipline. I share real experiences on managing time,…",
      image: "/portfolio/imajes/imgi_25_Blog-4.webp",
      category: "Freelancing"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="subtitle-text mb-4">Blog</p>
          <h2 className="title-text mb-6">Explore My Creative Journey.</h2>
          <p className="paragraph-text text-secondary-text max-w-2xl mx-auto">
            Discover insights, ideas, and experiences that shape my creative projects and journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-dark-bg border border-gray-800 rounded-lg overflow-hidden hover:border-accent transition-colors">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="subtitle-text mb-2">{post.category}</p>
                <p className="subtitle-text text-sm mb-4">{post.date}</p>
                <h3 className="title-text text-xl mb-4">{post.title}</h3>
                <p className="subtitle-text mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-accent hover:text-yellow-400 transition-colors subtitle-text font-semibold"
                >
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-block bg-accent text-dark-bg font-poppins font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog

