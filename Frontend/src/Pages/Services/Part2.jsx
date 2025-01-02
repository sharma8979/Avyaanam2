import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Part2 = () => {
    
  return (
    <div className='flex justify-between items-center px-[18vw] text-black'>
        <div className=''>
            <ul className='flex  mt-5 justify-center gap-10 font-light space-x-4'>
                <li><Link to='/intro' className='text-xl'>Introduction</Link></li>
                <li><Link to='/approach' className='text-xl'>Our Approach</Link></li>
                <li><Link to='/reviews' className='text-xl'>Why Choose US</Link></li>
                <li><Link to='/outcome' className='text-xl'>Outcome</Link></li>
                <li><Link to='/portfolio' className='text-xl'>Portfolio</Link></li>
            </ul>
        </div>
        <div>
            
               <div className=' flex mt-5   px-6'>
                    <button className='bg-black text-white p-2 w-[10] rounded-full text-xl'>
                        Let's Work
                    </button>
                 <BsArrowUpRightCircleFill className='mt-1  text-4xl ' />
             </div>  
           
        </div>
    </div>
  )
}

export default Part2