import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Historia from './components/sections/Historia'
import OfertaAcademica from './components/sections/OfertaAcademica'
import VidaEscolar from './components/sections/VidaEscolar'
import Admision from './components/sections/Admision'
import Contacto from './components/sections/Contacto'

function App() {
  return (
    <>
      <div
        aria-hidden="true"
        className="h-1.5 w-full bg-gradient-to-r from-institucional-azul-oscuro via-institucional-mostaza-claro to-institucional-dorado-claro"
      />
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-institucional-azul focus:px-4 focus:py-2 focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>
      <NavBar />
      <main id="contenido-principal">
        <Hero />
        <Historia />
        <OfertaAcademica />
        <VidaEscolar />
        <Admision />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
