import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import Hero from './Hero';
import Homeabout from './Homeabout';
import Responsiveprojectlist from './Responsiveprojectlist';

const Home = () => {
    document.title='Manas Tripathy.React developer'
  return (
    <div className='w-full h-full bg-black'>
        <Hero/>
        <Homeabout/>
        <Responsiveprojectlist/>
        </div>

  )
}

export default Home