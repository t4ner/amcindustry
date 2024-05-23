import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import WhoWeAre from "./pages/whoweare/WhoWeAre";
import Services from "./pages/services/Services";
import TradingServices from "./pages/tradingservices/TradingServices";
import Construction from "./pages/constructionservices/Construction";
import Equipment from "./pages/equipmet/Equipment";
import FinanceSolutions from "./pages/finance/FinanceSolutions";
import Contact from "./pages/contact/Contact";
import Clinker from "./pages/clinker/Clinker";
import Coal from "./pages/coal/Coal";
import Alternative from "./pages/alternative/Alternative";
import WorldMap from "./pages/worldmap/WorldMap";
import ProjectManagement from "./pages/servicespage/projectmanagement/ProjectManagement";
import Engineering from "./pages/servicespage/engineering/Engineering";
import { animateScroll } from "react-scroll";
import Consultancy from "./pages/servicespage/consultancy/Consultancy";
import Licensing from "./pages/servicespage/licensing/Licensing";
import { useEffect } from "react";

function App() {

  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trading-services" element={<TradingServices />} />
        <Route path="/construction-services" element={<Construction />} />
        <Route path="/finance-solutions" element={<FinanceSolutions />} />
        <Route path="/equipment-supply-services" element={<Equipment />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/licensing" element={<Licensing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clinker-and-cement-trading" element={<Clinker />} />
        <Route path="/coal-trading" element={<Coal />} />
        <Route path="/alternative-fuels" element={<Alternative />} />
        <Route path="/world-map" element={<WorldMap />} />
      </Routes>
    </div>
  );
}

export default App;
