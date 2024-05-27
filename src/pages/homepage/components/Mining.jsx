import shredded from "/mining/metalurji2.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Mining() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="section5" className="mt-10 top" data-aos="fade-left">
      <div className="px-4 md:px-20">
        <h2 className="text-2xl md:text-5xl mb-1">Mining and Metallurgy </h2>
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
          <ul className="md:text-lg mt-3 ">
            <li>Crushing Solutions for Mining</li>
            <li>Gypsum Production Line’s</li>
            <li>Aerated Concrete Block Production Line’s</li>
            <li>Air Separation Plant</li>
            <li>Aluminium Profile and Composite Panel Production Facilities</li>
            <li>PVC and Roller Shutter Production Facilitie</li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mining;
