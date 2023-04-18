import React from 'react'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
  pageInfo: PageInfo
}

function Image({ pageInfo }: Props) {
  return (
    <img src={urlFor(pageInfo?.heroImage).url()} alt="frazier's image"
    className='relative rounded-full h-32 w-32 mx-auto object-cover' />
  )
}

export default Image