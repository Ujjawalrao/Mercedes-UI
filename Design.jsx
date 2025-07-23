import React from "react";
import { motion } from 'motion/react'

function Design() {
  return (
    <>
      <section id="Design" className="w-full h-[140vh] lg:h-[250vh] ">
        <video
          className="h-[60vh] lg:h-[130vh] w-full object-cover bg-[url('https://images.pexels.com/photos/20264911/pexels-photo-20264911.jpeg')] bg-[url('https://www.mercedes-benz.com/content/dam/brandhub/assets/design/global-design-network/06_Design_showcars_portfolio_2022_220609_5_2d_final.png/_jcr_content/renditions/image-crop-default.jpeg/1730309458446.jpg?im=Resize=(1680);Crop,rect=(0,0,1680,853)')] bg-no-repeat bg-cover bg-center "
          src="src/assets/original.mp" // .mp k baad 4 lga agr vdo chalani h to .

          autoPlay
          loop
          muted
        ></video>
        <ul className="flex flex-col justify-center items-center font-semibold gap-8 h-[80vh] lg:h-[120vh] w-full px-[40px]">
          <li className="text-[14px] md:text-[30px] lg:text-[60px] flex items-center justify-center font-bold uppercase">
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
            className="h-[60px] outline-none border-none md:h-[80px] lg:h-full overflow-hidden w-[80px] md:w-[120px] rounded-xl md:rounded-3xl border-2">
              <img
                className="h-[90px] w-full object-cover"
                src="https://i.pinimg.com/originals/24/e1/b5/24e1b51dcfaf8b9d7aeb5d49e91be623.gif"
              />
            </motion.span>{" "}-
            Philosophy
          </li>
          {/* <hr className="w-full" /> */}
          <li className="text-[14px] md:text-[30px] lg:text-[60px] font-bold uppercase">
            emotion and intelligence.
          </li>
          {/* <hr className="w-full" /> */}
          <li className="text-[14px] md:text-[30px] lg:text-[60px] flex items-center justify-center  font-bold uppercase">
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
            className="h-[60px] outline-none border-none md:h-[80px] lg:h-full overflow-hidden w-[80px] md:w-[120px] rounded-xl md:rounded-3xl border-2">
              <img
                className="h-[90px] w-full object-bottom md:object-center object-cover"
                src="https://i.pinimg.com/originals/aa/07/4c/aa074c4babb1b01bd01649883e80fc8c.gif"
              />
            </motion.span>{" "}-
            aesthetic
          </li>
          {/* <hr className="w-full" /> */}
          <li className="text-[14px] md:text-[30px] lg:text-[60px] font-bold uppercase">
            Design is essential for highly luxury
          </li>
          {/* <hr className="w-full" /> */}
          <li className="text-[14px] md:text-[30px] lg:text-[60px] flex items-center justify-center  font-bold uppercase">
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
            className="h-[60px] outline-none border-none md:h-[80px] lg:h-full overflow-hidden w-[80px] md:w-[120px] rounded-xl md:rounded-3xl border-2">
              <img
                className="h-[90px] w-full object-bottom md:object-center object-cover"
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
