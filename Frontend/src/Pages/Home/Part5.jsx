import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Part5 = () => {
  return (
    <div className='min-h-screen '>
       <h1 className='text-center text-5xl mt-10'>Featured Services</h1>
       <div className='flex  justify-center m-20 gap-10 '>
        <div  className='h-[95vh]  bg-red-500 w-[47vw] bg-cover opacity-90
        bg-[url(https://plus.unsplash.com/premium_photo-1689693058580-05c0381317a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkzfHx3ZWxsbmVzc3xlbnwwfHwwfHx8MA%3D%3D)] '>
          
          <div className='p-[10vw]'>
          <div>
          <h1 className='text-2xl text-white font-semibold  '>
            Complete Personality Development...
          </h1>
          <h2 className='font-light text-center text-white'>14999 Rs.</h2>
          </div>
          <div className=' flex items-center mt-6'>
          <Link to="/explore" className="px-[11vw] text-white font-semibold text-xl hover:text-blue-400">
            Explore....
          </Link>
         
          </div>
          </div>
         
          

        </div>


        <div>

            <div className='h-[45vh] w-[25vw] bg-blue-100 p-[5vw] 
            bg-[url(https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU5fHx3ZWxsbmVzc3xlbnwwfHwwfHx8MA%3D%3D)]'>
             <div>
          <h1 className='text-2xl text-black font-semibold  '>
            Complete Personality Development...
          </h1>
          <h2 className='font-light text-center text-black'>14999 Rs.</h2>
          </div>
          <div className=' flex items-center mt-6'>
          <Link to="/explore" className=" text-black font-semibold text-xl hover:text-blue-400">
            Explore....
          </Link>
         
          </div>
            </div>


            <div className='h-[45vh] w-[25vw] mt-8 bg-blue-100 p-[5vw] 
            bg-[url(https://images.unsplash.com/photo-1480072723304-5021e468de85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzMwfHx3ZWxsbmVzc3xlbnwwfHwwfHx8MA%3D%3D)]'>
             <div>
          <h1 className='text-2xl text-white font-semibold  '>
            Complete Personality Development...
          </h1>
          <h2 className='font-light text-center text-white'>14999 Rs.</h2>
          </div>
          <div className=' flex items-center mt-6'>
          <Link to="/explore" className=" text-white font-semibold text-xl hover:text-blue-400">
            Explore....
          </Link>
         
          </div>
            </div>
        </div>
       </div>
    </div>
  )
}



export default Part5