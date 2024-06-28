// import React from 'react'

// function Cards() {
//     return (
//       <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
//         <div className="cardcontainer h-[50vh] w-1/2">
//           <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
//             <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
//             <button className='absolute left-8 rounded-full bottom-6 px-5 py-1 border-2'>&copy;2019-2022</button>
//           </div>
//         </div>
//         <div className="cardcontainer flex gap-5 w-[50%] h-[50vh]">
//           <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
//             <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
//             <button className='absolute left-8 rounded-full bottom-6 px-5 py-1 border-2'>&copy;2019-2022</button>
//           </div>
//           <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
//             <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
//             <button className='absolute left-8 rounded-full bottom-6 px-5 py-1 border-2'>&copy;2019-2022</button>
//           </div>
//         </div>
//       </div>
//     );
//   }

// export default Cards

import React from 'react';

function Cards() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Product Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1539975611936-f0d1221cfd16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMHBhaW50aW5nc3xlbnwwfHwwfHx8MA%3D%3D" alt="Product" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 text-black">Wall Painting</h3>
            <p className="text-gray-600 mb-2">$99.00</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out">Add to Cart</button>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1623222403596-d0255da44c0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Product" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 text-black">Tote Bag</h3>
            <p className="text-gray-600 mb-2">$79.00</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out">Add to Cart</button>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="https://plus.unsplash.com/premium_photo-1680543345245-89ac63571b68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzaWduZXIlMjBmbG93ZXIlMjB2YXNlfGVufDB8fDB8fHww" alt="Product" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 text-black">Flower-Vase</h3>
            <p className="text-gray-600 mb-2">$129.00</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
