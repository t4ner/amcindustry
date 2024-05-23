import React, { useEffect } from "react";
import AltHero from "./AltHero";
import alternative2 from "/alternative/alternative2.jpg";
import alternative3 from "/alternative/alternative3.jpg";
import alternative4 from "/alternative/alternative4.jpg";
import Footer from "../../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"

function Alternative() {
  useEffect(() => {
    AOS.init({duration:2000})
   }, [])
  return (
    <div>
      <AltHero />
      <div className="mt-10 md:mt-20 px-4 md:px-0 container" style={{ overflow: 'hidden', pointerEvents: 'none' }}  >
        <div  data-aos="fade-left">    <h3 className="md:text-lg font-semibold mb-2">SHREDDED TYRES</h3>
        <h3 className="md:text-lg ">
          LEON TRADING can offer RDF, shredded tyres from ITALY thru our
          partners: Gruppo Agovino and SMOCO SRL. SMOCO SRL is an Italian
          EnvIronmental Consulting Company, created to provide the know-how we
          have gained regarding smart & proper management of waste destined to
          energy recovery to third party companies. SMOCO SRL is able to supply
          alternative fuels destined to Energy Recovery, in the ﬁrst place
          end-of-life shredded tires and SRF. Key International Groups take
          advantage of the services and products oﬀered by SMOCO SRL.
        </h3></div>
    
      </div>
      <div className="flex-col md:flex md:flex-row md:space-x-10 mt-10 md:mt-20"  data-aos="fade-right">
        <div className="basis-1/2">
          <img
            src={alternative2}
            className="h-[250px] md:h-full w-full object-cover"
          />
        </div>
        <div className="basis-1/2">
          <img
            src={alternative3}
            className="h-[250px] md:h-full my-10 md:my-0 w-full object-cover"
          />
        </div>
        <div className="basis-1/2">
          <img
            src={alternative4}
            className="h-[250px] md:h-full w-full object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Alternative;
