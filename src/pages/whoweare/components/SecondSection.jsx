import React from "react";
import whoweare2 from "/whoweare/1.jpg";
function SecondSection() {
  return (
    <div className="container">
      <div className="flex-col md:flex md:flex-row md:space-x-10 items-stretch mt-20">
        <div className="basis-1/2 bg-blue-100 text-lg p-4 md:p-10 flex items-center md:justify-center">
          <ul className="text-lg">
            <li>Technical Feasibility Studies </li>
            <li>Cost Calculations </li>
            <li>Department & Capacity Calculations </li>
            <li>Mass Flow Diagrams</li>
            <li>General Plant Layout </li>
            <li>General Arrangement Drawings</li>
            <li>Departmental Flow Sheets </li>
            <li>Equipment List’s </li>
            <li>Technical & Commercial Tender Documents</li>
          </ul>{" "}
        </div>
        <div className="basis-1/2">
          <div className="flex bg-blue-100 flex-col h-full items-center justify-center">
            {" "}
            {/* Added items-center and justify-center */}
            <div className="h-full">
              <img
                src={whoweare2}
                alt=""
                className="h-[300px] md:h-full object-cover"
              />
            </div>
            <p className="text-2xl md:text-4xl text-center p-5 md:p-10">
              Consultancy Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SecondSection;
