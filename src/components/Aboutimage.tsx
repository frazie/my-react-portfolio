import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Aboutimage({}: Props) {
  return (
    <motion.img 

    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full  object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]' 
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

    initial={{
        x: -200,
        
    }}


    src="https://frazier-se.netlify.app/assets/img/IMG_20180120_131810_874%20(1).jpg" 
    alt="about frazier image" />
  )
}

export default Aboutimage