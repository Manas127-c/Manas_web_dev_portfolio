import React from 'react'

const Responsiveprojectlist = () => {
    const projectdata=[{name:'Moviehub',description:'Design & Development',image:'Project1.png',date:'2024'},{name:'OchiClone',description:'Design & Development',image:'https://assets.awwwards.com/awards/gallery/2022/09/ochi-interior-image01.jpg',date:'2024'},{name:'SundownStudio',description:'Design & Development',image:'https://d2ocroys3p1hkd.cloudfront.net/e39ffe12d83bec2129917dc74f05b83e.jpg',date:'2023'},{name:'WeatherApp',description:'Design & Development',image:'https://i.pinimg.com/originals/bf/eb/42/bfeb42b7b212eb18591c941be9425120.png',date:'2022'}]
  return (
    <div className='xl:hidden w-full min-h-[100vh] bg-black'>
        {projectdata.map((e,i)=>(<div key={i} className='gap-5 w-full flex flex-wrap items-start justify-center'>
            <img className='w-[90%] h-[40vh] object-cover' src={e.image} alt="" />
            <h1 className='my-5 text-2xl text-white font-semibold'>{e.name}</h1>
            <hr className='mb-5 w-[90%] h-[1px] bg-white'/>
            <div className='flex items-center justify-center gap-28 mb-10'>
                <div className='text-zinc-400 text-lg'>{e.description}</div>
                <div className='text-zinc-400 text-lg'>{e.date}</div>
            </div>
        </div>))}
    </div>
  )
}

export default Responsiveprojectlist