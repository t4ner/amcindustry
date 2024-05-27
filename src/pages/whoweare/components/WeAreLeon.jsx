import React from "react";
import weareleon from "/whoweare/we-are-leon.webp";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function WeAreLeon() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <div className="container" data-aos="fade-right">
      <div className="flex-col md:flex md:flex-row md:space-x-10 space-y-5 md:space-y-0 items-stretch mt-20">
        <div className="basis-1/2 bg-blue-100 text-lg p-10 flex items-center justify-center">
          We support nearly 80 clients through our 32 employees and offices in 5
          countries
        </div>
        <div className="basis-1/2">
          <div className="flex bg-blue-100 flex-col h-full items-center justify-center">
            {" "}
            {/* Added items-center and justify-center */}
            <div className="h-[350px] w-full md:h-full">
              <img
                src={weareleon}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-2xl md:text-4xl text-center p-10">
              We are AMC Industry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeAreLeon;
