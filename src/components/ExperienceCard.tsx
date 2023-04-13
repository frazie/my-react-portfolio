import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-10 cursor-pointer transition-opacity duration-200 overflow-hidden' >
      <motion.img 
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{duration: 1.2,}}
      whileInView={{opacity: 1, y: 0,}}
      viewport={{once: true}}
      className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
      src="https://frazier-se.netlify.app/assets/img/IMG_20180120_131810_874%20(1).jpg" 
     alt="" />

      <div className='px-0 md:px-5 '>
        <h4 className='text-4xl font-light '>fullstack software developer</h4>
        <p className='font-bold text-2xl mt-1'>company (seo global)</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-10 w-10 rounded-full' src="#" alt="tech-skill" />
          <img className='h-10 w-10 rounded-full' src="#" alt="tech-skill" />
          <img className='h-10 w-10 rounded-full' src="#" alt="tech-skill" />
          <img className='h-10 w-10 rounded-full' src="#" alt="tech-skill" />
        </div>
        <p className='uppercase py-4 text-gray-400'>dates start - finish</p>
        <ul className='list-disc space-y-2 ml-5 text-lg'>
          <li>summary points for the role.summary points for the role.</li>
          <li>summary points for the role.summary points for the role.</li>
          <li>summary points for the role.summary points for the role.</li>
          <li>summary points for the role.summary points for the role.</li>
          <li>summary points for the role.summary points for the role.</li>
        </ul>
      </div>

      
    </article>
  )
}

export default ExperienceCard