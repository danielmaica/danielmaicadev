import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Technologies from './pages/Technologies'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Header />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  )
}
