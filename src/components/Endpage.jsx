import React from 'react'
import img1 from "../assets/4706224.jpg"
import img2 from "../assets/6596185.jpg"
function Endpage() {

  
  return (

    <div className=' mb-[5vh]'>
          <div className="text-gray-500  flex flex-col items-center text-[0.58rem] sm:text-base">
      <h1 className=' text-black text-3xl font-bold tracking-tighter my-[3vh] '>What is your math comfort level?</h1>
      <p className=' mb-[5vh]'>Choose the highest level you feel confident in- you can always adjust later.</p>
      <ul className=' flex flex-wrap gap-3'>
        <li tabIndex={0} className=" cursor-pointer  border rounded-md  w-[25vw] h-[25vh] flex flex-col items-center justify-around px-[2vw]  text-[0.58rem] sm:text-[0.7rem] py-[2vh] text-black focus:border-red-500 focus:shadow-xl"><div className=' flex justify-center bg-[#f0b133] rounded-full font-bold px-[1.2vw] text-[0.45rem] sm:text-[0.7rem]'>Most Popular</div> <div className='flex'> 
        <p><span className=' font-bold'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability.</p><img src={img1} alt="" className='w-[7vw] hidden sm:block'/></div></li>
        <li tabIndex={0} className=" cursor-pointer  border rounded-md w-[25vw] h-[25vh] flex  items-center justify-around px-[2vw]  text-[0.58rem] sm:text-[0.7rem] py-[2vh] text-black focus:border-red-500 focus:shadow-xl"><p><span className=' font-bold'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability.</p> 
        <img src={img2} alt="" className='w-[7vw] hidden sm:block'/></li>
       

      </ul>
    </div>
    </div>
  )
}

export default Endpage
