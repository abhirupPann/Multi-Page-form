import React from 'react'
import img from "../assets/7501.jpg"
function Page3() {

  
  return (
    <div className='flex justify-between text-gray-500  text-[0.7rem] sm:text-base my-[5rem] w-full'>
      <div><img src={img} alt="" className=' w-[20vw] mr-[5vw] mt-[9.5vh] sm:mt-0' /></div>
      <div className='w-[32vw] ml-[5vw] pt-[5vh]'>
        <h1 className='text-black text-3xl font-bold tracking-tighter my-[3vh]'>You're in the right place</h1>
        <p className=' text-gray-600 font-medium mr-[0.5vw]'>Brilliant gets you hands-on to help improve your professional 
          skills and knowledge. You'll interact with concepts and solve 
          fun problems in math, science, and computer science.
        </p>
      </div>
    </div>
  )
}

export default Page3
