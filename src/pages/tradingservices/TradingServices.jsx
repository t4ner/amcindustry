import React from "react";
import THero from "./THero";
import trading1 from "/trading/trading1.jpeg";
import trading2 from "/trading/trading2.jpeg";
import trading3 from "/trading/trading3.jpeg";
import Footer from "../../components/footer/Footer";
import clinker1 from "/clinker/clinker1.jpg";
import alternative1 from "/alternative/altenative1.jpg";
import coal1 from "/coal/coal1.jpeg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function TradingServices() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <div style={{ overflow: 'hidden', pointerEvents: 'none' }}>
      <THero />{" "}
      <div className="mt-10 md:mt-16" data-aos="fade-left" >
        <p className="container px-4 md:px-0 md:text-lg md:mt-20">
          Physical Trading, Logistics and Distribution are Our Core Verticals
          Primarily in the Form of Raw Materials (ie. Coal, Clinker, Gypsum,
          Limestone) International Trading of Commercial Products (ie. Cement)
          Diversified Operations Comprise of Mines and Production Plants.
        </p>
        <p className="container px-4 md:px-0 md:text-lg mt-2">
          Graphite Electrode Trading; We represent many Chinese companies in
          Türkiye and surrounding countries. We support our customers in
          supplying electrodes of all sizes, starting from 300mm to 800mm, in
          accordance with the conditions they require.
        </p>
      </div>
      <div className="lg:flex lg:flex-row flex-col lg:space-x-10 space-y-10 md:space-y-0 mt-10 md:mt-20" data-aos="fade-right">
        <div className="basis-1/3">
          <div className="flex bg-gray-100 flex-col h-full items-center justify-center">
            <div className="h-full">
              <img src={clinker1} alt="" className="h-[250px] lg:h-full object-cover" />
            </div>
            <Link
            style={{ overflowY: 'hidden', pointerEvents: 'auto' }}
              to="/clinker-and-cement-trading"
              className="md:text-xl text-center p-3 md:p-10"
            >
              CLINKER & CEMENT TRADING
              <p className="text-sm ">Read More</p>
            </Link>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex bg-gray-100 flex-col h-full items-center justify-center">
            <div className="h-full">
              <img src={coal1} alt="" className="h-[250px] lg:h-full object-cover" />
            </div>
            <Link style={{ overflowY: 'hidden', pointerEvents: 'auto' }} to="/coal-trading" className="md:text-xl text-center p-3 md:p-10">
              COAL TRADING
              <p className="text-sm ">Read More</p>
            </Link>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex bg-gray-100 flex-col h-full items-center justify-center">
            <div className="h-full">
              <img
                src={alternative1}
                alt=""
                className="h-[250px] lg:h-full w-full object-cover"
              />
            </div>
            <Link style={{ overflowY: 'hidden', pointerEvents: 'auto' }} to="/alternative-fuels" className="md:text-xl text-center p-3 md:p-10">
              ALTERNATIVE FUELS TRADING
              <p className="text-sm ">Read More</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-row flex-col  mt-10 lg:space-x-10 " data-aos="fade-left">
        <div className="basis-1/3">
          <img src={trading1} className="h-[250px] lg:h-full w-full" />
        </div>
        <div className="basis-1/3">
          <img
            src={trading2}
            className="h-[250px] lg:h-full w-full my-10 lg:my-0"
          />
        </div>
        <div className="basis-1/3">
          <img src={trading3} className="h-[250px] lg:h-full w-full" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TradingServices;
