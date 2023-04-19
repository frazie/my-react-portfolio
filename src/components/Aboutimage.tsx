import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
  pageInfo: PageInfo
}


function AboutImage({ pageInfo }: Props) {
  return (
    <motion.img 
    className='-mb-20 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full  object-cover md:rounded-lg md:w-60 md:h-80 xl:w-[300px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[600px]' 

    initial={{
        x: -200,
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

    src={urlFor(pageInfo?.profilePic).url()} 
    alt="about frazier image" />
  )
}

export default AboutImage

