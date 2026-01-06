import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams, Link } from 'react-router-dom'

const SinglePost = () => {
  const { id } = useParams()
  
  const posts: { [key: string]: { title: string; date: string; category: string; image: string; content: string } } = {
    '1': {
      title: "My Inspiring Journey from Beginner to Professional Web Developer.",
      date: "November 6, 2025",
      category: "Web Development",
      image: "/portfolio/imajes/imgi_23_blog-2.webp",
      content: "I started with basic HTML and CSS, and step by step became a professional developer. The journey wasn't easy, but it was rewarding. Through consistent practice and learning, I gradually built my skills and portfolio."
    },
    '2': {
      title: "Creative Design Ideas That Make Websites Unique and User Friendly.",
      date: "November 6, 2025",
      category: "Design",
      image: "/portfolio/imajes/imgi_24_Blog-3.webp",
      content: "A website's success depends on smart design and usability. I share creative UI/UX ideas that make websites stand out while ensuring they remain user-friendly and accessible to all users."
    },
    '3': {
      title: "Freelancing Freedom and Challenges Every New Developer Must Face.",
      date: "November 6, 2025",
      category: "Freelancing",
      image: "/portfolio/imajes/imgi_25_Blog-4.webp",
      content: "Freelancing gives freedom and flexibility, but demands discipline. I share real experiences on managing time, finding clients, and building a sustainable freelance career in web development."
    }
  }

  const post = posts[id || '1'] || posts['1']

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link to="/blog" className="inline-block mb-8 text-accent hover:text-yellow-400 transition-colors">
              ← Back to Blog
            </Link>
            <p className="subtitle-text mb-2">{post.category}</p>
            <p className="subtitle-text text-sm mb-4">{post.date}</p>
            <h1 className="title-text mb-6">{post.title}</h1>
            <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />
            <div className="prose prose-invert max-w-none">
              <p className="paragraph-text text-white mb-4">{post.content}</p>
              <p className="paragraph-text text-white mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="paragraph-text text-white">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SinglePost

