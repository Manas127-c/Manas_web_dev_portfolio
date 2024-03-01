import React, { useEffect, useState } from "react";
import Framermotion from "../animation/Framermotion";

const Gmae = () => {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;

      let dx = x - window.innerWidth / 2;
      let dy = y - window.innerHeight / 2;

      let angle = Math.atan2(dy, dx) * (180 / Math.PI) - 180;
      setrotate(angle);
    });
  });
  return (
    <div className="flex gap-10  absolute xl:left-[40%] left-1/2 xl:top-1/2  top-[35%] -translate-x-[50%] -translate-y-[50%]">
      <div className="xl:w-[15vw] xl:h-[15vw] w-[30vw] h-[30vw] bg-white rounded-full flex items-center justify-center">
        <Framermotion>
          <div className="xl:w-[9vw] xl:h-[9vw] w-[20vw] h-[20vw] relative bg-zinc-800 rounded-full ">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
              className="w-full h-[15%] absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%]  ease-linear"
            >
              <div className="w-[15%] h-full bg-white rounded-full"></div>
            </div>
          </div>
        </Framermotion>
      </div>

      <div className="xl:w-[15vw] xl:h-[15vw] w-[30vw] h-[30vw] bg-white rounded-full flex items-center justify-center">
        <Framermotion>
          <div className="xl:w-[9vw] xl:h-[9vw] w-[20vw] h-[20vw] relative bg-zinc-800 rounded-full ">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
              className="w-full h-[15%] absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%]  ease-linear"
            >
              <div className="w-[15%] h-full bg-white rounded-full"></div>
            </div>
          </div>
        </Framermotion>
      </div>
    </div>
  );
};

export default Gmae;
