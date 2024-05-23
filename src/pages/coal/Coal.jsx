import React, { useEffect } from "react";
import CoaHero from "./CoaHero";
import coal2 from "/coal/coal2.webp";
import coal3 from "/coal/coal3.jpeg";
import Footer from "../../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"

function Coal() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <div>
      <CoaHero />
      <div className="mt-10 md:mt-20 container"  style={{ overflow: 'hidden', pointerEvents: 'none' }}>
        <h3 className="md:text-lg px-4 md:px-4 " data-aos="fade-left">
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
      <div className="flex-col md:flex md:flex-row mt-10 md:mt-20 md:space-x-10" data-aos="fade-right">
        <div className="basis-1/2">
          <img
            src={coal2}
            alt=""
            className="w-full h-[250px] md:h-full object-cover"
          />
        </div>
        <div className="basis-1/2 mt-10 md:mt-0">
          <img
            src={coal3}
            alt=""
            className="w-full h-[250px] md:h-full object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Coal;
