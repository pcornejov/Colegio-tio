import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Historia from './components/sections/Historia'
import OfertaAcademica from './components/sections/OfertaAcademica'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Historia />
        <OfertaAcademica />
      </main>
      <Footer />
    </>
  )
}

export default App
