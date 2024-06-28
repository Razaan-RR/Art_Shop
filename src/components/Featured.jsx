import { motion } from 'framer-motion';
import { Power4 } from 'gsap';
import React, { useState } from 'react';

function Featured() {
  const [isHoveringBag, setHoveringBag] = useState(false);
  const [isHoveringVase, setHoveringVase] = useState(false);

  return (
    <div className="w-full py-20">
      <div className="w-full px-10 border-b-2 pb-10 border-zinc-700">
        <h1 className="text-6xl tracking-tight">Featured Products</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setHoveringBag(true)}
            onMouseLeave={() => setHoveringBag(false)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full z-[9] text-8xl -translate-x-1/2 top-1/2 -translate-y-1/2">
              {"Tote-Bags".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHoveringBag ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://images.unsplash.com/photo-1576695139696-e053aae84148?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG90ZSUyMGJhZ3N8ZW58MHx8MHx8fDA%3D"
                alt="Bag"
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setHoveringVase(true)}
            onMouseLeave={() => setHoveringVase(false)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full z-[9] text-8xl translate-x-1/2 top-1/2 -translate-y-1/2">
              {"VASE".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHoveringVase ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://images.unsplash.com/photo-1713990699109-bfa026db9d0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aXN0aWMlMjB2YXNlfGVufDB8fDB8fHww"
                alt="Vase"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
