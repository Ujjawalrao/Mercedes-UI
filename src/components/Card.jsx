import React from "react";
import { motion } from "motion/react"

function Card({title,about,link}) {
  return (
    <>
      <div className="w-[85%] h-[100%] md:h-[60%] shadow-md rounded-bl-4xl rounded-tr-4xl overflow-hidden ">
        <div className="p-4 ">
          <p className="text-sm font-medium">{title}</p>
          <h2 className="md:text-2xl text-[14px] font-serif font-semibold mt-1">
            {about}
          </h2>
        </div>
       <div className="w-full h-[50vh]">
       <motion.img
       initial={{
        opacity:0,
        height:0
       }}
       whileInView={{
        opacity:1,
        height:'100%'
       }}
       transition={{
        duration:.8,

       }}
          className="w-full h-full object-cover "
          src={link}
          alt="Class of Creators"
        />
       </div>
      </div>
    </>
  );
}

export default Card;
