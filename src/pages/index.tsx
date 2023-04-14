import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-[rgb(54,54,54)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
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
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
            <footer className='sticky bottom-5 w-full cursor-pointer'>
                <div className='flex items-center justify-center'>
                  <img 
                  className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                    src="https://frazier-se.netlify.app/assets/img/IMG_20180120_131810_874%20(1).jpg" alt="let's head home" />
                </div>
            </footer>    
      </Link>
    
    </div>
      
  )
}
