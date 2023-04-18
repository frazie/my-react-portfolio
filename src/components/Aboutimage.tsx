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
    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full  object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' 

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

