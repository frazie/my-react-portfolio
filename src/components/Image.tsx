import React from 'react'

type Props = {}

function Image({}: Props) {
  return (
    <img src="https://frazier-se.netlify.app/assets/img/IMG_20180120_131810_874%20(1).jpg" alt="frazier's image"
    className='relative rounded-full h-32 w-32 mx-auto object-cover' />
  )
}

export default Image