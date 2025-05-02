import React from "react";
import { motion } from "motion/react";

function Exclusive() {
  return (
    <>
      <section id="Exclusive" className="h-[160vh] w-full">
        <div className="w-full h-[100vh] flex gap-4 px-[40px] b">
          <div className="h-full w-[30%] flex justify-center items-center bg-black rounded-4xl overflow-hidden  ">
            <img
              src="https://i.pinimg.com/736x/54/07/26/540726c05f40ac4f688462c8e4f7ea78.jpg"
              alt=""
            />
          </div>
          <div className="h-full w-[70%] rounded-4xl overflow-hidden">
            {/* Top Section */}
            <div className="w-full h-[50%] bg-black flex justify-center gap-4 px-20 py-8">
              <div className="flex text-white flex-col justify-center ">
                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="text-2xl font-bold"
                >
                  Mercedes‑Benz Community
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="text-lg mt-2"
                >
                  Be part of our story The stated values were determined in
                  accordance with the prescribed WLTP (Worldwide harmonised
                  Light vehicles Test Procedure) measurement procedure. The
                  ranges given refer to the German market. The fuel consumption,
                  energy consumption and CO2 emissions of a car depend not only
                  on the efficient use of the fuel or energy source by the car,
                  but also on driving style and other non-technical factors
                </motion.p>
              </div>
            </div>

            {/* Bottom Image Section */}
            <div className="w-full text-white   gap-4 px-20 py-8 h-[50%] bg-black  ">
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="text-2xl font-bold"
              >
                More Information
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="text-lg mt-2 tracking-wider"
              >
                The stated values were determined in accordance with the
                prescribed WLTP (Worldwide harmonised Light vehicles Test
                Procedure) measurement procedure. The ranges given refer to the
                German market. The fuel consumption, energy consumption and CO2
                emissions of a car depend not only on the efficient use of the
                fuel or energy source by the car, but also on driving style and
                other non-technical factors.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="w-full h-[60vh] flex flex-col items-center justify-center gap-18">
          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="text-5xl tracking-wide font-serif font-extrabold"
          >
            Follow Mercedes-Benz
          </motion.h1>
          <motion.ul
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex justify-around text-5xl  w-[70%]"
          >
            <li className="cursor-pointer">
              <i class="ri-instagram-line"></i>
            </li>
            <li className="cursor-pointer">
              <i class="ri-twitter-x-line"></i>
            </li>
            <li className="cursor-pointer">
              <i class="ri-facebook-circle-fill"></i>
            </li>
            <li className="cursor-pointer">
              <i class="ri-youtube-line"></i>
            </li>
            <li className="cursor-pointer">
              <i class="ri-snapchat-fill"></i>
            </li>
          </motion.ul>
        </div>
      </section>
    </>
  );
}

export default Exclusive;
