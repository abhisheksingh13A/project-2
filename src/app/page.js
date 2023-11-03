
import About from './about/page'
import Contact from './contact/page'
import Header from './header/page'

import Portfolio from './portfolio/page'
import Services from './services/page'
import Skills from './skills/page'


export default function Home() {
  return (
    <main className='scroll-smooth '>
     <Header />
     <About />
     <Skills />
     <Portfolio />
     <Services />
     <Contact />
    </main>
  )
}
