import React, { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Purpose from "./components/Purpose";
import Commodities from "./components/Commodities";
import Cements from "./components/Cements";
import Stories from "./components/Stories";
import Footer from "../../components/footer/Footer";
import Port from "./components/Port";
import Energy from "./components/Energy";
import Steel from "./components/Steel";
import Mining from "./components/Mining";
import Trading from "./components/Trading";
import Leon from "./components/Leon";
import Gas from "./components/Gas";
import Valve from "./components/Valve";

function HomePage() {
  return (
    <>
      <Hero />
      {/* <Purpose /> */}
      {/* <Commodities /> */}
      <div style={{ overflow: "hidden", pointerEvents: "none" }}>
        <Leon />
        <Port />
        <Energy />
        <Gas />
        <Cements />
        <Steel />
        <Valve />
        <Trading />
        <Mining />
        <Stories />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
