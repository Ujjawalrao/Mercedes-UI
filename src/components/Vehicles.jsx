import React from "react";
import Card from "./Card";
import { motion } from "motion/react"

function Vehicles() {
  return (
    <>
      <section id="Vehicles" className="w-full h-screen md:h-[240vh] mt-4 mb-8 md:mb-0 md:px-[40px]">
        <div className="w-full h-[50vh] md:h-[100vh] flex flex-col md:gap-0 gap-4 md:flex-row md:pt-20">
          <div className="w-full h-full md:h-full flex lg:flex justify-center">
            {/* card  */}
            <Card
              title="Innovation"
              about="Digital Companion."
              link="https://i.pinimg.com/736x/79/a0/4e/79a04e9705716e269da478c06df1e09e.jpg"
            />
          </div>
          <div className="hidden w-full h-full md:flex justify-center items-center md:items-end">
            {/* card */}
            <Card
              title="Golf"
              about="Unique S-Class with MANUFAKTUR."
              link="https://i.pinimg.com/736x/94/da/ee/94daee3bb80f5e86d160d4aba105b6cb.jpg"
            />
          </div>
        </div>
        <div className="w-full h-[50vh] md:h-[100vh] flex flex-col md:flex-row md:pt-20">
          <div className="w-full h-full md:h-full flex lg:flex justify-center">
            {/* card  */}
            <Card title="Fahrzeuge" about="Because it's Mercedes Benz." link="https://i.pinimg.com/736x/1a/98/b5/1a98b52e451748b0709a7cc32fa6c9dd.jpg" />
          </div>
          <div className="hidden w-full h-full md:flex justify-center items-end">
            {/* card */}
            <Card title="Zeitgeist" about="Moncler x Mercedes Benz by NIGO. " link="https://i.pinimg.com/736x/6b/14/ec/6b14ec722431b2095cd6b57c06b47a80.jpg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Vehicles;
