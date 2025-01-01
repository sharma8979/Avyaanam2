import React from 'react'
import { Link } from 'react-router-dom'

const Page1 = () => {
    
  return (
    <div className=' justify-center  px-12  flex '>
      <div className='mt-36 mb-20 bg-cover bg-center h-[80vh]
      bg-[url(https://media.istockphoto.com/id/2124398638/photo/business-quotes-health-and-wellness-on-notebooks-or-paper-in-office-desk.webp?a=1&b=1&s=612x612&w=0&k=20&c=XVBu7kESDrHIDBfulF9ZEBwEc04Ri-6j8D9U5-ivXpI=)]
       w-[45%] bg-white'>
        
        </div>

      <div className=' mt-28  w-[45%] '>
        <div>
        <h1 className='font-sans text-right text-7xl p-28'>Welcome To <br />Our Growing <br />Community</h1>
        </div>
        <div className='text-right px-28'>
        <Link className='text-3xl text-white font-semibold bg-green-500 rounded-lg p-4'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default Page1