import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const Projectlist = () => {
  const projectdata=[{name:'Moviehub',description:'Design & Development',image:'Project1.png'},{name:'OchiClone',description:'Design & Development',image:'https://assets.awwwards.com/awards/gallery/2022/09/ochi-interior-image01.jpg'},{name:'SundownStudio',description:'Design & Development',image:'https://d2ocroys3p1hkd.cloudfront.net/e39ffe12d83bec2129917dc74f05b83e.jpg'},{name:'WeatherApp',description:'Design & Development',image:'https://i.pinimg.com/originals/bf/eb/42/bfeb42b7b212eb18591c941be9425120.png'}]

  const [pos,setpos]=useState(0)

  const move=(i)=>{
    setpos(i*21)
  }
  return (
    
    <div className='xl:block hidden group  w-full min-h-[100vh]  mx-auto  realtive'>
        <div className='w-full h-[13vh] border-b-[1px] border-white text-zinc-400 text-lg font-light flex items-center justify-start pl-14'><h1>Projects</h1></div>
      <div className='w-full h-[84rem] relative'>
      <motion.div
      initial={{ y: pos }}
      animate={{ y: pos + "rem" }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
      className='box absolute top-0 left-[40%] w-[30vw] h-[21rem] overflow-hidden bg-red-400 duration-300 pointer-events-none'>
        {projectdata.map((e,i)=>(<motion.div
            key={i}
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-red-100 flex items-center justify-center relative"
          >
            <div className='absolute w-[5vw] h-[5vw] rounded-full flex items-center justify-center text-white uppercase bg-blue-500'>
              
                
                <h1>view</h1>
              
            </div>
            <img className='w-full h-full object-cover' src={e.image} alt="" />
          </motion.div>))}
        
      
      </motion.div>
        {projectdata.map((e,i)=>(<Link key={i} onMouseEnter={()=>move(i)} className='w-full h-[21rem] border-b-[1px] flex items-center justify-between px-20 hover:px-16 hover:text-zinc-400 duration-300 text-white ease-linear'>
          <h1 className=' text-6xl'>{e.name}</h1>
          <h1 className='text-md  '>{e.description}</h1>
        </Link>))}
      </div>
    </div>
  )
}

export default Projectlist