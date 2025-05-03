import React from 'react'

const SectionSubHeading = ({children, className}) => {
  return (
    <div className={`sm:text-lg   ${className}`}>{children}</div>
  )
}

export default SectionSubHeading