import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Projectlist from './Projectlist'
import Responsiveprojectlist from './Responsiveprojectlist'
const Work = () => {
  document.title='manas | Projects'
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
    <div ref={box} className='w-full min-h-[100vh] bg-black'>
      <motion.div variants={variants} animate={cursor} style={{left:smoothmouse.x,top:smoothmouse.y}} className='lg:block hidden w-[1vw] h-[1vw] -translate-x-[50%] -translate-y-[50%] bg-white rounded-full fixed pointer-events-none'></motion.div>
      <div className='xl:w-[70vw] w-full md:h-[30vh] h-[30vh] xl:mt-32 mt-20  text-white xl:text-[6vw] text-[11vw] md:leading-[90px] leading-[50px] xl:pl-72 pl-2'>
        <h1 onMouseEnter={enter} onMouseLeave={leave} className=' mix-blend-difference'>Creating next level</h1>
        <h1 onMouseEnter={enter} onMouseLeave={leave} className=' mix-blend-difference'>digital products</h1>
      </div>
      <Projectlist/>
      <Responsiveprojectlist/>
    </div>
  )
}

export default Work