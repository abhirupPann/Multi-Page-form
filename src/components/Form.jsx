import React, { useEffect, useState } from 'react'
import Page1 from './Page1';
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5"
import Endpage from './Endpage';
import { PuffLoader } from 'react-spinners';
import { IoChevronBackOutline } from "react-icons/io5";
function Form() {
  
  //--------All the useState functions-------
  const [currentStep, setCurrentStep] = useState(1);
  const [borderper, setBorderper] = useState(20);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [loader, setLoader] = useState(false)


  //-------Button onclick function-------
  const handleOnclick = () =>{
    setBorderper(borderper+20)
    setCurrentStep(currentStep+1)
  }
  

  // ------Loader rendering useEffect function--------
  useEffect(()=>{
    if(currentStep>5){
      setLoader(true)
      setTimeout(() => {
        setLoader(false)
      }, 5000);
    }
  },[currentStep])

  // -------- All the pages rendering function -------
  const pageRender = () =>{
    if(currentStep===1){
      return (<Page1 isSelected={valuefrompg1}/>)
    }
    else if(currentStep===2){
      return <Page2 isSelected={valuefrompg1}/>
    }
    else if(currentStep===3){
      return <Page3/>
    }
    else if(currentStep===4){
      return <Page4 isSelected={valuefrompg1}/>
    }
    else if(currentStep===5){
      return <Page5/>
    }
  }
  const valuefrompg1 =(data) =>{
    setBtnDisabled(data)
  }
  return (
    <div>
    { currentStep<=5 && 
      <div className=' flex flex-col items-center'>
      <div className='flex w-full  h-1 items-center'>
        {currentStep>1 && <div className=' cursor-pointer' onClick={()=>{setCurrentStep(currentStep-1); setBorderper(borderper-20)}}><IoChevronBackOutline /></div>}
      <div className=' bg-[#e6e6e6] w-full rounded-full  h-1 '>
        <div className={` bg-[#159c7c] h-full ${borderper===100 ?"rounded-full ": "rounded-l-full"}`} style={{width:`${borderper}%`}}></div>
      </div>
      </div>
      
      <div>{pageRender()}</div>
      <button className='bg-[#000001] w-[12vw] h-[3.5vh] sm:h-[7vh] text-white rounded-md drop-shadow-md flex justify-center items-center disabled:bg-[#e5e4e5] mt-[2vh] text-[0.45rem] sm:text-base' disabled={!btnDisabled} onClick={handleOnclick}>Continue</button>
    </div> 
    }
    {loader &&
    <div className='flex flex-col items-center justify-around h-[90vh]'>
      <PuffLoader color='#f0b133' size={200}/>
      <h1 className='text-black text-2xl font-bold tracking-tighter'>Finding learning path recommendations for you based on your responses</h1>
    </div> 
    }
    {!loader && currentStep>5 &&(
      <Endpage/>
    )}
    </div>


  )
}

export default Form
