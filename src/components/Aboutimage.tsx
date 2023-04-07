import React from 'react'
import { motion } from 'framer-motion'

type Props = {}


function AboutImage({}: Props) {
  return (
    <motion.img 
    className='-mb-20 mt-5 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full  object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]' 

    initial={{
        x: -300,
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

    src="https://frazier-se.netlify.app/assets/img/IMG_20180120_131810_874%20(1).jpg" 
    alt="about frazier image" />
  )
}

export default AboutImage

