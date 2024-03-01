import React from 'react'
import Gmae from './Gmae'
import { GoArrowDownRight } from "react-icons/go";
const Hero = () => {
  return (
    <div className='w-full h-[90vh]  relative'>
        
        <div className='w-full h-full relative '>
            <Gmae />
            <div className='text-4xl text-white w-[250px] h-[230px]  absolute xl:right-[10%] right-[10%] md:right-1/2 md:translate-x-[50%] xl:translate-x-0  xl:bottom-[40%] bottom-[10%] flex flex-col item-start justify-between '>
                <GoArrowDownRight />
                <h1 className='flex flex-col lg:text-7xl text-5xl gap-3'><span>React.js</span><span>Developer</span></h1>
            </div>
        </div>
        </div>
  )
}

export default Hero