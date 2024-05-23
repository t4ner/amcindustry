import React from "react";

import thirdheroimage from "/homepageimg/thirdheroimage.jpeg";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
function Port() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <div id="section2" className="mt-10" data-aos="fade-right">
      <div className="px-4 md:px-20">
        <h2 className="text-2xl md:text-5xl">Port</h2>
      </div>

      <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center lg:h-[500px]">
        <div className="basis-2/3 h-full">
          <img
            src={thirdheroimage}
            alt="Who We Are"
            className="h-[250px] lg:h-[500px] w-full object-cover"
          />
        </div>
        <div className="basis-1/2 p-3 md:p-20">
          <p className="md:text-lg mb-2 ">
            We provide customized solutions for all your equipment needs at your
            ports. In container terminals and bulk cargo terminals, we offer
            tailored solutions and support you in equipment supply,
            installation, and commissioning processes{" "}
          </p>
          <ul className="md:text-lg ">
            <li>Cranes</li>
            <li>STS (Ship-to-Shore) Cranes</li>
            <li>
              RMG (Rail-Mounted Gantry) / RTG (Rubber-Tired Gantry) Cranes
            </li>
            <li>Modification</li>
            <li>Ship Unloading / Loading</li>
            <li>Pipe Conveyors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Port;
