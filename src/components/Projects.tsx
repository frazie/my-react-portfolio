import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../../typings';
import { urlFor } from '../../sanity';


type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {    
  return (
    <div className='h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>projects</h3>

        <div className='relativ w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#f7ab0a]/80'>
            {projects?.map((project, i) => (
                <div 
                className='w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center p-10 md:p-44'>
                    <motion.img 
                    className='h-44'
                    initial={{ y:-300, opacity: 0}}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    src={urlFor(project?.projectImage).url()} alt="" />

                    <div className='space-y-3 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-3xl font-semibold text-center' >
                            <span className='underline decoration-yellow-400/50'> Case study {i+1} of {projects.length}:</span>  {project?.title}
                        </h4>
                        <div className='flex items-center space-x-2 justify-center'>
                            { project?.technologies.map((technology) => (
                                    <img 
                                    className='h-10 w-10 rounded-full'
                                    key={technology._id} 
                                    src={urlFor(technology.image).url()} alt={technology.nameOfSkill} />
                                ))
                            }
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='text-lg text-center px-5'><a href={project.linkToBuild} target='_blank'>Link to Build</a></p>
                            <p className='text-lg text-center px-5'><a href={project.linkToBuildCode} target='_blank'>Link to Code</a></p>
                        </div>

                        <p className='text-lg text-center md:text-left'>
                            {project?.summary}
                        </p>               

                    </div>
                </div>

                
            ))}
        </div>    

        <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] skew-y-12' />
    </div>
    
  )
}

export default Projects