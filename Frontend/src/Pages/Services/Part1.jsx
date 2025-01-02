import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Part1 = () => {
  return (
    <div className='min-h-screen bg-black'>
        <div className='p-[12vw] h-[50vh] '>  
                <h1 className='text-white font-bold text-6xl'>Complete</h1>
                <div className='flex gap-3'>
                <div className='h-[2vh] mt-12 w-[4vw] rounded bg-white'></div>
                <h1 className='text-gray-400 font-bold  mt-5 text-6xl'> Development</h1>
                  </div>
        </div>
        <div>
            <h1 className='text-white px-[12vw] font-light text-xl w-[60%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim assumenda, qui facilis 
                rerum minus praesentium, at asperiores voluptatibus nihil incidunt
                 eligendi repellat vel, est sit a dolor iste reprehenderit non?</h1>
        </div>
        <div className='px-[12vw] flex mt-10'>
        <button className='text-black bg-yellow-300 p-3 rounded-full text-2xl'>
            Free Consultation
        </button>
        <BsArrowUpRightCircleFill className='text-yellow-300 text-6xl ' />
        </div>
        

    </div>
  )
}

export default Part1