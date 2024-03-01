import React from 'react'

const Form = () => {
  return (
    <div className='lg:w-[70%] md:w-[60%] w-[95%] h-full md:pl-0 pl-2 '>
            <form action="https://formspree.io/f/xayrjqrz" method='POST'>
              <hr className='w-full h-[1px] bg-zinc-500 mb-10'/>
              <label className='
              text-white text-3xl '><span className='text-sm text-zinc-400 mr-10'>01</span>What's your name</label>
              <input type="text" name="username" placeholder='Jhon Doe' required className=' outline-none md:w-[70%] w-[95%] h-14 bg-transparent ml-14 mt-5 text-2xl p-1 text-white' autoComplete='off' id="" />
              <hr className='w-full h-[1px] bg-zinc-500 my-10'/>
              <label className='
              text-white text-3xl '><span className='text-sm text-zinc-400 mr-10'>01</span>What's your email</label>
              <input type="email" name="Email" placeholder='Jhon@Doe.com' required className=' outline-none md:w-[70%] w-[95%] h-14 bg-transparent ml-14 mt-5 text-2xl p-1 text-white' autoComplete='off' id="" />
              <hr className='w-full h-[1px] bg-zinc-500 my-10'/>
              <label className='
              text-white text-3xl '><span className='text-sm text-zinc-400 mr-10'>01</span>What's your message</label>
              <textarea name='message' className='outline-none ml-14 mt-5 text-2xl  md:w-[70%] w-[95%] h-32 bg-transparent  text-white resize-none' required autoComplete='off'  placeholder='Hello manas,....'></textarea>
              <button type='submit' className='md:w-[70%] w-[100%] h-10 rounded-full bg-blue-600 text-white text-xl hover:bg-blue-400 duration-300 md:mb-0 mb-3'>SEND</button>
              </form>
          </div>
  )
}

export default Form