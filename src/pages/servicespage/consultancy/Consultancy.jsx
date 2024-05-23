import React, { useEffect } from "react";
import ConHero from "./ConHero";
import services6 from "/services/services6.jpg";
import Footer from "../../../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"

function Consultancy() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <div>
      <ConHero />
      <div className="mt-10 md:mt-20" style={{ overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center" data-aos="fade-left">
          <div className="basis-2/3 h-full">
            <img
              src={services6}
              alt="Who We Are"
              className="h-[250px] md:h-[500px] w-full object-cover"
            />
          </div>
          <div className="basis-1/2 md:text-lg p-4 md:px-20">
            <ul>
              <li>Technical Feasibility Studies</li>
              <li>Cost Calculations </li>
              <li>Department & Capacity Calculations</li>
              <li>Mass Flow Diagrams </li>
              <li>General Plant Layout</li>
              <li>General Arrangement Drawings </li>
              <li>Departmental Flow Sheets</li>
              <li>Equipment List’s</li>
              <li>Technical & Commercial Tender Documents</li>
            </ul>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Consultancy;
