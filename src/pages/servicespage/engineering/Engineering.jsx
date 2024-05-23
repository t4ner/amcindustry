import React, { useEffect } from "react";
import EngHero from "./EngHero";
import services12 from "/services/services12.jpg";
import Footer from "../../../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"
function Engineering() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <div>
      <EngHero />
      <div className="mt-10 md:mt-20" style={{ overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center" data-aos="fade-left">
          <div className="basis-2/3 h-full">
            <img
              src={services12}
              alt="Who We Are"
              className="h-[250px] md:h-[500px] w-full object-cover"
            />
          </div>
          <div className="basis-1/2 md:text-lg p-4 md:px-20">
            We provide all kinds of engineering services to our customers
            optionally with our European, Chinese and local engineers
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Engineering;
