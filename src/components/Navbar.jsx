import React, { useState, useEffect, useContext } from "react";
import { easeIn, easeInOut, motion } from "motion/react"
import { ThemeContext } from "../ThemeContext";

function Navbar() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const targetPosition = element.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="w-full fixed top-0 z-40">
        {/* top black line */}
        <div className=" h-[10px] bg-[var(--bg-dark-color)] w-full"></div>
        {/* navbar start */}
        <nav className="w-full h-auto sm:h-[80px] bg-transparet flex items-center justify-between md:justify-start pr-2 sm:pr-[30px] gap-2 sm:gap-4 py-2 sm:py-0">
          <div
            id="logo-bg"
            className="bg-[var(--bg-dark-color)] z-30 inline-block w-[70px] sm:w-[100px] md:w-[150px] pl-2 sm:pl-[20px] md:pl-[50px] h-full flex items-center"
          >
            <span className="font-bold text-lg sm:text-2xl text-white flex items-center justify-center">
           <a href="#"><img  className="w-[40px] sm:w-[55px]"
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
            className="h-[60px] z-10 w-full sm:w-[400px] flex sm:flex justify-between items-center gap-2 sm:gap-4 border hover:text-white duration-500 ease-in-out border-gray-400 backdrop-blur-md bg-[#FFFFFF]/40 shadow-gray-100/20 shadow-xl rounded-full px-3 sm:px-6 py-2 hover:bg-[url('https://i.pinimg.com/originals/be/d2/59/bed2591f723244f07bc4bf382f97103c.gif')] bg-no-repeat bg-cover bg-center"
          >
            <a href="#Vehicles" onClick={(e) => handleSmoothScroll(e, "Vehicles")}><li className="text-xs sm:text-base">Vehicles</li></a>
            <a href="#Design" onClick={(e) => handleSmoothScroll(e, "Design")}><li className="text-xs sm:text-base">Design</li></a>
            <a href="#Exclusive" onClick={(e) => handleSmoothScroll(e, "Exclusive")}><li className="text-xs sm:text-base">Exclusive</li></a>
            <a href="#Contact" onClick={(e) => handleSmoothScroll(e, "Contact")}><li className="text-xs sm:text-base">Contact</li></a>
            <button id="themebtn" onClick={toggleTheme} className="border px-2 py-1 rounded-full text-lg sm:text-2xl cursor-pointer text-black">
              {isDark ? (
                <i className="ri-moon-fill"></i>
              ) : (
                <i className="ri-sun-fill"></i>
              )}
            </button>
          </motion.ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;


