import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../../typings'


type Props = {
  experiences: Experience[]
}

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{ duration: 1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full pt-10 px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80' >
            {/* experience cards will come here */}
            {experiences?.map((experience) => (
                <ExperienceCard key={experience._createdAt} experience={experience} />
            ))}
            
        </div>
    </motion.div>
  )
}

export default WorkExperience