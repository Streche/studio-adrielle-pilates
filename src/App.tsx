import { SkipLink } from '@/components/SkipLink'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <>
      <SkipLink />
      <Nav />
      <main id="conteudo">
        <h1 className="sr-only">Studio Adrielle Ferreira Pilates</h1>
      </main>
      <Footer />
    </>
  )
}

export default App
