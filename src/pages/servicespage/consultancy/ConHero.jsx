import React from "react";
import heroImage from "/services/services10.jpg";
import Navbar from "../../../components/navbar/Navbar";

function ConHero() {
  return (
    <section
      className="h-screen w-full"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        
      }}
    >
      <Navbar />
    </section>
  );
}

export default ConHero;
