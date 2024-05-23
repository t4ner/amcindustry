import React from "react";
import trading from "/services/services1.jpg";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
function Trading() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <div id="section6" className="mt-10 top" data-aos="fade-right">
      <div className="px-4 md:px-20">
        <h2 className="text-2xl md:text-5xl mb-1">Trading and Logistics </h2>
      </div>

      <div className="bg-gray-100  flex-col xl:flex xl:flex-row items-center xl:h-[500px]">
        <div className="basis-2/3 h-full">
          <img
            src={trading}
            alt="Who We Are"
            className="h-[250px] lg:h-[500px] w-full object-cover"
          />
        </div>
        <div className="basis-1/2 p-3 md:p-20 md:text-lg  ">
          <p>
            Physical Trading, logistics and distribution are our core verticals
            primarily in the form of raw materials (ie. coal, clinker, gypsum,
            limestone) international trading of commercial products (ie. cement)
            diversified operations comprise of mines and production plants.
          </p>
          <p>
            We are also providing sophisticated transportation, warehousing and
            distribution services all over the world.
          </p>
          <p>
            We are control the movement and storage of goods, services, or
            information within a supply chain and between the points of origin
            and consumption.{" "}
          </p>
          <p>
            The company prepares tailor-made logistics solutions for each
            customer and their needs.{" "}
          </p>
          <p>Innovative logistics and supply-chain services and solutions.</p>
        </div>
      </div>
    </div>
  );
}

export default Trading;
