import React from 'react'

const BlackBtn = ({children, className, onClick}) => {
    return (
      <button onClick={onClick} className={`px-4 py-2 bg-black text-white rounded-lg  ${className}`}>{children}</button>
    )
  }

export default BlackBtn