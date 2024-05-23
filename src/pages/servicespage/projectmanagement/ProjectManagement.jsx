import React, { useEffect } from "react";
import ProHero from "./ProHero";
import services5 from "/services/services5.jpg";
import Footer from "../../../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"
function ProjectManagement() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <div>
      <ProHero />
      <div className="mt-10 md:mt-20" style={{ overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center"  data-aos="fade-left">
          <div className="basis-2/3 h-full">
            <img
              src={services5}
              alt="Who We Are"
              className="h-[250px] md:h-[500px] w-full object-cover"
            />
          </div>
          <div className="basis-1/2 md:text-lg p-4 md:px-20">
            <ul>
              <li>Coordination between Supplier and Client</li>
              <li>
                Collect all the data as per the signed contract with the
                Supplier
              </li>
              <li>Arrange Kick-off meetings</li>
              <li>Monitor the general time schedule </li>
              <li>Check and approve the General Plant Layout</li>
              <li>Check and approve the General Arrangement Drawings</li>
              <li>Collect the Monthly Progress Reports from all Suppliers</li>
              <li>Prepare a “Monthly Progress Report” for the project</li>
            </ul>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectManagement;
