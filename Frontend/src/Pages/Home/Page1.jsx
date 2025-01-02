import React from 'react'
import { Link } from 'react-router-dom'

const Page1 = () => {
    
  return (
    <div className='flex items-center justify-evenly  h-screen  '>
        <img 
         className='w-[35vw]'
         src="https://media.istockphoto.com/id/2124398638/photo/business-quotes-health-and-wellness-on-notebooks-or-paper-in-office-desk.webp?a=1&b=1&s=612x612&w=0&k=20&c=XVBu7kESDrHIDBfulF9ZEBwEc04Ri-6j8D9U5-ivXpI=" alt="" />
      <div className='w-[35vw] flex flex-col items-center '>
        <h1 className='font-sans text-right text-7xl mb-8 '>Welcome To <br />Our Growing <br />Community</h1>
        <Link className='text-2xl text-white font-semibold bg-green-500 rounded-lg p-4'>Read More</Link>
      </div>
    </div>
  )
}

export default Page1