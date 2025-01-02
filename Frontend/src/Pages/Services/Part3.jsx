import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Part3 = () => {
  return (
    <div className=' min-h-screen flex'>
        <div className='px-[12vw] mt-32 w-[50%] h-[50vh] '>
           <div>
            <h1 className='text-5xl font-semibold'>Maximum Reach</h1>
           </div>
           <div>
            <h1 className='text-5xl font-semibold mt-3 text-gray-600'> With Mobile App</h1>
           </div>
           <div className='mt-4'>
            <h3 className='text-xl font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero deserunt consequuntur 
                facilis rem maiores velit pariatur error enim optio voluptates? Non tenetur 
                amet exercitationem aperiam suscipit commodi est distinctio natus.</h3>
           </div>
           <div className=' flex mt-5   px-'>
            <button className='bg-black text-white p-2 w-[10] rounded-full text-xl'>
                 Let's Work
            </button>
            <BsArrowUpRightCircleFill className='mt-1  text-4xl ' />
            </div>                  
        </div>

        <div>
         <img className='mt-32 rounded'
          src="https://media.istockphoto.com/id/1357014440/photo/happy-family-jogging-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=k_Zg_5d7qqSg4cSpj3ehJCgrYOgj0yIprI9ToidZisE=" alt="" />
        </div>
    </div>
  )
}

export default Part3