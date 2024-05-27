import React from "react";
import WHero from "./components/WHero";
import industryicon from "/whoweare/industryicon.svg";
import marketingicon from "/whoweare/marketingicon.svg";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FiftySection from "./components/FiftySection";
import Footer from "../../components/footer/Footer";
import WeAreLeon from "./components/WeAreLeon";
import Leadership from "./components/Leadership";
import WhoWeAreWorldMap from "./components/WhoWeAreWorldMap";

function WhoWeAre() {
  return (
    <div style={{ overflow: "hidden", pointerEvents: "none" }}>
      <WHero />
      <div className="container md:w-1/2 mt-10 md:mt-20  space-y-10">
        {/* <div className="flex-col md:flex md:flex-row items-center">
          <div className="ml-4 basis-1/5 md:ml-0 w-12 md:w-52 ">
            <img src={industryicon} alt="" />
          </div>
          <div className="basis-4/5 space-y-2 ml-4">
            <h3 className="text-2xl md:font-semibold">Industrial</h3>
            <p className=" md:text-lg">
              LEON is a joint venture dedicated to the Cement Building Materials
              and Environmental Protection business, serving heavy industries
              such as Cement Industry, Lime, AAC Blocks, Waste Incineration
              Process, Sulfur Removal, and Denitrification. It provides EP
              (Engineering and Procurement) Services, EPS (Engineering,
              Procurement & Services), Consulting, Spare Parts Supply, Upgrades,
              Operation, and Maintenance Services worldwide
            </p>{" "}
          </div>
        </div>
        <div className="md:flex items-center">
          <div className="ml-4 basis-1/5 md:ml-0 w-12 md:w-52">
            <img src={marketingicon} alt="" />
          </div>
          <div className="basis-4/5 space-y-2 ml-4">
            <h3 className="text-2xl md:font-semibold ">Marketing</h3>
            <p className=" md:text-lg">
              We move commodities from where they are plentiful to where they
              are needed
            </p>{" "}
          </div>
        </div> */}
      </div>
      {/* <WeAreLeon /> */}
      {/* <FirstSection /> */}
      {/* <SecondSection /> */}
      {/* <ThirdSection /> */}
      {/* <FourthSection /> */}
      {/* <FiftySection /> */}
      <p className="container md:text-lg px-3 md:px-0">
        AMC FOREIGN TRADE INDUSTRY AND MINING INC. is a company that has been
        providing services in industrial facilities for many years, primarily in
        the Cement, Iron & Steel, Energy, and Mining sectors. It places great
        importance on customer satisfaction, striving for excellence, continuous
        improvement, and surpassing customer expectations, all of which have
        remained central to the company's core values. Its team, comprised of
        highly experienced professionals and expert engineers, consistently
        brings innovations for clients and utilizes new technological
        advancements.
      </p>
      {/* <Leadership /> */}
      <WhoWeAreWorldMap />
      <Footer />
    </div>
  );
}

export default WhoWeAre;
