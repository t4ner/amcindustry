import shredded from "/energy/energy2.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Energy() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="section3" className="mt-10" data-aos="fade-left">
      <div className="px-4 md:px-20">
        <h2 className="text-2xl md:text-5xl">Energy</h2>
      </div>

      <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center">
        <div className="basis-2/3 h-full relative lg:order-2">
          <img
            src={shredded}
            alt="Who We Are"
            className="h-[250px] lg:h-[500px] w-full object-cover"
          />
        </div>
        <div className="basis-1/2 p-3 md:p-16 relative lg:order-1">
          <p className="text-lg md:text-xl ">WHR PLANTS (WASTE HEAT RECOVERY PLANTS) </p>
          <p className="md:text-lg ">
            Our company specializes in the design and sizing of heat boilers
            (heat exchangers) for waste heat recovery systems. We provide all
            the necessary features and detailed engineering to achieve full
            integration of both mechanical and electrical scopes
          </p>
          <ul className="md:text-lg mt-3 ">
            <li>Equipment Supply</li>
            <li>Engineering Services</li>
            <li>Commissioning and Startup Operations</li>
            <li>Finance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Energy;
