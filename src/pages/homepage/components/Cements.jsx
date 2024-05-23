import shredded from "/homepageimg/sonmezcimento.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Cements() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="section1" className="mt-10 top" data-aos="fade-left">
      <div className="px-4 md:px-20">
        <h2 className="text-2xl md:text-5xl">Cement</h2>
      </div>

      <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center ">
        <div className="basis-2/3 h-full relative lg:order-2">
          <img
            src={shredded}
            alt="Who We Are"
            className="h-[250px] lg:h-[500px] w-full object-cover"
          />
        </div>
        <div className="basis-1/2 p-3 md:p-20 relative lg:order-1">
          <p className="text-base md:text-lg mb-2">
            We provide support in all areas from turnkey factory installation
            to spare parts supply in the cement İndustry{" "}
          </p>
          <ul className="text-base md:text-lg">
            <li>Consulting Services</li>
            <li>Project Management Services</li>
            <li>Equipment Supply</li>
            <li>Engineering Services</li>
            <li>Commissioning and Startup Operations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cements;
