import React from "react";
import { motion } from 'motion/react'

function Design() {
  return (
    <>
      <section id="Design" className="w-full h-[250vh] ">
        <video
          className="h-[130vh] w-full object-cover"
          src="src/assets/original.mp4"
          autoPlay
          loop
          muted
        ></video>
        <ul className="flex flex-col justify-center items-center font-semibold gap-4 h-[120vh] w-full px-[40px]">
          <li className="text-[60px] flex font-bold uppercase">
            Our Design{" "}-
            <motion.span
              initial={{
        opacity:0,
        width:0
       }}
       whileInView={{
        opacity:1,
        width:'120px'
       }}
       transition={{
        duration:.5

       }}
            className="h-full overflow-hidden w-[120px] rounded-3xl border-2">
              <img
                className="h-[90px] w-full object-cover"
                src="https://i.pinimg.com/originals/24/e1/b5/24e1b51dcfaf8b9d7aeb5d49e91be623.gif"
              />
            </motion.span>{" "}-
            Philosophy
          </li>
          <hr className="w-full" />
          <li className="text-[60px] font-bold uppercase">
            emotion and intelligence.
          </li>
          <hr className="w-full" />
          <li className="text-[60px] flex font-bold uppercase">
            create desirable{" "}-
            <motion.span
              initial={{
        opacity:0,
        width:0
       }}
       whileInView={{
        opacity:1,
        width:'120px'
       }}
       transition={{
        duration:.5

       }}
            className="h-full overflow-hidden w-[120px] rounded-3xl border-2">
              <img
                className="h-[90px] w-full object-cover"
                src="https://i.pinimg.com/originals/aa/07/4c/aa074c4babb1b01bd01649883e80fc8c.gif"
              />
            </motion.span>{" "}-
            aesthetic
          </li>
          <hr className="w-full" />
          <li className="text-[60px] font-bold uppercase">
            Design is essential for highly luxury
          </li>
          <hr className="w-full" />
          <li className="text-[60px] flex font-bold uppercase">
            shape{" "}-
            <motion.span
              initial={{
        opacity:0,
        width:0
       }}
       whileInView={{
        opacity:1,
        width:'120px'
       }}
       transition={{
        duration:.5

       }}
            className="h-full overflow-hidden w-[120px] rounded-3xl border-2">
              <img
                className="h-[90px] w-full object-cover"
                src="https://i.pinimg.com/originals/04/68/8f/04688f9f9652a4edfc8e4d338054d522.gif"
              />
            </motion.span>-
            boldtrends.
          </li>
        </ul>
      </section>
    </>
  );
}

export default Design;
