import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Framermotion from '../animation/Framermotion'
import { GoArrowDownRight } from "react-icons/go";
import Form from './Form';
import Contactdetails from './Contactdetails';

const Conatct = () => {
  document.title='Manas | Contact'
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
  const smooth={damping:30,stiffness:250,mass:0.5}
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
    <div className='w-full min-h-[100vh] bg-black relative'>
        <motion.div variants={variants} animate={cursor} style={{left:smoothmouse.x,top:smoothmouse.y}} className='xl:block hidden w-[1vw] h-[1vw] -translate-x-[50%] -translate-y-[50%] bg-white rounded-full fixed pointer-events-none'></motion.div>
      <div className='xl:w-[70vw] w-full xl:h-[30vh] lg:h-[30vh] md:h-[20vh] h-[15vh] xl:mt-32 mt-20  text-white xl:text-[6vw] text-[11vw] md:leading-[90px] leading-[50px] xl:pl-72 pl-2'>
        <h1 onMouseEnter={enter} onMouseLeave={leave} className=' mix-blend-difference'>Let's start a</h1>
        <h1 onMouseEnter={enter} onMouseLeave={leave} className=' mix-blend-difference'>Project together</h1>
      </div>
      <img className='absolute xl:w-[6.5vw] xl:h-[6.5vw] lg:w-[12vw] lg:h-[12vw] w-[16vw] h-[16vw] object-cover rounded-full xl:right-[20%] right-[20%] xl:top-[10%] -top-[1%] ' src="picofme.png" alt="" />
      <GoArrowDownRight className='absolute text-2xl text-white xl:right-[32%] lg:right-[23%] md:right-[30%] right-[90%] xl:top-[23%] lg:top-[23%] md:top-[18%] top-[10%]'/>
      <div className='xl:w-[70%] w-full md:h-[100vh] min-h-[100vh] mx-auto mt-20 flex md:flex-row flex-col-reverse md:pl-2 xl:pl-0'>
          <Form/>
          <Contactdetails/>
      </div>
    </div>
  )
}

export default Conatct