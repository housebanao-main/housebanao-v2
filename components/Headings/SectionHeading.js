import React from 'react'

const SectionHeading = ({className, children}) => {
  return (
    <h2 className={` text-lg md:text-xl lg:text-2xl ${className}`}>{children}</h2>
  )
}

export default SectionHeading