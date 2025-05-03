import React from 'react'

const TransparentBtn = ({children, className, onClick}) => {
    return (
      <button onClick={onClick} className={`px-4 py-2 border-gray-400 border  text-gray-400 rounded-lg  ${className}`}>{children}</button>
    )
  }

export default TransparentBtn