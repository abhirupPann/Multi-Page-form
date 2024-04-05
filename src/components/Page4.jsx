import React from 'react'
import { useState, useEffect } from 'react'
import "../App.css"
import basicMa from "../assets/6596185.jpg"
import basicAl from "../assets/455551.jpg"
import intermAl from "../assets/4706224.jpg"
import calculus from "../assets/4542742.jpg"
function Page4(props) {

  //--------All the useState functions-------
  const[select, setSelect]=useState(false)

  //--------Div onclick function----------
  const handleOnclick = () =>{
      setSelect(true)
  }

  //--------Sending select value to Form component using isSelected prop-------
  useEffect(()=>{
    props.isSelected(select)
  }, [select])

  
  return (
    <div className=' mb-[5vh]'>
          <div className="text-gray-500  flex flex-col items-center text-[0.58rem] sm:text-base">
      <h1 className=' text-black text-3xl font-bold tracking-tighter my-[3vh] '>What is your math comfort level?</h1>
      <p className=' mb-[5vh]'>Choose the highest level you feel confident in- you can always adjust later.</p>
      <ul className=' flex flex-wrap gap-3'>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[15vw] h-[10vh] sm:h-[25vh] flex flex-col items-center justify-around px-[2vw] focus:border-red-500 focus:shadow-xl text-[0.55rem] sm:text-[0.7rem] py-[2vh]"><img src={basicMa} alt="" className=' w-[7vw] hidden sm:block'/> <h1 className='text-black font-bold'>Arithmetic</h1><p>Introductory</p> </li>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[15vw] h-[10vh] sm:h-[25vh] flex flex-col items-center justify-around px-[2vw] focus:border-red-500 focus:shadow-xl text-[0.55rem] sm:text-[0.7rem] py-[2vh]"> <img src={basicAl} alt="" className=' w-[7vw] hidden sm:block'/> <h1 className='text-black font-bold'>Basic Algebra</h1><p>Foundational</p></li>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[15vw] h-[10vh] sm:h-[25vh] flex flex-col items-center justify-around px-[2vw] focus:border-red-500 focus:shadow-xl text-[0.55rem] sm:text-[0.7rem] py-[2vh]"><img src={intermAl} alt="" className=' w-[7vw] hidden sm:block'/> <h1 className='text-black font-bold'>Intermediate Algebra</h1><p>Intermediate</p></li>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[15vw] h-[10vh] sm:h-[25vh] flex flex-col items-center justify-around px-[2vw] focus:border-red-500 focus:shadow-xl text-[0.55rem] sm:text-[0.7rem] py-[2vh]"><img src={calculus} alt="" className=' w-[7vw] hidden sm:block'/> <h1 className='text-black font-bold'>Calculus</h1><p>Advanced</p></li>

      </ul>
    </div>
    </div>
  )
}

export default Page4
