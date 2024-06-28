import { motion } from 'framer-motion'
import React from 'react'

function Landingpage() { 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-[#4c508c] pt-1'>
      <div className="textstructure mt-40 px-20">
        {["Discover", "Artistic", "Creations"].map((item, index)=>{
          return <div className="masker">
            <div className='w-fit flex overflow-hidden'>
              {index === 1 && (<motion.div initial={{width:0}} animate={{width:"6vw"}} transition={{ease:[0.76,0,0.24,1], duration:1}} className=' rounded-md w-[6vw] h-[5vw] relative top-[8px]'>
                <img src="https://wordsbybob.wordpress.com/wp-content/uploads/2014/03/artist-vs-artisan.jpg" alt="" />
              </motion.div>)}
            <h1 className='flex items-center uppercase text-[6vw] leading-none tracking-tighter font-semibold'>{item}</h1>
            </div>
        </div>
        })}
      </div>
      <div className="border-t-[1px] border-zinc-900 mt-[70px] flex justify-between items-center py-5 px-20">
        {["Tote bags", "Artistic wallpapers"].map((item, index)=>(
          <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className="start">
          <div className='px-5 py-2 border-[1px] border-zinc-900 rounded-full font-light text-sm capitalize'>Shop Now</div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage