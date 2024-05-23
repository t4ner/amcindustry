import React from "react";
import stories1 from "/homepageimg/stories4.jpeg";
import stories2 from "/homepageimg/stories2.jpg";
import stories3 from "/homepageimg/stories3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Stories() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className=" bg-gray-100 mt-10 md:mt-16 py-5 md:p-10"
      data-aos="fade-up"
    >
      <div className="container ">
        <h3 className="text-2xl md:text-4xl mb-5">
          Latest insights and stories
        </h3>
        <div className="flex-col md:flex md:flex-row space-x-0 md:space-x-10">
          <div className="basis-1/3">
            <div>
              <img
                src={stories1}
                alt=""
                className="w-full h-[220px] md:h-[330px] object-top"
              />
            </div>
            <p className="my-4 px-2  md:px-0  text-base">
              The project consists in the supply of a fully automated coal
              export terminal with a total aggregated capacity of more than
              48.000 tph on 6 loading lines. Bedeschi Russia will actively
              contribute to the project management of the new OTEKO project in
              Taman.
              <p>
                The supply includes: 4 combined bucket wheel stacker-reclaimer
                16 kilometres of belt conveyors with relevant ancillaries
                equipment 4 shiploaders delivered fully erected to the terminal
                jetty.
              </p>
              <p>
                The combined stacker and reclaimer machines supplied have a
                rated capacity of 8000 t/h each, both in stacking and reclaiming
                mode. The system allows for the blending of different types of
                coal.
              </p>
            </p>
          </div>
          <div className="basis-1/3">
            <div>
              <img
                src={stories2}
                className="w-full h-[220px] md:h-[330px] object-cover"
              />
            </div>
            <p className="my-4 px-2 md:px-0 text-base">
              Medcem Port Projects has been established in Silifke/Taşucu
              Yeşilovacık. The handling capacity of our port is 8,000,000
              Mton/Year. After the completion of our port expansion project, our
              capacity will reach 10,000,000 Mton/Year
            </p>
          </div>
          <div className="basis-1/3">
            <div>
              <img
                src={stories3}
                alt=""
                className="w-full h-[220px] md:h-[330px] object-cover"
              />
            </div>
            <p className="my-4 px-2 md:px-0 text-base">
              Production has commenced on the QCC4 5500TPD Clinker Production
              Line Project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
