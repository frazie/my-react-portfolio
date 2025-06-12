import React from 'react'

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PageInfo } from '../../typings';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {
  pageInfo: PageInfo
}

function ContactMe({ pageInfo }: Props) {


  const { 
    register,
    handleSubmit,
   } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:abongoodhiambo@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email}) Reaching out through Portfolio Contact Form`
  }

  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[15px] text-gray-500/40 text-2xl'>
            contact me
        </h3>
        <div className='flex flex-col space-y-5'>
            <h4 className='text-4xl text-center font-semibold'>I have got the technical experience just what you need. {' '} <br />
                <span className='underline decoration-[#f7ab0a]'> Let's Talk</span>
            </h4>
            <div className='space-y-6'>
                <div className='flex items-center space-x-5 justify-center'>
                  <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                  <p className='text-2xl' > {pageInfo?.phoneNumber} </p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                  <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                  <p className='text-2xl'>abongoodhiambo@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                  <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                  <p className='text-2xl'>find me on developer lane</p>
                </div>
                
            </div>

            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className='flex flex-col space-y-2 w-fit mx-auto'>

                <div className='flex space-x-2'>
                  <input 
                    {...register('name')} 
                    placeholder='Name' 
                    className='contactInput' 
                    type="text" 
                  />
                  <input 
                    {...register('email')} 
                    placeholder='Email' 
                    className='contactInput' 
                    type="email" 
                  />
                </div>

                <input 
                  {...register('subject')} 
                  placeholder='Subject' 
                  className='contactInput' 
                  type="text" 
                />

                <textarea 
                  {...register('message')} 
                  placeholder='Message' 
                  className='contactInput' 
                />

                <button 
                  type='submit'
                 className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'
                 >
                  Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe
