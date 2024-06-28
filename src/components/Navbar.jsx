import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 space-grotesk-regular flex justify-between items-center'>
        <div className="logo">
          <img className='w-20 h-20 rounded-full' src="https://i.pinimg.com/736x/b9/4b/df/b94bdf5abb2c8e398d08d677d5a4bf1e.jpg" alt="" />
        </div>
        <div className="links flex gap-10">
          {["Home", "Shop", "About us", "Contact"].map((item, index)=>(
            <a key={index} className= {`text-lg capitalize font-light ${index === 3 && "ml-32"}`}>{item}</a>
          ))}
        </div>
    </div>
  )
}

export default Navbar