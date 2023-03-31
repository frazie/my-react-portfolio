import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className='bg-[rgb(54,54,54)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Frazier&apos;s Portfolio</title>
      </Head>
      
      {/*header */}
        <Header />
      {/*hero */}
      <section id="hero" className='snap-center'>
        <Hero />
      </section>

      {/*about*/}

      {/*experience */}

      {/*skills */}

      {/*projects*/}

      {/*contact us */}
    
    </div>
      
  )
}
