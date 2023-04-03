import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Aboutimage({}: Props) {
  return (
    <motion.img 
    initial={{
        x: -200,
        
    }}

    src="https://frazier-se.netlify.app/assets/img/IMG_20180120_131810_874%20(1).jpg" 
    alt="about frazier image" />
  )
}

export default Aboutimage