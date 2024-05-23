import React from "react";
import whoweare5 from "/whoweare/2.jpg";
function FiftySection() {
  return (
    <div className="mt-20">
      <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center">
        <div className="basis-2/3 h-full">
          <img
            src={whoweare5}
            alt="Who We Are"
            className="h-[350px] md:h-[500px] w-full object-cover"
          />
        </div>
        <div className="basis-1/2 p-4 md:p-10">
          <h2 className="text-2xl md:text-4xl">TRADING SERVICES</h2>
          <p className="text-lg mt-2 tracking-wide">
            <ul className="text-lg">
              <li>
                Physical Trading, Logistics and Distribution are Our Core
                Verticals Primarily in the Form of Raw Materials (ie. Coal,
                Clinker, Gypsum, Limestone)
              </li>
              <li>International Trading of Commercial Products (ie. Cement)</li>
              <li>
                Diversified Operations Comprise of Mines and Production Plants.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FiftySection;
