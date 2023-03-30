import React from 'react'
import { SocialIcon } from 'react-social-icons'


type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto' >
        <div className='flex flex-row items-center'>
            {/* social icons */}
            <SocialIcon 
            url='github.com/_frazie_' 
            fgColor='grey' 
            bgColor='transparent'
             />
            <SocialIcon 
            url='twitter.com/_frazie_'
             fgColor='grey'
              bgColor='transparent
              ' />
            <SocialIcon 
            url='linkedin.com/_frazie_
            ' fgColor='grey
            ' bgColor='transparen
            t' />
            <SocialIcon 
            url='google.com/_frazie_' 
            fgColor='grey' 
            bgColor='transparent'
             />

        </div>
        <div className='flex flex-row items-center text-gray-300 cursor-pointer' >
            <SocialIcon 
            className='cursor-pointer' 
            network='email' 
            fgColor='grey' 
            bgColor='transparent'  
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400 ' >
                Get in touch with me.
                </p>
        </div>
    </header>
  )
}

export default Header