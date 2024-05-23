import React from "react";

import Navbar from "../../../components/navbar/Navbar";
import services13 from "/services/services13.jpg";
function LicHero() {
  return (
    <section
      className="h-screen w-full"
      style={{
        backgroundImage: `url(${services13})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <Navbar />
      <div className="h-full w-full flex flex-col  justify-center pl-2 container">
        <h1 className="text-white text-[42px] md:text-[80px] mt-72 md:mt-18 font-normal">
          Licensing
        </h1>
      </div>
    </section>
  );
}

export default LicHero;
