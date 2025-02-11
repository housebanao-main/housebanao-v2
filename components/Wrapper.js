import React from 'react'

const Wrapper = ({children, className}) => {
  return (
    <div className={`  ${className} max-w-screen-2xl mx-auto bg-transparent px-4 md:px-8 py-[3vh] md:py-12`}>
        {children}
    </div>
  )
}

export default Wrapper