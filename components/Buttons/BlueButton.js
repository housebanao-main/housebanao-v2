import React from 'react'

const BlueButton = ({children, className, onClick}) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 bg-[#8B4513] hover:bg-[#6B3410] text-base sm:text-lg font-bold rounded-lg ${className} transition-all duration-300 ease-in-out`}>
      {children}
    </button>
  )
}

export default BlueButton;
