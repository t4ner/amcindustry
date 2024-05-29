import React, { useEffect, useState } from "react";
import firstheroimage from "/homepageimg/firstheroimage.jpg";
import secondheroimage from "/equipment/liman.jpg";
import thirdheroimage from "/homepageimg/turkmenbasi.jpg";
import Navbar from "../navbar/Navbar";
import "../../index.css"

function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgrounds = [firstheroimage, secondheroimage, thirdheroimage];
  const [text, setText] = useState();
  const [textTransition, setTextTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTextTransition(false);
    setTimeout(() => {
      if (currentBgIndex === 0) {
        setText("Your Solution Partner in Industrial Facilities");
      } else if (currentBgIndex === 1) {
        setText(
          "We provide support in all areas from turnkey factory installation to spare parts supply in the cement industry"
        );
      } else if (currentBgIndex === 2) {
        setText("Our goal is to produce economical and efficient solutions");
      }
      setTextTransition(true);
    }, 700);
  }, [currentBgIndex]);

  useEffect(() => {}, [currentBgIndex]);

  const styles = {
    backgroundImage: `url(${backgrounds[currentBgIndex]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "background-image 2s ease-in-out",
  };

  

  const textStyles = {
    transition: "opacity 0.5s linear",
    opacity: textTransition ? 1 : 0,
  };

  return (
    <section
      className="h-screen w-full relative bg-left md:bg-center"
      style={styles}
    >
      <Navbar />
      <div className="h-full w-full flex flex-col items-center justify-center  pl-1">
        <h1
          className="text-white font-semibold text-[36px] md:text-[66px] leading-[50px] md:leading-[73px] mr-auto w-full md:w-3/4 shadowText "
          style={textStyles}
        >
          {text}
        </h1>
      </div>
    </section>
  );
}

export default Hero;
