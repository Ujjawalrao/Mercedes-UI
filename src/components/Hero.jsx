import React from "react";
import { motion } from "motion/react";

function Hero() {
  return (
    <>
      <section
        id="hero"
        className="w-full h-auto lg:h-screen flex flex-col lg:flex-row lg:flex gap-2 pb-[30px] pt-[10px] px-[20px]  lg:px-[40px]"
      >
        <div className="relative bg-[url('https://i.pinimg.com/1200x/d8/66/8b/d8668b8ef8a35c10b85ab7f4c5433ea1.jpg')] bg-no-repeat bg-cover bg-center w-full lg:w-[80%] overflow-hidden outline-none border-none   h-[95vh] lg:h-full rounded-4xl">
          
          {/* hero inner-box */}
          <div className="absolute bottom-0 flex justify-center items-center left-0 rounded-tr-3xl bg-[var(--bg-dark-color)] h-[10%] w-[50%]">
            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: -0,
              }}
              transition={{
                duration: 0.5,
                delay: 2.2,
              }}
              className="lg:text-3xl md:text-2xl text-black text-[12px] font-semibold font-serif inline-block"
            >
              Dawn of a new era.
            </motion.h1>
          </div>
        </div>
        <div className=" w-full lg:w-[20%] h-[90vh] lg:h-full rounded-4xl flex flex-col gap-4">
          <div className="h-[45%] w-full lg:rounded-full overflow-hidden flex justify-center items-center">
            <img
              className="object-cover w-full h-full"
              src="https://i.gifer.com/UhkO.gif"
              alt=""
            />
          </div>
          <div className="relative h-[55%] w-full rounded-3xl overflow-hidden ">
            <video
              className="w-full object-center"
              src="https://v1.pinimg.com/videos/mc/expMp4/d1/e8/5c/d1e85c8fbee63c69606317e0d1f78239_t3.mp4"
              muted
              loop
              autoPlay
            ></video>
            {/*  */}
            <div className="absolute bg-white bottom-0 right-0 pt-3 pl-3 rounded-tl-4xl text-xl">
              <div className="rounded-full border-2 py-2 px-3 text-black ">
                <i
                  className="border-2 duration-700 ease-in-out"
                  class="ri-arrow-right-long-fill"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
