import React from 'react'
import {Link} from 'react-router-dom'

const Page3 = () => {
    
    return (
    <div className=' min-h-screen '>
        <h1 className='text-center text-5xl mt-10'>Garden Blog</h1>

        <div className=' flex justify-evenly mt-16'>
        <div className=' flex flex-col  border-2 shadow-lg rounded-lg items-center w-[35%]  '>
            <div>
                <img className='mb-4 transition-transform duration-300 ease-in-out hover:scale-105 mt-10'
                 src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc1fHx3ZWxsbmVzc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className='text-left  px-12'>
                <h1 className='text-2xl mb-4' >The Community Plot</h1>
                <h2 className='font-light mb-4'>
                You finally made it through the waiting list and got one of the coveted
                spots in your community garden. After a quick orientation, you have a
                list of plants and rules. So, now what? Let's talk about the things you'll
                wan...
                </h2>
                <div className='mb-10'>
                <Link className='text-blue-400  text-[15px] '>Continue Reading.....</Link>
         
                </div>
                </div>
        </div>

        <div className=' flex flex-col  border-2 shadow-lg rounded-lg items-center w-[35%]  '>
            <div>
                <img className='mb-4 transition-transform duration-300 ease-in-out hover:scale-105 mt-10'
                 src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc1fHx3ZWxsbmVzc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className='text-left  px-12'>
                <h1 className='text-2xl mb-4' >The Community Plot</h1>
                <h2 className='font-light mb-4'>
                You finally made it through the waiting list and got one of the coveted
                spots in your community garden. After a quick orientation, you have a
                list of plants and rules. So, now what? Let's talk about the things you'll
                wan...
                </h2>
                <div className='mb-10'>
                <Link className='text-blue-400  text-[15px] '>Continue Reading.....</Link>
         
                </div>
                </div>
        </div>   
        
        </div>
    </div>
  )
}

export default Page3