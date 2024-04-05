import React from 'react'
import { useState, useEffect } from 'react';
import { VscGraphLine } from "react-icons/vsc";
import { FaEarthAmericas } from "react-icons/fa6";
import { TbMathSymbols } from "react-icons/tb";
import { LuTarget } from "react-icons/lu";
import { BsEyeglasses } from "react-icons/bs";
function Page2(props) {

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
    <div>
          <div className="text-gray-500  flex flex-col items-center text-[0.58rem] sm:text-base">
      <h1 className=' text-black text-3xl font-bold tracking-tighter my-[3vh] '>Which are you most interested in?</h1>
      <p className=' mb-[5vh]'>Choose just one. This will help us get you started (but won't limit your experience.)</p>
      <ul className=' flex flex-col gap-3'>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[50vw] h-[10vh] flex items-center px-[2vw] focus:border-red-500 focus:shadow-xl"><VscGraphLine className=' mx-[0.5vw]'/><span className=' text-gray-600 font-medium mr-[0.5vw]'>Learning specific skills to advance my career</span> </li>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[50vw] h-[10vh] flex items-center px-[2vw] focus:border-red-500 focus:shadow-xl"><FaEarthAmericas className=' mx-[0.5vw]'/><span className=' text-gray-600 font-medium mr-[0.5vw]'>Exploring new topics I'm interested in</span></li>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[50vw] h-[10vh] flex items-center px-[2vw] focus:border-red-500 focus:shadow-xl"><TbMathSymbols className=' mx-[0.5vw]'/><span className=' text-gray-600 font-medium mr-[0.5vw]'>Refreshing my math foundations</span></li>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[50vw] h-[10vh] flex items-center px-[2vw] focus:border-red-500 focus:shadow-xl"><LuTarget className=' mx-[0.5vw]'/><span className=' text-gray-600 font-medium mr-[0.5vw]'>Exercising my brain to stay sharp</span></li>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[50vw] h-[10vh] flex items-center px-[2vw] focus:border-red-500 focus:shadow-xl"><BsEyeglasses className=' mx-[0.5vw]'/><span className=' text-gray-600 font-medium mr-[0.5vw]'> Something else</span></li>
       
      </ul>
    </div>
    </div>
  )
}

export default Page2
