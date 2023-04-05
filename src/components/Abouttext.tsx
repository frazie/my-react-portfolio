import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function AboutText({}: Props) {
  return (
    <motion.div className='space-y-10 px-0 md:px-10'
    initial={{
        x: 300,
        opacity: 0,
    }}
    whileInView={{
        x: 0,
        opacity: 1,
    }}
    transition={{
        duration: 1.2,
    }}
    viewport={{once: true}}
    >
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-yellow-400/50'>little</span>  background</h4>
        <p className='text-base'>
            I'm Frazier Odhiambo, here's a little bit about me.... I've been coding for almost 3 years now. As a full-stack developer, I've worked with startups and large corporations to help build and scale their companies. Along the way I've realized my passion existed in building products and also working alongside other developers apply developer skills in a range of cool builds and challenges. I am continuously looking to grow my skills as a developer while learning and helping others along the way.
        </p>
    </motion.div>
    
  )
}

export default AboutText