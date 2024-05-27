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
        <h2 className="text-2xl md:text-5xl">Green Energy</h2>
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
          <ul className="text-lg md:text-xl ">
            <li>
              Outgoing gases filtration units Design, Manufacturing and
              Installation
            </li>
            <li>20+ months of Guarantee sine startup</li>
            <li>
              Modernization of old units using as much of the existing equipment
              as possible, thus decreasing the project costs
            </li>
            <li>
              Filtration units for all Industries: High temperature and Abrasion
              resistance for Metallurgical
            </li>
            <li>High Moisture resistance for Bulk loading and handling</li>
            <li>Cement and Construction material line</li>
            <li>Dust suppression and more</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Energy;
