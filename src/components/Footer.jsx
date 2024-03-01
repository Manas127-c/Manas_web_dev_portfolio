import React from 'react'

const Footer = () => {
    const date=new Date()
    const time=date.getHours()+':'+date.getMinutes()
  return (
    <div className='w-full h-20 bg-[#1C1D20] flex items-center justify-center gap-10'>
        <div className='flex gap-4 item-center justify-center'><h1 className='text-sm text-zinc-400 uppercase'>Version</h1><h1 className='text-white text-lg '>2024 © Edition</h1></div>
        <div className='flex gap-4 item-center justify-center'><h1 className='text-sm text-zinc-400 uppercase'>Current time</h1><h1 className='text-white text-lg '>{time}</h1></div>
    </div>
  )
}

export default Footer