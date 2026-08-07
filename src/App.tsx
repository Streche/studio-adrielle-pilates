import { SkipLink } from '@/components/SkipLink'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Modalities } from '@/sections/Modalities'
import { Benefits } from '@/sections/Benefits'
import { Testimonials } from '@/sections/Testimonials'
import { Location } from '@/sections/Location'

function App() {
  return (
    <>
      <SkipLink />
      <Nav />
      <main id="conteudo">
        <Hero />
        <About />
        <Modalities />
        <Benefits />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </>
  )
}

export default App
