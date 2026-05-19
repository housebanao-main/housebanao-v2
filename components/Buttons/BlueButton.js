import React from 'react'

const BlueButton = ({children, className, onClick}) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 bg-[#8B4513] hover:bg-[#6B3410] sm:text-lg md:text-xl lg:text-2xl font-bold rounded-lg min-w-72 sm:min-w-96 ${className} transition-all duration-300 ease-in-out`}>
      {children}
    </button>
  )
}

export default BlueButton;
