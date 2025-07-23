import "./App.css";
import { motion } from "motion/react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Vehicles from "./components/Vehicles";
import Design from "./components/Design";
import Exclusive from "./components/Exclusive";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Try from "./components/Try";

function App() {
  // reload to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });
  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  return (
    <>
      <motion.div
        animate={{
          y: -1700,
        }}
        transition={{
          duration: 3,
          delay: 1.5,
        }}
        className="overflow-y-hidden h-screen w-screen absolute top-0 z-95 flex flex-col bg-white "
      >
        {/* text bran name */}
        <motion.div
          animate={{
            y: -1000,
          }}
          transition={{
            duration: 3,
            ease:"easeInOut"
          }}
          className="bg-black h-screen w-screen "
        ></motion.div>
        <motion.div
          animate={{
            y: 1000,
          }}
          transition={{
            duration: 3,
            ease:"easeInOut"
          }}
          className="bg-black h-screen w-screen "
        ></motion.div>
      </motion.div>
      <Navbar />
      <Hero />
      <Try />
      <Vehicles />
      <Design />
      <Exclusive />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
