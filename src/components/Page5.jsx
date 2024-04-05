import React from 'react'
import img from "../assets/8900_1_08.jpg"
import { RiStarSFill } from "react-icons/ri";
function Page5() {

  
  return (
    
    <div className='flex justify-between text-gray-500  text-[0.58rem] sm:text-base my-[5rem] w-full'>
      <div><img src={img} alt="" className=' w-[20vw] mr-[5vw] mt-[6.8vh] sm:mt-0'/></div>
      <div className='w-[32vw] ml-[5vw] pt-[2vh]'>
        <h1 className='text-black text-3xl font-bold tracking-tighter my-[3vh]'>You're on your way!</h1>
        <ul className='flex'>
          <li><RiStarSFill/></li>
          <li><RiStarSFill/></li>
          <li><RiStarSFill/></li>
          <li><RiStarSFill/></li>
          <li><RiStarSFill/></li>
        </ul>
        <p className=' text-gray-600 font-medium mr-[0.5vw]'><i>"Through its engaging and well-structured courses, Brilliant has taught me
         mathematical concepts that I previously struggling to understand. I now feel confident approaching both technical job interview and real world problem solving situations."
         <br />
         <br />
         - Jacob S.</i>
        </p>
      </div>
    </div>
  )
}

export default Page5
