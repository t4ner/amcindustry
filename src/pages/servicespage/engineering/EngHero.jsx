import React from "react";

import Navbar from "../../../components/navbar/Navbar";
import services7 from "/services/services7.jpg";
function EngHero() {
  return (
    <section
      className="h-screen w-full"
      style={{
        backgroundImage: `url(${services7})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <Navbar />
      <div className="h-full w-full flex flex-col  justify-center pl-2 container">
        <h1 className="text-white text-[42px] md:text-[80px] mt-72 md:mt-18 font-normal">
          Engineering
        </h1>
      </div>
    </section>
  );
}

export default EngHero;
