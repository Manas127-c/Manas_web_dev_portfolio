import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Aboutdetails = () => {
  return (
    <div className='xl:w-[70vw] w-full h-[100vh]  mx-auto flex md:flex-row flex-col gap-10 items-center justify-center'>
          <div className='md:w-[40%] md:h-full h-[64vh]  relative'>
          <IoIosArrowRoundForward className='absolute text-white text-2xl left-0 top-0'/>
          <div className='ml-10 mt-10'><p className='text-md text-white'>I am Manas Tripathy, a front-end developer with a background in Master of Computer Application. I am known for my expertise in React and JavaScript, specializing in website development. Passionate about bodybuilding, cooking, and UI designing, I spend my free time gaming and am always eager to create amazing, responsive websites, including hosting.</p></div>
          <div className='ml-10 mt-10 '><h1 className='text-xl text-zinc-400'>Education Details</h1>
          <h1 className='md:text-xl text-sm text-white mt-5'>Master in Computer Application (MCA)</h1>
          <h1 className='md:text-md text-sm text-white'>College of it and management education (2023)</h1>
          <h1 className='md:text-md text-sm text-white'>8.83 CGPA</h1>
          <h1 className='md:text-xl text-sm text-white mt-5'>Bachelor in Computer Application (BCA)</h1>
          <h1 className='md:text-md text-sm text-white'>Bhanja college of computer and management (2021)</h1>
          <h1 className='md:text-md text-sm text-white mb-10'>8.3 CGPA</h1>

          <a className='px-4 py-2 bg-blue-500 mt-10 rounded-full text-white' target='blank' href="Manas_CV_2024.pdf" download>Download CV</a>
          </div>
          </div>
          
          <div className='md:w-[50%] w-[95%] md:h-full h-[50vh]  relative'>
            <img className='w-full h-full object-cover' src="Photo.jpg" alt="" />
          </div>
      </div>
  )
}

export default Aboutdetails