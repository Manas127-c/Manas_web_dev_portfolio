import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import Framermotion from '../animation/Framermotion';
import Gsapmagnetic from '../animation/Gsapmagneic';
const Navbar = () => {
    const navdata=[{path:'/work',component:'work'},{path:'/about',component:'about'},{path:'/contact',component:'contact'}]
    const {pathname}=useLocation()
  return (
    <div className='w-full h-24 flex items-center justify-between  lg:px-12 px-3'>
        <Framermotion>
            <Link to='/' className='group flex  text-white items-center justify-center gap-2 '>
                <FaRegCopyright className='group-hover:rotate-[360deg] transition ease-in-out duration-1000'/>
                <div className=' font-medium  flex overflow-hidden text-lg capitalize w-[138px]  text-nowrap  '>
                    <div className='w-[138px]  lg:group-hover:-translate-x-[61%] flex transition ease-in-out duration-1000 gap-1'><h1>web-dev-manas </h1><h1> tripathy</h1></div>   
                </div>
            </Link>
            </Framermotion>
            
            <div className='hidden md:flex items-center justify-center text-white text-lg font-medium gap-14 capitalize '>
                {navdata.map((e,i)=>(<Framermotion key={i}><Link
            className={`group relative after:content-[""] after:w-[8px] after:h-[8px] after:bg-white after:rounded-full after:absolute after:-bottom-[30px] after:left-1/2 after:-translate-x-[50%] after:scale-0 hover:after:scale-100 ${pathname===e.path ? 'after:scale-100':'after:scale-0'} `} to={`${e.path}`}>{e.component}</Link></Framermotion>))}
            </div>
        </div>
  )
}

export default Navbar