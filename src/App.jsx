import React, { useState } from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Work from './components/Work'
import About from './components/About'
import Conatct from './components/Conatct'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Responsivenav from './components/Responsivenav'


const App = () => {
  const [anim,setanim]=useState(false)
  return (
    <div className='lg:w-full w-screen h-screen bg-black overflow-x-hidden realtive'>
      <h1 onClick={()=>setanim(true)} className='text-xl font-semibold md:hidden text-white cursor-pointer absolute top-[3.3%] mix-blend-difference right-[5%]'>. menu</h1>
      <Responsivenav anim={anim} setanim={setanim}/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Conatct/>}/>
      </Routes>  
      <Footer/>
    </div>
  )
}

export default App