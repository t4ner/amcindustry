import shredded from "/valve/valve.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Valve() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="section8" className="mt-10 top" data-aos="fade-left">
      <div className="px-4 md:px-20">
        <h2 className="text-2xl md:text-5xl mb-1">Valve Manufacturing</h2>
      </div>

      <div className="bg-gray-100  flex-col lg:flex lg:flex-row items-center ">
        <div className="basis-2/3 h-full relative lg:order-2">
          <img
            src={shredded}
            alt="Who We Are"
            className="h-[350px] lg:h-[590px] w-full object-cover"
          />
        </div>
        <div className="basis-1/2 p-3 md:px-20 relative lg:order-1">
          {" "}
          <ul className="text-base md:text-lg">
            <li>Hot Blast Valve </li>
            <li>Eccentric Butterfly Valve</li>
            <li>Link Lever Butterfly Valve </li>
            <li>Fan-shaped Blind Plate Valve </li>
            <li>Enclosed type Goggle Valve </li>
            <li>Open type Goggle Valve</li>
          </ul>
          <p className="text-base md:text-lg mt-2">
            Standard valve products including: Water control valve, grooved
            connection valve, gate valve, globe valve, ball valve, butterfly
            valve, check valve, balance valve, regulating valve, special gate
            valve for power plant, etc. which are widely used in power, steel,
            petroleum, petrochemical, chemical, water conservancy, municipal,
            construction, shipbuilding, food, medicine and other industries. The
            valves are manufactured and accepted according to the national and
            industrial standards, and can also be manufactured according to
            American API, ANSI, Japanese JIS, JPI, British BS, German DIN
            standard, etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Valve;
