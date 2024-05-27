import React from "react";
import leonsphoto from "/homepageimg/leonlast.jpeg";
import logo2 from "/logo/logo.png";
import "./leon.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";
import cement from "/homepageimg/sonmezcimento.jpg";
import energy from "/energy/energy.jpg";
import steel from "/steel/steel.jpeg";
import mining from "/mining/metalurji2.webp";
import port from "/homepageimg/thirdheroimage.jpeg";
import trading from "/services/services1.jpg";
import gas from "/gas/gas.jpeg";
import valve from "/valve/valve.jpeg";

function Leon() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div style={{ overflow: "hidden", pointerEvents: "auto" }}>
      <div
        style={{ overflow: "hidden", pointerEvents: "auto" }}
        className="h-[510px] my-10 inset-0 relative w-full justify-center items-center hidden md:flex"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${leonsphoto})`,
            filter: "blur(4px) brightness(80%)",
          }}
        ></div>
        <div
          className="flex flex-col justify-center items-center mb-20"
          data-aos="fade-up"
        >
          <div className="flex gap-5 items-center justify-center">
            <div className="hexagon font-semibold">
              <span>
                <Link
                  to="section3"
                  className="cursor-pointer hover:mb-4 duration-300 text-center"
                  smooth={true}
                  duration={500}
                >
                  GREEN <br /> ENERGY
                </Link>
              </span>
            </div>
            <div className="hexagon font-semibold">
              <span>
                {" "}
                <Link
                  to="section1"
                  className="cursor-pointer hover:mb-4 duration-300"
                  smooth={true}
                  duration={500}
                >
                  {" "}
                  CEMENT
                </Link>
              </span>
            </div>
            <div className="hexagon font-semibold">
              <span>
                <Link
                  to="section4"
                  className="cursor-pointer hover:mb-4 duration-300"
                  smooth={true}
                  duration={500}
                >
                  STEEL
                </Link>
              </span>
            </div>
            <div className="hexagon font-semibold">
              <span>
                <Link
                  to="section7"
                  className="cursor-pointer hover:mb-4 duration-300"
                  smooth={true}
                  duration={500}
                >
                  GAS
                </Link>
              </span>
            </div>
            <div className="hexagon text-center font-semibold">
              <span>
                <Link
                  to="section5"
                  className="cursor-pointer hover:mb-4 duration-300"
                  smooth={true}
                  duration={500}
                >
                  MINING AND METALLURGY
                </Link>
              </span>
            </div>
          </div>
          <div className="flex gap-5 items-center justify-center ">
            <div className="hexagon font-semibold">
              <span>
                <Link
                  to="section2"
                  className="cursor-pointer hover:mb-4 duration-300"
                  smooth={true}
                  duration={500}
                >
                  PORT
                </Link>
              </span>
            </div>
            <div className="hexagon font-semibold">
              <span>
                <Link
                  to="section8"
                  className="cursor-pointer hover:mb-4 duration-300"
                  smooth={true}
                  duration={500}
                >
                  VALVE
                </Link>
              </span>
            </div>

            <div className="hexagon flex items-center justify-center bg-transparent">
              <img src={logo2} className="mb-5 z-40 w-36" />
            </div>
            <div className="hexagon text-center font-semibold">
              <span>
                <Link
                  to="section6"
                  className="cursor-pointer hover:mb-4 duration-300"
                  smooth={true}
                  duration={500}
                >
                  TRADING AND LOGISTICS
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:hidden mt-10">
        <ul id="hexGrid">
          <li className="hex">
            <div className="hexIn">
              <Link
                className="hexLink cursor-pointer"
                smooth={true}
                duration={500}
                to="section3"
              >
                <div
                  className="img flex items-center justify-center"
                  style={{ backgroundImage: `url(${energy})` }}
                >
                  {" "}
                  <Link
                    to="section3"
                    smooth={true}
                    duration={500}
                    id="demo2"
                    className="font-semibold text-lg"
                  >
                   GREEN ENERGY
                  </Link>
                </div>
              </Link>
            </div>
          </li>

          <li className="hex">
            <div className="hexIn">
              <Link
                className="hexLink cursor-pointer"
                smooth={true}
                duration={500}
                to="section1"
              >
                <div
                  className="img flex items-center justify-center"
                  style={{ backgroundImage: `url(${cement})` }}
                >
                  {" "}
                  <Link id="demo2" className="font-semibold text-lg">
                    CEMENT
                  </Link>
                </div>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link
                className="hexLink cursor-pointer"
                smooth={true}
                duration={500}
                to="section4"
              >
                <div
                  className="img flex items-center justify-center"
                  style={{ backgroundImage: `url(${steel})` }}
                >
                  {" "}
                  <Link className="font-semibold text-lg">STEEL</Link>
                </div>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link
                className="hexLink cursor-pointer"
                smooth={true}
                duration={500}
                to="section5"
              >
                <div
                  className="img flex items-center justify-center"
                  style={{ backgroundImage: `url(${mining})` }}
                >
                  <Link id="demo2" className="font-semibold text-lg">
                    MINING AND METALLURGY
                  </Link>
                </div>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link
                className="hexLink cursor-pointer"
                smooth={true}
                duration={500}
                to="section2"
              >
                <div
                  className="img flex items-center justify-center"
                  style={{ backgroundImage: `url(${port})` }}
                >
                  <Link id="demo2" className="font-semibold text-lg">
                    PORT
                  </Link>
                </div>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link
                className="hexLink cursor-pointer"
                smooth={true}
                duration={500}
                to="section6"
              >
                <div
                  className="img flex items-center justify-center"
                  style={{ backgroundImage: `url(${trading})` }}
                >
                  <Link id="demo2" className="font-semibold text-lg">
                    TRADING AND LOGISTICS
                  </Link>
                </div>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link
                className="hexLink cursor-pointer"
                smooth={true}
                duration={500}
                to="section7"
              >
                <div
                  className="img flex items-center justify-center"
                  style={{ backgroundImage: `url(${gas})` }}
                >
                  <Link id="demo2" className="font-semibold text-lg">
                    GAS
                  </Link>
                </div>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link
                className="hexLink cursor-pointer"
                smooth={true}
                duration={500}
                to="section8"
              >
                <div
                  className="img flex items-center justify-center"
                  style={{ backgroundImage: `url(${valve})` }}
                >
                  <Link id="demo2" className="font-semibold text-lg">
                    VALVE
                  </Link>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Leon;
