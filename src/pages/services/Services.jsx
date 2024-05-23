import React from "react";
import { Link } from "react-router-dom";
import SHero from "./components/SHero";
import Footer from "../../components/footer/Footer";
import services1 from "/services/services1.jpg";
import services2 from "/services/services2.jpg";
import services3 from "/services/services3.jpg";
import services4 from "/services/services4.jpg";
import services5 from "/services/services5.jpg";
import services6 from "/services/services6.jpg";
import services7 from "/services/services7.jpg";
import services8 from "/services/services8.jpg";
import leonsphoto from "/homepageimg/nbr2.jfif";
import logo2 from "/logo/logo.png"
import "./services.css"
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    AOS.init({duration:1000})
   }, [])
  return (
    <div  style={{ overflow: 'hidden', pointerEvents: 'none' }}>
      <SHero />
      <div className="mt-10  px-4 md:px-0 md:container overflow-y-hidden">
        <h3 className="md:text-lg ">
          Physical Trading, Logistics and Distribution are Our Core Verticals
          Primarily in the Form of Raw Materials (ie. Coal, Clinker, Gypsum,
          Limestone) International Trading of Commercial Products (ie. Cement)
          Diversified Operations Comprise of Mines and Production Plants.
          <span className="block font-semibold md:text-xl mb-2 mt-5">
            CORE VALUES
          </span>
          <ul className="md:text-lg">
            <li>Quality Products </li>
            <li>Client Experience </li>
            <li>Outstanding Product Knowledge</li>
          </ul>{" "}
        </h3>
      </div>

   {/* <div className="h-[510px] my-10 inset-0 relative w-full flex justify-center items-center">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${leonsphoto})`, filter: "blur(4px)" }}></div>
    <div className='flex flex-col justify-center items-center mb-20'>
      <div className='flex gap-5 items-center justify-center'>
        <div class="hexagon font-semibold">
          <span className="text-center"><Link className="hover:mb-2 duration-300" to="/trading-services">TRADING SERVICES</Link> </span>
        </div>
        <div class="hexagon font-semibold">
          <span className="text-center "><Link className="hover:mb-2 duration-300" to="/construction-services">CONSTRUCTION SERVICES</Link></span>
        </div>
        <div class="hexagon font-semibold">
          <span className="uppercase text-center"><Link className="hover:mb-2 duration-300" to="/equipment-supply-services">Equipment & Spare Part Supply</Link></span>
        </div>
        <div class="hexagon text-center font-semibold">
          <span className="text-center"><Link className="hover:mb-2 duration-300" to="/finance-solutions">FINANCE SOLUTIONS</Link></span>
        </div>
      </div>
      <div className='flex mr-[220px] gap-5 items-center justify-center '>
        <div class="hexagon font-semibold">
          <span className="text-center"><Link className="hover:mb-2 duration-300" to="/project-management">PROJECT MANAGEMENT</Link> </span>
        </div>
        <div class="hexagon font-semibold">
            <span className="text-center"><Link className="hover:mb-2 duration-300" to="/consultancy">CONSULTANCY</Link></span>
        </div>
        <div class="hexagon text-center font-semibold">
          <span className="text-center"><Link className="hover:mb-2 duration-300" to="/engineering">ENGINEERING</Link></span>
        </div>
        <div class="hexagon text-center font-semibold">
          <span className="text-center"><Link className="hover:mb-2 duration-300" to="/licensing">LICENSING</Link></span>
        </div>
      </div>
    </div>
  </div> */}

      <div className="flex-col md:flex md:flex-row h-[500px] space-x-0 md:space-x-10 container mt-10">
        <div className="basis-1/2 img-container overflow-hidden relative" data-aos="fade-right">
          <img
            src={services3}
            alt=""
            className="w-full h-[250px] md:h-full object-cover transform transition duration-300 hover:scale-105"
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-gray-100  h-[60px] md:h-[100px] flex items-center justify-center text-center">
            <Link
             style={{ overflowY: 'hidden', pointerEvents: 'auto' }}
              to="/equipment-supply-services"
              className="font-semibold text-xl md:text-2xl hover:underline"
            >
              Equipment & Spare Part Supply
              <p className="text-xs md:text-lg">
                Read More <i className="ri-arrow-right-line"></i>
              </p>
            </Link>{" "}
          </div>
        </div>
        <div className="basis-1/2 mt-10 md:mt-0 img-container overflow-hidden relative " data-aos="fade-left">
          <img
            src={services2}
            className="w-full h-[250px] md:h-full object-cover transform transition duration-300 hover:scale-105"
            alt=""
          />
          <div className="text-center absolute bottom-0 left-0 right-0 bg-gray-100 h-[60px] md:h-[100px] flex items-center justify-center">
            <Link
             style={{ overflowY: 'hidden', pointerEvents: 'auto' }}
              to="/construction-services"
              className="font-semibold text-xl md:text-2xl hover:underline"
            >
              Construction Services
              <p className="text-xs md:text-lg">
                Read More <i className="ri-arrow-right-line"></i>
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-col md:flex md:flex-row h-[500px] space-x-0 md:space-x-10 container mt-[83px] md:mt-20 mb-20">
        <div className="basis-1/2 img-container overflow-hidden relative" data-aos="fade-right">
          <img
            src={services1}
            alt=""
            className="w-full h-[250px] md:h-full object-cover transform transition duration-300 hover:scale-105"
          />
        
          <div className="text-center absolute bottom-0 left-0 right-0 bg-gray-100 h-[60px] md:h-[100px] flex items-center justify-center">
            <Link
             style={{ overflowY: 'hidden', pointerEvents: 'auto' }}
              to="/trading-services"
              className="font-semibold text-xl md:text-2xl hover:underline "
            >
              Trading Services
              <p className="text-xs md:text-lg">
                Read More <i className="ri-arrow-right-line"></i>
              </p>
            </Link>{" "}
          </div>
        </div>
        <div className="basis-1/2 mt-10 md:mt-0 img-container overflow-hidden relative" data-aos="fade-left">
          <img
            src={services4}
            className="w-full h-[250px] md:h-full object-cover transform transition duration-300 hover:scale-105"
            alt=""
          />
          <div className="text-center absolute bottom-0 left-0 right-0 bg-gray-100 h-[60px] md:h-[100px] flex items-center justify-center">
            <Link
             style={{ overflowY: 'hidden', pointerEvents: 'auto' }}
              to="/finance-solutions"
              className="font-semibold text-xl md:text-2xl hover:underline"
            >
              Finance Solutions
              <p className="text-xs md:text-lg">
                Read More <i className="ri-arrow-right-line"></i>
              </p>
            </Link>{" "}
          </div>
        </div>
      </div>

      <div className="flex-col md:flex md:flex-row h-[500px] space-x-0 md:space-x-10 container mt-[83px] md:mt-20 mb-20">
        <div className="basis-1/2 img-container overflow-hidden relative" data-aos="fade-right">
          <img
            src={services5}
            alt=""
            className="w-full h-[250px] md:h-full object-cover transform transition duration-300 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-100 h-[60px] md:h-[100px] flex items-center justify-center text-center">
            <Link
             style={{ overflowY: 'hidden', pointerEvents: 'auto' }}
              to="/project-management"
              className="font-semibold text-xl md:text-2xl hover:underline"
            >
              Project Management
              <p className="text-xs md:text-lg">
                Read More <i className="ri-arrow-right-line"></i>
              </p>
            </Link>{" "}
          </div>
        </div>
        <div className="basis-1/2 mt-10 md:mt-0 img-container overflow-hidden relative" data-aos="fade-left">
          <img
            src={services6}
            className="w-full h-[250px] md:h-full object-cover transform transition duration-300 hover:scale-105"
            alt=""
          />
          <div className="text-center absolute bottom-0 left-0 right-0 bg-gray-100 h-[60px] md:h-[100px] flex items-center justify-center">
            <Link
             style={{ overflowY: 'hidden', pointerEvents: 'auto' }}
              to="/consultancy"
              className="font-semibold text-xl md:text-2xl hover:underline"
            >
              Consultancy
              <p className="text-xs md:text-lg">
                Read More <i className="ri-arrow-right-line"></i>
              </p>
            </Link>{" "}
          </div>
        </div>
      </div>

      <div className="flex-col md:flex md:flex-row h-[500px] space-x-0 md:space-x-10 container mt-[83px] md:mt-20 mb-20">
        <div className="basis-1/2 img-container overflow-hidden relative" data-aos="fade-right">
          <img
            src={services7}
            alt=""
            className="w-full h-[250px] md:h-full object-cover transform transition duration-300 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-100 h-[60px] md:h-[100px] flex items-center justify-center text-center">
            <Link
             style={{ overflowY: 'hidden', pointerEvents: 'auto' }}
              to="/engineering"
              className="font-semibold text-xl md:text-2xl hover:underline"
            >
              Engineering
              <p className="text-xs md:text-lg">
                Read More <i className="ri-arrow-right-line"></i>
              </p>
            </Link>{" "}
          </div>
        </div>
        <div className="basis-1/2 mt-10 md:mt-0 img-container overflow-hidden relative " data-aos="fade-left">
          <img
            src={services8}
            className="w-full h-[250px] md:h-full object-cover transform transition duration-300 hover:scale-105"
            alt=""
          />
          <div className="text-center absolute bottom-0 left-0 right-0 bg-gray-100 h-[60px]  md:h-[100px] flex items-center justify-center">
            <Link
             style={{ overflowY: 'hidden', pointerEvents: 'auto' }}
              to="/licensing"
              className="font-semibold text-xl md:text-2xl hover:underline"
            >
              Licensing
              <p className="text-xs md:text-lg">
                Read More <i className="ri-arrow-right-line"></i>
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[83px] md:mt-0">
        <Footer />
      </div>
    </div>
  );
}

export default Services;
