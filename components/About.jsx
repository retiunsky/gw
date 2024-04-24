import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div
      id="fixed-target"
      className="relative flex min-h-screen w-[100vw] md:w-[90vw] lg:w-[80vw] m-auto"
    >
      <h1
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
        className="absolute top-4 left-[0%] z-10 text-5xl xl:text-8xl drop-shadow-[0_5px_3px_rgba(0,0,0)]"
      >
        {''}
      </h1>
      <div
        data-scroll-target="#fixed-target"
        data-scroll
        data-scroll-sticky
        className="w-1/2 text-[1rem] lg:text-xl relative z-10 lg:mt-[15%] mt-0 LeftDiv"
      >
        {''}
      </div>
      <div >
       
        <div
         className="absolute left-[0%] bottom-[80%] w-[100%] smallImg2">
          <div
          style={{zIndex: -10}}
            data-scroll
            data-scroll-speed="-10"
            width="1750px"
            height="200px"
            layout="responsive"
          ></div>
       <Navbar/>

        </div>
      </div>
    </div>
  );
};

export default About;
