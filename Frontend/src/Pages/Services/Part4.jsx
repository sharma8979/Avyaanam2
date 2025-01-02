import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Part4 = () => {
  return (
    <div className='bg-black min-h-screen'>
        <div>
                    <h1 className='text-5xl text-white font-semibold'>Maximum Reach</h1>
                   </div>
                   <div>
                    <h1 className='text-5xl text-white font-semibold mt-3 text-gray-600'> With Mobile App</h1>
                   </div>
        <div className='px-[12vw] py-[20vw] ml-[22vw] w-[50%] h-[50vh] '>
                   <div className='mt-4'>
                    <h3 className='text-xl text-white font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero deserunt consequuntur 
                        facilis rem maiores velit pariatur error enim optio voluptates? Non tenetur 
                        amet exercitationem aperiam suscipit commodi est distinctio natus.</h3>
                   </div>
                   <div className=' flex mt-5   px-'>
                    <button className='bg-white text-black p-2 w-[10] rounded-full text-xl'>
                         Let's Work
                    </button>
                    <BsArrowUpRightCircleFill className='mt-1 text-white text-4xl ' />
                    </div>                  
                </div>
    </div>
  )
}

export default Part4