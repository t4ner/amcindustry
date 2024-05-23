import React, { useState, useEffect } from "react";
import heroImage from "/services/services.jpg"; // Assuming you want to display only one image
import Navbar from "../../../components/navbar/Navbar";

function SHero() {
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
          SERVICES
        </h1>
      </div>
    </section>
  );
}

export default SHero;
