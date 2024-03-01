import React from "react";
import Framermotion from "../animation/Framermotion";
import { Link } from "react-router-dom";
import Projectlist from "./Projectlist";

const Homeabout = () => {
  return (
    <div className="w-full xl:min-h-[100vh] min-h-[50vh] bg-black relative pt-[37%]">
      <div className="w-full h-[30vh]  absolute md:top-[10%] top-0 md:flex md:flex-row flex-col items-center justify-center gap-20 md:gap-20 pl-5 md:pl-0">
        <div className="md:h-full xl:w-[40%] md:w-[60%] w-full h-[40%]">
          <p className="text-white md:text-3xl text-xl md:leading-[50px]  leading-[30px]">
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </p>
        </div>
        <div className="md:h-full xl:w-[17%] md:w-[22%] w-[50%] h-[50%] mt-5 md:mt-0 text-xl text-white">
          <p>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
        </div>
      </div>
      <Link to='/about' className="absolute w-[12vw] h-[12vw] left-[65%] xl:left-[65%] md:left-[75%] xl:top-[20%] md:top-[60%] top-[40%]  flex items-center justify-center rounded-full text-xl font-medium">
        <Framermotion>
          <div className="xl:w-[12vw] xl:h-[12vw] md:w-[20vw] md:h-[20vw] w-[30vw] h-[30vw] rounded-full bg-white flex items-center justify-center hover:bg-blue-500 duration-300 hover:text-white">
            <Framermotion>
              <h1 className="p-2">About Me</h1>
            </Framermotion>
          </div>
        </Framermotion>
      </Link>
      
      <Projectlist/>
    </div>
  );
};

export default Homeabout;
