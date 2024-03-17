import React from 'react'

const Certifications = () => {
    const data=[{name:'Frontend Domination ',source:'Sheriyans coding school',image:'cetificate1.png',date:'Nov 2023 to Feb 2024'},{name:'Web Developer intern',source:'Internpe',image:'Internpe.png',date:'Feb 2024 to Mar 2024'},{name:'Web Developer intern',source:'Codsoft',image:'codsoft_internship.png',date:'Feb 2024 to Mar 2024'}]
  return (
    <div className='w-full xl:h-[50%] md:h-[60%] min-h-[30vh]  flex md:flex-row flex-col  gap-10'>
          {data.map((e,i)=>(<div key={i} className='xl:w-[30%] w-full h-full md:pl-5 pl-1 pt-5'>
            <h1 className='text-xl text-zinc-400'>{e.name}({e.date})</h1>
            <hr className='my-10 w-full h-[1px] bg-zinc-400'/>
            <h1 className='text-2xl text-white'>{e.source}</h1>
            <img className='w-full h-[100%] object-cover' src={e.image} alt="" />
          </div>))}
    </div>
  )
}

export default Certifications