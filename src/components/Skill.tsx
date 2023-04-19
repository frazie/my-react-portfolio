import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill
}

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200, 
            opacity: 0,
            }}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1, x: 0}}
            src={urlFor(skill?.image).url()} alt={skill?.nameOfSkill} 
            className='rounded-full border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 2xl:h-32 2xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 2xl:h-32 2xl:w-32 z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2lg font-bold text-black opacity-100 text-center'>{skill?.nameOfSkill}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill