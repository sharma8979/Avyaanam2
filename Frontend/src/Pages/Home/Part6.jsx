import React from 'react'

const Part6 = () => {
  return (
    <div>
        <div className=''>
            <h1 className='text-3xl text-center'>Join My Mailing List</h1>
            <h3 className='text-gray-600 text-center mt-5'>Be the first to hear about new arrivals and upcoming sales.</h3>
        </div>
        <div className='flex mt-5 justify-center'>
        <input type="email" placeholder='email' 
            className='border-2 p-4 w-[35vw]'/>
        <h1 className='p-4 text-white text-center bg-black w-[10vw]'>Sign Up</h1>    
        </div>
    </div>
  )
}

export default Part6