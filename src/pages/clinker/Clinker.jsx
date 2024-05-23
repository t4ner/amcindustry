import React, { useEffect } from "react";
import CliHero from "./CliHero";
import clinker2 from "/clinker/clinker2.jpeg";
import clinker3 from "/clinker/clinker3.jpeg";
import clinker4 from "/clinker/clinker4.jpeg";
import Footer from "../../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"

function Clinker() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <div>
      <CliHero />
      <div className="mt-10 md:mt-20 container" style={{ overflow: 'hidden', pointerEvents: 'none' }}>
        <h3 className="md:text-lg  px-4 md:px-0" data-aos="fade-left">
          Strong relationship with various high-quality suppliers all around the
          globe, Strong product knowledge and market insight that assures ;
          Timely delivery, Order meets the exact specification required with the
          right price,wherever you are located. We offer Portland Cement Clinker
          Conforming American Standard ASTM C-150. By Working With Our Strategic
          Partners, (Diversified Collection of Multiple Cement-Producing
          Factories Across the Globe), We are Able to Cater All Cement
          Requirements.
        </h3>
      </div>
      <div className="flex-col md:flex md:flex-row md:space-x-10 mt-10 md:mt-20" data-aos="fade-right">
        <div className="basis-1/2">
          <img
            src={clinker2}
            className="h-[250px] md:h-full w-full object-cover"
          />
        </div>
        <div className="basis-1/2 my-10 md:my-0">
          <img
            src={clinker3}
            className="h-[250px] md:h-full w-full object-cover"
          />
        </div>
        <div className="basis-1/2">
          <img
            src={clinker4}
            className="h-[250px] md:h-full w-full object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Clinker;
