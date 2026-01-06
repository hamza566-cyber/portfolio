import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="title-text text-6xl mb-4">404</h1>
          <h2 className="title-text text-3xl mb-6">Page Not Found</h2>
          <p className="subtitle-text mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-accent text-dark-bg font-poppins font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound

