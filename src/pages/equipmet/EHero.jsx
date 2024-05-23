import React from "react";
import heroImage from "/equipment/equipment1.jpeg";
import Navbar from "../../components/navbar/Navbar";

function EHero() {
  return (
    <section
      className="h-screen w-full"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: 'hidden', pointerEvents: 'auto'
      }}
    >
      <Navbar />
      <div className="h-full w-full flex flex-col  justify-center pl-2 container">
        <h1 className="text-white text-[42px] md:text-[80px] mt-80 md:mt-18 font-normal">
          Equipment & Spare Part Supply
        </h1>
      </div>
    </section>
  );
}

export default EHero;
