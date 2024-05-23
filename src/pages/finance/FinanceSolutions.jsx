import React, { useEffect } from "react";
import FHero from "./FHero";
import Footer from "../../components/footer/Footer";
import services4 from "/services/services4.jpg";
import AOS from "aos";
import "aos/dist/aos.css"

function FinanceSolutions() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <>
      <FHero />
      <div className="mt-10 md:mt-16" style={{ overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="container  md:text-xl">
          <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center" data-aos="fade-left">
            <div className="basis-1/2 w-full h-full">
              <img
                className="w-full h-full object-contain "
                src={services4}
                alt="Who We Are"
              />
            </div>
            <div className="basis-1/2 p-4 md:p-10">
              <div>
                {" "}
                <p className="mb-2 font-semibold uppercase">
                  Services we have provided in the Cement Sectors
                </p>
             
                  <ul className="md:text-lg mt-2 ">
                    <li>
                      Turnkey Cement Plants commitments EP +C + F (Financing)
                    </li>
                    <li>We offer a unique EPС+F business model</li>
                  </ul>
              
              </div>

              <p className="font-semibold mt-4 mb-2">
                FINANCING ALTERNATIVES{" "}
              </p>
             
                <ul className="md:text-lg">
                  <li>Bank Loan</li>
                  <li>Private Fund Credit</li>
                  <li>Equity Participation</li>
                  <li>EXIM Bank Loan</li>
                </ul>
          
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default FinanceSolutions;
