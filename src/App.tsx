import { Cta } from './sections/Cta'
import { Faq } from './sections/Faq'
import { Features } from './sections/Features'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Metrics } from './sections/Metrics'
import { Nav } from './sections/Nav'
import { Showcase } from './sections/Showcase'
import { Steps } from './sections/Steps'
import { Testimonials } from './sections/Testimonials'

// The page is a stack of independent sections. Remove or reorder freely;
// copy for each lives in src/content.ts.
export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Showcase />
        <Metrics />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
