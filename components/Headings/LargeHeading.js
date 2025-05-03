import React from 'react'

const LargeHeading = ({children, className}) => {
  return (
    <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl ${className}`} >{children}</h1>
  )
}

export default LargeHeading