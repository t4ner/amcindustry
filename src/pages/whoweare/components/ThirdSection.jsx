import React from "react";
import whoweare3 from "/whoweare/projectmanagent.jpg";
function ThirdSection() {
  return (
    <div className="mt-20">
      <div className="bg-[#f2f2f2] flex-col lg:flex lg:flex-row items-center">
        <div className="basis-2/3 h-full">
          <img
            src={whoweare3}
            alt="Who We Are"
            className="h-[340px] md:h-[500px] w-full object-contain"
          />
        </div>
        <div className="basis-1/2 p-5 md:p-10">
          <h2 className="text-2xl md:text-4xl">Project Management Services</h2>
          <p className="text-lg mt-2 tracking-wide">
            <ul className="text-lg">
              <li>Coordination between Supplier and Client </li>
              <li>
                Collect all the data as per the signed contract with the
                Supplier
              </li>
              <li>Arrange Kick-off meetings </li>
              <li>Monitor the general time schedule </li>
              <li>Check and approve the General Plant Layout </li>
              <li>Check and approve the General Arrangement Drawings </li>
              <li> Collect the Monthly Progress Reports from all Suppliers </li>
              <li>Prepare a “Monthly Progress Report” for the project</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
