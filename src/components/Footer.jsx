import React from 'react'

function Footer() {
  return (
    <div>
        <div className="w-full flex gap-5 h-screen bg-zinc-900 p-20">
            <div className="w-1/2 h-full flex flex-col justify-between">
                <div className="heading">
                    <h1 className='text-8xl uppercase' >Eye-</h1>
                    <h1 className='text-8xl uppercase' >Catching</h1>
                </div>
                <h3 className='text-2xl'>Art_Store</h3>
            </div>
            <div className="w-1/2">
                <h1 className='text-7xl uppercase'>Connect
                </h1>
                <div className="dets mt-10">
                    <a className='block text-xl font-light' href="">Facebook</a>
                    <a className='block text-xl font-light' href="">Instagram</a>
                    <a className='block text-xl font-light' href="">Twitter</a> 
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Footer