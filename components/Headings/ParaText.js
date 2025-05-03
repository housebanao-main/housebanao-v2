import React from 'react'

const ParaText = ({children, className}) => {
  return (
    <p className={`${className} text-sm sm:text-base `}>{children}</p>
  )
}

export default ParaText