import React from "react";
import heroImage from "/alternative/altenative1.jpg";
import Navbar from "../../components/navbar/Navbar";
function AltHero() {
  return (
    <section
      className="h-screen w-full"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="h-full w-full flex flex-col  justify-center pl-2 container">
        <h1 className="text-white text-[42px] md:text-[80px] mt-72 md:mt-18 font-normal">
          Alternative Fuels Trading
        </h1>
      </div>
    </section>
  );
}

export default AltHero;
