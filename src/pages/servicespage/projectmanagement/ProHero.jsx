import React from "react";

import Navbar from "../../../components/navbar/Navbar";
import services5 from "/services/services11.jpg";
function ProHero() {
  return (
    <section
      className="h-screen w-full"
      style={{
        backgroundImage: `url(${services5})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <Navbar />
      <div className="h-full w-full flex flex-col  justify-center pl-2 container">
        <h1 className="text-white text-[42px] md:text-[80px] mt-72 md:mt-18 font-normal">
          Project Management
        </h1>
      </div>
    </section>
  );
}

export default ProHero;
