import React from "react";
import { easeIn, easeInOut, motion } from "motion/react"

function Navbar() {
  return (
    <>
      <div className="w-full fixed top-0 z-40">
        {/* top black line */}
        <div className=" h-[10px] bg-[var(--bg-dark-color)] w-full"></div>
        {/* navbar start */}
        <nav className="w-full h-[80px] bg-transparet flex items-center justify-between md:justify-start pr-[30px] gap-4">
          <div
            id="logo-bg"
            className="bg-[var(--bg-dark-color)] z-30 inline-block w-[100px] md:w-[150px] pl-[20px] md:pl-[50px] h-full"
          >
            <span className="font-bold text-2xl  text-white flex items-center justify-center mt-2">
           <a href="#"><img  className="w-[55px]"
           src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-1-logo-png-transparent.png" alt="" />
            </a>
           </span>
            {/* corner 👀 */}
            {/* <svg className='bg-black' width="30" height="30" viewBox="0 0 30 30" fill="green" xmlns="http://www.w3.org/2000/svg">…</svg> */}
          </div>
          {/* menu buttom */}
          <button className="hidden bg-white px-4 rounded-lg h-[50px]">
          <i className="ri-menu-4-line text-2xl font-semibold"></i>
          </button>

          {/* full navigation */}
           <motion.ul
            initial={{
              x:-450,
            }}
            animate={{
              x: 0
            }}
            transition={{
              duration:.7,
              delay:2,
              ease:easeIn,

            }}
            id="menu-bar"
            className="h-[60px]  hidden z-10 w-[400px] md:flex justify-between items-center gap-4 border hover:text-white duration-500 ease-in-out border-gray-400 backdrop-blur-md bg-[#FFFFFF]/40 shadow-gray-100/20 shadow-xl rounded-full px-6 py-2 hover:bg-[url('https://i.pinimg.com/originals/be/d2/59/bed2591f723244f07bc4bf382f97103c.gif')] bg-no-repeat bg-cover bg-center"
          >
            <a href="#Vehicles"><li>Vehicles</li></a>
            <a href="#Design"><li>Design</li></a>
            <a href="#Exclusive"><li>Exclusive</li></a>
            <a href="#Contact"><li>Contact</li></a>
            <button id="themebtn" className="border px-2 py-1 rounded-full text-2xl cursor-grab text-black">
             
              <i className="ri-sun-fill"></i>
              {/* <i className="ri-moon-fill"></i> */}
            </button>
          </motion.ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;


