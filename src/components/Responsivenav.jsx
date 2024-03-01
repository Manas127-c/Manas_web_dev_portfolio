import React from 'react'
import { TfiClose } from "react-icons/tfi";
import { Link, useLocation } from 'react-router-dom';

const Responsivenav = ({anim,setanim}) => {
    const navdata=[{path:'/' ,component:'home'},{path:'/work',component:'work'},{path:'/about',component:'about'},{path:'/contact',component:'contact'}]
    const {pathname}=useLocation()
  return (
    <div className={`fixed z-[99] top-0 right-0 w-0 h-full bg-[#1C1D20] duration-300 ${anim ? 'w-full' :'w-0'} flex flex-col`}>
        <div className='w-[100%] h-[10%] flex items-center justify-end pr-4'>
            <div onClick={()=>setanim(false)} className='w-[15%] h-[60%] bg-[#455CE9] rounded-full flex items-center justify-center'>
            <TfiClose className=' text-[#98A5F3] text-2xl '/>
            </div>
        </div>
            <div className='w-[100%] h-[75%] flex flex-col items-start justify-start px-4'>
                <h1 className='uppercase text-sm font-bold text-[#8A8B8C]'>navigation</h1>
                <hr className='w-full h-[1px] bg-[#8A8B8C] my-5'/>
                {navdata.map((e,i)=>(<Link key={i} onClick={()=>setanim(false)}
            className={`group relative text-white text-5xl capitalize mb-5 after:content-[""] after:w-[12px] after:h-[12px] after:bg-white after:rounded-full after:absolute after:top-1/2 after:-right-[140%] after:-translate-x-[50%] after:scale-0 hover:after:scale-100 ${pathname===e.path ? 'after:scale-100':'after:scale-0'} `} to={`${e.path}`}>{e.component}</Link>))}
            </div>
            <div className='w-[100%] h-[15%] flex flex-col items-start justify-start px-4'>
                <h1 className='uppercase text-sm font-bold text-[#8A8B8C]'>navigation</h1>
                <hr className='w-full h-[1px] bg-[#8A8B8C] my-5'/>
                <div className='flex gap-10 text-white font-bold'>
                    <a target='blank' href="https://www.linkedin.com/in/manas-22a865196/">Linkedin</a>
                    <a target='blank' href="https://github.com/Manas127-c">Github</a>
                    <a target='blank' href="https://www.instagram.com/manas_ur_man/">Instagram</a>
                    <a target='blank' href="https://www.facebook.com/profile.php?id=100010462602601">Facebook</a>
                </div>
            </div>
    </div>
  )
}

export default Responsivenav