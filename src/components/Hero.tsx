import React from 'react'
import { Cursor ,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from './Image'
import Link from 'next/link'
import { PageInfo } from '../../typings'

type Props = {
    pageInfo: PageInfo
}

const Hero = ( { pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `Hi, the name is ${pageInfo?.name}`,
            'Guy-who-loves-motorcycles.tsx',
            '<ButLovesCodeMore 😎 />',
            "occassionally tries out cybersecurity stuff",

        ],
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 100,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image pageInfo={pageInfo} />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px]'>{pageInfo?.role}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='orange' />
            </h1>
            <div className='pt-5 space-x-4'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link>               
            </div>
        </div>
    </div>
  )
}

export default Hero