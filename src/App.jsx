import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Historia from './components/sections/Historia'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Historia />
      </main>
      <Footer />
    </>
  )
}

export default App
