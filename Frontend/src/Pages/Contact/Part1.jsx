import React from 'react'

const Part1 = () => {
  return (
    <div className='min-h-screen flex'>
        <div className='p-[10vw] w-[50%] bg-red-200'>
           <img className='h-[0vw]  bg-cover'
           src="https://plus.unsplash.com/premium_photo-1667762241847-37471e8c8bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRofGVufDB8fDB8fHww" alt="" />
        </div>
        <div className='bg-red-300 w-[50%]'>
            <h1 className=' text-3xl'>Made With Love</h1>

        </div>
    </div>
  )
}

export default Part1