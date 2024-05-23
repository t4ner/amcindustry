import React from "react";
import EHero from "./EHero";
import equipment2 from "/equipment/equipment2.jpg";
import equipment3 from "/equipment/liman.jpg";
import equipment4 from "/equipment/Resim4.png";
import equipment5 from "/equipment/equipment5.jpg";
import Footer from "../../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function Equipment() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <div  style={{ overflow: 'hidden', pointerEvents: 'none' }}>
   
          <EHero />
      
    
      <div className="mt-10 md:mt-20"  style={{ overflowY: 'hidden', pointerEvents: 'none' }}>
        <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center"  data-aos="fade-left">
          <div className="basis-2/3 h-full">
            <img
              src={equipment5}
              alt="Who We Are"
              className="h-[250px] md:h-[500px] w-full object-cover"
            />
          </div>
          <div className="basis-1/2 md:text-lg md:px-10">
            <div className="p-4">
              With our European and Far East partners we have realised E/P/C +F
              many successful projects in Cement, Iron and Steel, Energy,
              Metallurgy, Mining, Chemical and Fertilizers Industry, and
              different many markets.
              <p className="mt-4 mb-2 font-semibold text-lg md:text-xl">
                SERVICES PROVIDED TO YOU BY OUR COMPANY
              </p>
              <ul>
                <li>Manufacture </li>
                <li>Supply </li>
                <li>Installation Supervision</li>
                <li>Commissioning </li>
                <li>Training </li>
                <li>After-sales Service </li>
                <li>Project Management </li>
                <li>EPC Contractor</li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-20">
  <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center" data-aos="fade-right">
    <div className="basis-2/3 h-full relative lg:order-2">
      <img
        src={equipment3}
        alt="Who We Are"
        className="h-[250px] md:h-[500px] w-full object-cover"
      />
    </div>
    <div className="basis-1/2 md:text-lg  md:px-10 relative lg:order-1">
      <div className="p-4">
        <ul className="md:text-lg mt-2 ">
          <li>Port Management</li>
          <li>Shipbuilding </li>
          <li>Terminal Operators </li>
          <li>Construction of Port Facilities</li>
        </ul>
      </div>
    </div>
  </div>
</div>


      <div className="mt-10 md:mt-20">
        <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center"  data-aos="fade-left">
          <div className="basis-2/3 h-full">
            <img
              src={equipment2}
              alt="Who We Are"
              className="h-[250px] md:h-[500px] w-full object-cover"
            />
          </div>
          <div className="basis-1/2 md:text-lg md:px-10">
            <div className="p-4">
              <ul>
                <li>Transportation of Materials</li>
                <li>Power Communications</li>
                <li>Waterworks</li>
                <li>Environmental Protection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-20">
  <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center" data-aos="fade-right">
    <div className="basis-2/3 h-full relative lg:order-2">
      <img
        src={equipment4}
        alt="Who We Are"
        className="h-[250px] md:h-[500px] w-full object-cover"
      />
    </div>
    <div className="basis-1/2 md:text-lg md:px-10 relative lg:order-1">
      <div className="p-4">
        <ul className="md:text-lg mt-2 ">
          <li>Complete production line</li>
          <li>Complete steel mill</li>
          <li>DRI</li>
          <li>Rolled</li>
          <li>İntegrated production line</li>
        </ul>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
}

export default Equipment;
