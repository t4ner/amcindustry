import React from "react";
import steel from "/steel/steel.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Steel() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="section4" className="mt-10  top" data-aos="fade-right">
      <div className="px-4 md:px-20">
        <h2 className="text-2xl md:text-5xl">Steel</h2>
      </div>

      <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center lg:h-[500px]">
        <div className="basis-2/3 h-full">
          <img
            src={steel}
            alt="Who We Are"
            className="h-[250px] lg:h-[500px] w-full object-cover"
          />
        </div>
        <div className="basis-1/2 p-3 md:p-20">
          <ul className="md:text-lg ">
            <li>Power Plant</li>
            <li>Waste Heat Recovery Plant</li>
            <li>Complete production line</li>
            <li>Complete steel mill</li>
            <li>DRI</li>
            <li>Rolled</li>
            <li>Integrated production line</li>
            <li>Electrode Supply</li>
            <li>Belles top loading system and blast furnace spare parts</li>
            <li>Hearth Monitoring and 3d temperature camera systems for the blast Furnace</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Steel;
