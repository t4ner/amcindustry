import React from "react";

import const2 from "/construction/const2.jpg";
import const3 from "/construction/const3.jpg";
import const4 from "/construction/const4.jpg";
import CHero from "./CHero";
import Footer from "../../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function Construction() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <div>
      <CHero />
      <div className="mt-10 md:mt-16"  style={{ overflowY: 'hidden', pointerEvents: 'none' }}>
        <div className="container md:text-lg  px-4 md:px-0" data-aos="fade-left" >
          <p>
            {" "}
            Thanks to our best in class partners and years of experience, we are
            capable of managing diverse construction projects inside and outside
            of Turkey. We are proud to offer our clients;
          </p>
          <ul>
            <li>
              Long-term experience in design and construction of industrial and
              civil facilities,{" "}
            </li>
            <li>Own staff of employees around the world, </li>
            <li>Annual turnover of $500M </li>
            <li>Technical Feasibility Studies </li>
            <li>Cost Calculations </li>
            <li>Department & Capacity Calculations </li>
            <li>Mass Flow Diagrams </li>
            <li>General Plant Layout </li>
            <li>Departmental Flow Sheets</li>
            <li>Equipment List’s </li>
            <li>Technical & Commercial Tender Documents </li>
          </ul>
          <div>
            <p className="font-semibold mb-2 mt-4">SUPPLIED SERVICES</p>
            <p>
              Design, Manufacture and Supply of Metal Structures, Construction
              and Installation Works For Metal Structures and Equipment of Any
              Complexity, Commissioning
            </p>
          </div>{" "}
          <div>
            <p className="font-semibold mb-2 mt-4">KEY AREAS</p>
            <p>
              Cement and Mining Industries, Energy Sector, Oil and Gas Sector,
              Steel Industry, Environmental Protection Technologies
            </p>
          </div>
        </div>
        <div className="md:flex md:flex-row flex-col items-center mt-10 md:mt-20 md:space-x-2 space-y-10 md:space-y-0" data-aos="fade-right" >
          <div className="basis-1/3 h-[250px] md:h-[340px]">
            <img
              src={const2}
              alt=""
              className=" w-full h-[250px] md:h-full object-cover overflow-hidden"
            />
          </div>
          <div className="basis-1/3  h-[250px] md:h-[340px]">
            <img
              src={const3}
              className="w-full h-[250px] md:h-full object-cover"
              alt=""
            />
          </div>
          <div className="basis-1/3  h-[250px] md:h-[340px]">
            <img
              src={const4}
              className="w-full h-[250px] md:h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Construction;
