import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <div className='bg-[rgb(54,54,54)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth'>
      <Head>
        <title>Frazier&apos;s Portfolio</title>
      </Head>
      
      {/*header */}
        <Header />
      {/*hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/*about*/}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/*experience */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      {/*skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/*projects*/}
    <section id='projects' className='snap-start'>
      <Projects />
    </section>
      {/*contact us */}
    
    </div>
      
  )
}
