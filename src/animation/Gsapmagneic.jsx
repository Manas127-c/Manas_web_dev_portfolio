import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/gsap-core";

export default function Gsapmagnetic({children}){
    const ref=useRef(null)
    const [position,setposition]=useState({x:0,y:0})
useEffect(()=>{
    const xTo=gsap.quickTo(ref.current,'x',{duration:1,ease:'elastic.out(1,0.3)'})
    const yTo=gsap.quickTo(ref.current,'y',{duration:1,ease:'elastic.out(1,0.3)'})
    const mousemove=(e)=>{
        const {clientX,clientY}=e
        const {width,height,left,top}=ref.current.getBoundingClientRect()
        const x=clientX-(left+width/2)
        const y=clientY-(top+height/2)
        // setposition({x,y})
        gsap.registerPlugin(gsap.to(ref.current,{x:x}))
        gsap.registerPlugin(gsap.to(ref.current,{y:y}))
        
        
    }
    const mouseleave=()=>{
        // setposition({x:0,y:0})
        gsap.to(ref.current,{x:0})
        gsap.to(ref.current,{y:0})
    }
    // const {x,y}=position
    ref.current.addEventListener('mousemove',mousemove)
    ref.current.addEventListener('mouseleave',mouseleave)

    return ()=>{
        ref.current.removeEventListener('mousemove',mousemove)
    ref.current.removeEventListener('mouseleave',mouseleave)
    }
},[])
    
    return(
        <div ref={ref}>
            {
                children
            }
        </div>
    )
}