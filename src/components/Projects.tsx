import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <div className='h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>projects</h3>

        <div className='relativ w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project, i) => (
                <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.5}}
                className='w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44'>
                    <motion.img 
                    initial={{ y:-300, opacity: 0}}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7x8hAPkK2xdpELGgArFVe20u61OOkH_UcS4iw0DL-Vdy_-aahZwiju-9A3ThWTWlKqc&usqp=CAU" alt="" />

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-3xl font-semibold text-center' >
                            <span className='underline decoration-yellow-400/50'> Case study {i+1} of {projects.length}:</span>  name of project
                        </h4>

                        <p className='text-lg text-center md:text-left'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eligendi delectus. At commodi dignissimos cum debitis eligendi nihil praesentium. Doloremque iusto quos ut sit consectetur voluptatem debitis fugiat a laborum!
                        </p>

                    </div>
                </motion.div>

                
            ))}
        </div>    

        <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] skew-y-12' />
    </div>
    
  )
}

export default Projects