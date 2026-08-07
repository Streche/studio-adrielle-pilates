import { SkipLink } from '@/components/SkipLink'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'

function App() {
  return (
    <>
      <SkipLink />
      <Nav />
      <main id="conteudo">
        <Hero />
      </main>
      <Footer />
    </>
  )
}

export default App
