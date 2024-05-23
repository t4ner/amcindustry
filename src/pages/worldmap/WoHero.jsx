import React from "react";
import Navbar from "../../components/navbar/Navbar";
import worldmapimage from "/worldmap/worldmapimage.jpg";

function WoHero() {
  return (
    <section
      className="h-screen w-full"
      style={{
        backgroundImage: `url(${worldmapimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <Navbar />
      <div className="h-full w-full flex flex-col  justify-center pl-2 container">
        <h1 className="text-white text-[42px] md:text-[80px] mt-72 md:mt-18 font-normal">
          World Map <br /> We operate in more than 35+ countries around the
          world. Explore our global presence here.
        </h1>
      </div>
      {/* <div className="h-full w-full flex flex-col  justify-center pl-2 container">
        <div className="text-start">
          <p className="text-white text-[42px] md:text-[80px] mt-80 md:mt-18  font-normal">
            World Map <br /> We operate in more than 35+ countries around the
            world. Explore our global presence here.
          </p>
        </div>
      </div> */}
    </section>
  );
}

export default WoHero;
