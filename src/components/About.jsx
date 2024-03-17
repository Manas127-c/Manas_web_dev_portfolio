import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Aboutdetails from './Aboutdetails';
import { SyncLoader } from 'react-spinners';
import Skilldetails from './Skilldetails';
import Skills from './Skills';
import Certifications from './Certifications';

const About = () => {
  document.title='Manas | about'
  const box=useRef(null)
  const mouse={
    x:useMotionValue(0),
    y:useMotionValue(0),
  }

  const mousemove=(e)=>{
    const {clientX,clientY}=e;
    mouse.x.set(clientX)
    mouse.y.set(clientY)
  }
  const smooth={damping:20,stiffness:200,mass:0.5}
  const smoothmouse={
    x:useSpring(mouse.x,smooth),
    y:useSpring(mouse.y,smooth)
  }
  useEffect(()=>{
    window.addEventListener('mousemove',mousemove)
    return ()=>{
      window.removeEventListener('mousemove',mousemove)
    }
  },[])
  const [cursor,setcursor]=useState('default')
  const variants={
    default:{
      width:20,
      height:20
    },
    text:{
      width:100,
      height:100
    },
  }
  const enter=()=> setcursor('text')
  const leave=()=> setcursor('default')
  return (
    <div className='w-full min-h-[100vh] bg-black pb-5'>
        <motion.div variants={variants} animate={cursor} style={{left:smoothmouse.x,top:smoothmouse.y}} className='xl:block hidden w-[1vw] h-[1vw] -translate-x-[50%] -translate-y-[50%] bg-white rounded-full fixed pointer-events-none'></motion.div>
      <div className='xl:w-[70vw] w-full md:h-[30vh] h-[30vh] xl:mt-32 mt-20  text-white xl:text-[6vw] text-[11vw] md:leading-[90px] leading-[50px] xl:pl-72 pl-2'>
        <h1 onMouseEnter={enter} onMouseLeave={leave} className=' mix-blend-difference'>React.js developer</h1>
        <h1 onMouseEnter={enter} onMouseLeave={leave} className=' mix-blend-difference'>Manas tripathy</h1>
      </div>
      <hr className='xl:w-[61vw] w-[97vw] h-[1px] bg-zinc-400 mx-auto my-10 mb-20'/>
      <Aboutdetails/>
      <div className=' xl:w-[80vw] w-[95vw] xl:h-[70vh] md:h-[50vh] h-[100vh]  mt-20 mx-auto'>
        <div className='w-full h-[20%]  flex  items-center justify-start gap-3'>
          <h1 className='md:text-6xl text-4xl  text-white'>I can help you with</h1><SyncLoader
        color='white'
        loading={true}
        margin={4}
        size={8}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
        <Skilldetails/>
      </div>
      <div className='xl:w-[80vw] w-[95vw] min-h-[70vh]  mx-auto'>
        <div className='w-full h-[20%]  flex items-center justify-start gap-3'>
          <h1 className='md:text-6xl text-4xl  text-white'>Certificate & Internships</h1>
        </div>
        <Certifications/>
      </div>
    </div> 
  )
}

export default About