import React from "react";
import whoweare1 from "/whoweare/whowearemain.jpg";
function FirstSection() {
  return (
    <div className="mt-20">
      <div className="bg-[#f2f2f2]  flex-col md:flex md:flex-row items-center">
        <div className="basis-2/3 h-full">
          <img
            src={whoweare1}
            alt="Who We Are"
            className="h-[340px] md:h-[500px] md:w-full object-center"
          />
        </div>
        <div className="basis-1/2 p-4 md:p-10">
          <h2 className="text-2xl md:text-4xl">Who we are</h2>
          <p className="text-lg mt-2 tracking-wide">
            AMC is a joint venture company who is dedicated to the Cement
            Building Material and Environment Protection business, including the
            Cement Industry, Lime, and AAC Blocks, Waste Incineration Treatment,
            Desulfurization and Denitrification for Heavy Industry. She provides
            the EP (Engineering and Procurement) Service, EPS (Engineering,
            Procurement & Service), Consulting, Spare Parts Supply, Upgrading,
            Operation & Maintenance Service all over the world. <br /> AMC has
            already supplied the spare parts for many customers in Middle East,
            Turkey, CIS and Africa. Our partners including the best suppliers in
            the above areas, our consulting projects are also distributed in the
            above places. <br /> AMC are also providing sophisticated
            transportation, warehousing and distribution services all over the
            world.We are control the movement and storage of goods, services, or
            information within a supply chain and between the points of origin
            and consumption. The company prepares tailor-made logistics
            solutions for each customer and their needs. innovative logistics
            and supply-chain services and solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
