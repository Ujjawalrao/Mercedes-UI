import React from "react";
import { motion } from "motion/react";

function Try() {
  return (
    <>
      <div className="h-screen w-full px-8 py-6 gap-8 overflow-hidden hidden xl:flex ">
        <motion.div 
          initial={{
            x: -700,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            accentHeight: 300,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="h-full w-[50%] bg-[url('https://i.pinimg.com/736x/da/ee/cb/daeecb4188216e1e3cc3957cdc40cbce.jpg')] bg-no-repeat bg-bottom"
        ></motion.div>
        <motion.div
          initial={{
            x: 700,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            accentHeight: 300,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="h-full w-[50%] bg-[url('https://i.pinimg.com/736x/d9/16/a7/d916a79129459b9dc2bf406fd671fb46.jpg')] bg-no-repeat bg-center bg-cover "
        ></motion.div>
      </div>
    </>
  );
}

export default Try;
