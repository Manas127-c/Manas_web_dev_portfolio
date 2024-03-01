import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
    const ref=useRef()
    const data=['HTML5','CSS',"JAVASCRIPT",'REACTJS','TAILWIND','REDUX','PHP']
  return (
    <div ref={ref} className='w-[80vw] h-[70vh] mx-auto rounded-xl border-[1px] border-zinc-400 flex flex-col items-start justify-start relative gap-3'>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[8vw] leading-none tracking-tight font-semibold text-zinc-700/25 pointer-events-none'>Skills.</h1>
            {data.map((e,i)=>(<motion.div drag dragConstraints={ref} className='w-[10vw] h-[3vw] rounded-full flex items-center justify-center text-white text-md border-[1px] border-white  cursor-grab'>{e}</motion.div>))}
      </div>
  )
}

export default Skills