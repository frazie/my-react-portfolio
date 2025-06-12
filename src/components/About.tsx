import React from 'react'
import { motion } from 'framer-motion'


import { PageInfo } from '../../typings'
import AboutImage from './Aboutimage'
import AboutText from './Abouttext'


type Props = {
  pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{duration: 1.2}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <AboutImage pageInfo = {pageInfo} />

      <AboutText pageInfo = {pageInfo} />
      
    </motion.div>

  )
}

export default About