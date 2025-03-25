import LargeHeading from '@/components/Headings/LargeHeading'
import Wrapper from '@/components/Wrapper'
import React from 'react'

const Banner = () => {
  return (
    <Wrapper className='absolute inset-0 flex items-center justify-start w-[90%] m-auto'>
      <LargeHeading className='text-white  font-semibold w-2/3'>THE POWER OF LIGHTING: ILLUMINATING YOUR SPACE FOR STYLE AND FUNCTION</LargeHeading>
    </Wrapper>
  )
}

export default Banner