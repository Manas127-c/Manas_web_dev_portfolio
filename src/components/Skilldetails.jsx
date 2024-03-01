import React from 'react'

const Skilldetails = () => {
    const data=[{name:'Design',desscription:'With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.'},{name:'Development',desscription:'I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. '}]
  return (
    <div className='w-full md:h-[50%] h-[60%] flex md:flex-row flex-col gap-10'>
          {data.map((e,i)=>(<div key={i} className='xl:w-[30%] md:w-[50%] md:h-full w-[95%] h-[50%] pl-5 pt-5'>
            <h1 className='text-xl text-zinc-400'>0{i+1}</h1>
            <hr className='my-10 w-full h-[1px] bg-zinc-400'/>
            <h1 className='text-4xl text-white'>{e.name}</h1>
            <p className='text-xl text-white mt-5'>{e.desscription}</p>
          </div>))}
    </div>
  )
}

export default Skilldetails