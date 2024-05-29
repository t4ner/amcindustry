import React, { useEffect, useState } from "react";
import thirdheroimage from "/whoweare/heroimage10.jpg";
import secondheroimage from "/whoweare/heroimage11.webp";
import firstheroimage from "/whoweare/heroimage12.webp";
import Navbar from "../../../components/navbar/Navbar";

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
        setText("We are AMC Industry");
      } else if (currentBgIndex === 1) {
        setText(
          "We support nearly 80 clients through our 32 employees and offices in 5 countries"
        );
      } else if (currentBgIndex === 2) {
        setText("We share our experiences in the industrial sector with you");
      }
      setTextTransition(true);
    }, 700);
  }, [currentBgIndex]);

  useEffect(() => {}, [currentBgIndex]);

  const styles = {
    backgroundImage: `url(${backgrounds[currentBgIndex]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transition: "background-image 2s ease-in-out",
    overflow: "hidden",
    pointerEvents: "auto",
  };

  const textStyles = {
    transition: "opacity 0.5s linear",
    opacity: textTransition ? 1 : 0,
  };

  return (
    <section className="h-screen w-full relative " style={styles}>
      <Navbar />
      <div className="h-full w-full flex flex-col items-center justify-center  pl-1">
        <h1
          className="text-white text-[36px] md:text-[66px] leading-[50px] md:leading-[73px] mr-auto w-full md:w-3/4 font-semibold shadowText"
          style={textStyles}
        >
          {text}
        </h1>
      </div>
    </section>
  );
}

export default Hero;
