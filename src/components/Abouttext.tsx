import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../../typings'

type Props = {
    pageInfo: PageInfo
}


function AboutText({ pageInfo }: Props) {

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
            {pageInfo?.backgroundInformation}
        </p>
    </motion.div>
    
  )
}

export default AboutText

