import React from 'react'
import { motion } from 'framer-motion'

import Aboutimage from './Aboutimage'
import Abouttext from './Abouttext'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-300 text-2xl'>About</h3>

      <Aboutimage />

      <Abouttext />
      
    </motion.div>
  )
}

export default About