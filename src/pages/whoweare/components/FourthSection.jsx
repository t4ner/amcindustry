import React from "react";
import whoweare4 from "/whoweare/4.jpg";
function FourthSection() {
  return (
    <div className="container">
      <div className="flex-col md:flex-row md:flex md:space-x-10 items-stretch mt-20">
        <div className="basis-1/2 bg-blue-100 text-lg p-4 md:p-10 flex items-center md:justify-center">
          <ul className="text-lg">
            <li>Gypsum Production Line’s</li>
            <li>Waste Heat Recovery Plant’s</li>
            <li>Aerated Concrete Block Production Line’s</li>
            <li>Power Plant’s</li>
            <li>Air Separation Plant’s</li>
            <li>Ship Loaders & Unloaders for Ports</li>
            <li>Port Storage System’s</li>
            <li>Pipe Conveyor’s</li>
            <li>Storage Systems</li>
          </ul>{" "}
        </div>
        <div className="basis-1/2">
          <div className="flex bg-blue-100 flex-col h-full items-center justify-center">
            {" "}
            {/* Added items-center and justify-center */}
            <div className="h-full">
              <img
                src={whoweare4}
                alt=""
                className="h-[350px] md:h-full object-cover"
              />
            </div>
            <p className="text-2xl md:text-4xl text-center p-6 md:p-10">
              Equipment Supply
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
