import React from 'react'

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[15px] text-gray-500 text-2xl'>
            contact me
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl text-center font-semibold'>I have got just what you need. 
                <span className='underline decoration-yellow-400/50'> Let's Talk</span>
            </h4>
            <div>
                
            </div>

        </div>

    </div>
  )
}

export default ContactMe