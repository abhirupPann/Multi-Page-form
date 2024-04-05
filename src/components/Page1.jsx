import React, { useEffect, useState } from 'react'
import { PiStudentFill } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import { RiParentFill } from "react-icons/ri";
import { FaPersonSkating } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
function page1(props) {

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

    <div className="text-gray-500  flex flex-col items-center text-[0.58rem] sm:text-base">
      <h1 className=' text-black text-3xl font-bold tracking-tighter my-[3vh] '>Which describes you best?</h1>
      <p className=' mb-[5vh]'>This will help us personalize your experience.</p>
      <ul className=' flex flex-col gap-3'>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[50vw] h-[10vh] flex items-center px-[2vw] focus:border-red-500 focus:shadow-xl"><PiStudentFill className=' mx-[0.5vw]'/><span className=' text-black font-bold mr-[0.5vw]'>Student</span> or soon be enrolled</li>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[50vw] h-[10vh] flex items-center px-[2vw] focus:border-red-500 focus:shadow-xl"><GrUserWorker className=' mx-[0.5vw]'/><span className=' text-black font-bold mr-[0.5vw]'>Professional</span> pursuing a career</li>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[50vw] h-[10vh] flex items-center px-[2vw] focus:border-red-500 focus:shadow-xl"><RiParentFill className=' mx-[0.5vw]'/><span className=' text-black font-bold mr-[0.5vw]'>Parent</span> of a school-age child</li>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[50vw] h-[10vh] flex items-center px-[2vw] focus:border-red-500 focus:shadow-xl"><FaPersonSkating className=' mx-[0.5vw]'/>Lifelong learner</li>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[50vw] h-[10vh] flex items-center px-[2vw] focus:border-red-500 focus:shadow-xl"><GiTeacher className=' mx-[0.5vw]'/>Teacher</li>
        <li tabIndex={0} onClick={handleOnclick} className="cursor-pointer border rounded-md w-[50vw] h-[10vh] flex items-center px-[2vw] focus:border-red-500 focus:shadow-xl"><IoPersonSharp className=' mx-[0.5vw]'/> Other</li>
      </ul>
    </div>
  )
}

export default page1
