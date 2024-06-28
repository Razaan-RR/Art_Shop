import React from 'react'

function About() {
  return (
    <div className='w-full px-20 py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-5xl'>We offer a wide range of artistic products that inspire creativity and bring beauty into your life. From unique paintings to handcrafted sculptures, our collection is curated with passion and precision</h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-10 border-[#212121]'>
            <div className='w-1/2'>
            <h1 className='text-5xl'>Our History: </h1>
            <button className=' flex uppercase gap-5 items-center px-7 mt-10 py-3 bg-zinc-900 rounded-full text-white'>Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            <div className='w-1/2 h-[60vh] rounded-3xl'>
            <img src="https://images.unsplash.com/file-1715714098234-25b8b4e9d8faimage?dpr=2&w=416&auto=format&fit=crop&q=60" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About