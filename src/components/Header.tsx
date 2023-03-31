import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'  >
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/* social icons */}
            <SocialIcon 
            url='github.com/_frazie_' 
            fgColor='grey' 
            bgColor='transparent'
             />
            <SocialIcon 
            url='twitter.com/_frazie_'
            fgColor='grey'
            bgColor='transparent' 
              />
            <SocialIcon 
            url='linkedin.com/_frazie_' 
            fgColor='grey' 
            bgColor='transparent'
             />
            <SocialIcon 
            url='google.com/_frazie_' 
            fgColor='grey' 
            bgColor='transparent'
             />

        </motion.div>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer' >
            {/* get in touch section */}
            <SocialIcon 
            className='cursor-pointer' 
            network='email' 
            fgColor='grey' 
            bgColor='transparent'  
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400 ' >
                Get in touch with me.
                </p>
        </motion.div>
    </header>
  )
}

export default Header