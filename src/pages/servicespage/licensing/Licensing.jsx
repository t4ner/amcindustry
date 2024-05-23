import React, { useEffect } from "react";
import LicHero from "./LicHero";
import services8 from "/services/services15.png";
import Footer from "../../../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function Licensing() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <LicHero />
      <div
        className="mt-10 md:mt-20"
        style={{ overflow: "hidden", pointerEvents: "none" }}
      >
        <div
          className="bg-gray-100  flex-col lg:flex lg:flex-row items-center"
          data-aos="fade-left"
        >
          <div className="basis-2/3 h-full">
            <img
              src={services8}
              alt="Who We Are"
              className="h-[250px] md:h-[500px] w-full object-cover"
            />
          </div>
          <div className="basis-1/2 md:text-lg p-4 md:px-20">
            We provide consultancy, assistance and support regarding the
            licenses our customers need
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Licensing;
