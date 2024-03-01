import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Framermotion({children}){
    const ref=useRef(null)
    const [position,setposition]=useState({x:0,y:0})
    const mousemove=(e)=>{
        const {clientX,clientY}=e
        const {width,height,left,top}=ref.current.getBoundingClientRect()
        const x=clientX-(left+width/2)
        const y=clientY-(top+height/2)
        // const x=(((clientX-left)/ref.current.offsetWidth)-0.5)
        // const y=(((clientX-top)/ref.current.offsetHeight)-0.5)
        // x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrength,
        setposition({x:x*0.5,y:y*0.5})
    }
    const mouseleave=()=>{
        setposition({x:0,y:0})
    }
    const {x,y}=position
    return(
        <motion.div 
        onMouseMove={mousemove}
        onMouseLeave={mouseleave}
        animate={{x,y}}
        transition={{type:'spring',stiffness:150,damping:15,mass:0.1}}
        ref={ref}>
            {
                children
            }
        </motion.div>
    )
}