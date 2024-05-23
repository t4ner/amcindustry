import React from "react";
import thirdheroimage from "/gas/gas.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Gas() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="section7" className="mt-10" data-aos="fade-right">
      <div className="px-4 md:px-20">
        <h2 className="text-2xl md:text-5xl mb-1">Gas Processing </h2>
      </div>

      <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center lg:h-[500px]">
        <div className="basis-2/3 h-full">
          <img
            src={thirdheroimage}
            alt="Who We Are"
            className="h-[250px] lg:h-[500px] w-full object-cover 2xl:object-right-bottom bg-bottom"
          />
        </div>
        <div className="basis-1/2 p-3 md:p-20">
          <p className="md:text-lg mb-2 font-medium">
            Air Separation Plants (Air, Nitrogen, Agron, Xenon etc.)
          </p>
          <p className="md:text-lg mb-2 font-medium">
            Gas liquification (Natural gas, Hydrogen, Helium)
          </p>
          <ul className="md:text-lg">
            <li>
              Equipment supply: Turbo-Expanders, HeatExchangers, AirCoolers,
              Column Equipment, Cold Box, Transportation tanks
            </li>
            <li>Gas Storage</li>
            <li>Pumps and cryogenic valves</li>
            <li>LNG clean energy</li>
            <li>Large ASU pipeline gas supply Bulk gas and rare gas</li>
            <li>Pipe Conveyors</li>
            <li>Cryogenic liquid tanks, tankers and vaporizers</li>
            <li>
              Plate-fin heat exchangers and cold boxes Turbo expanders,
              cryogenic liquid pumps, etc
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gas;
