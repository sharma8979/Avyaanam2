import React from 'react'

const Part1 = () => {
  return (
    <div className='  flex'>

        <div className='p-[10vw]  w-[50%] '>
            <div className='bg-blue-200 h-[70vh] w-[35vw] bg-cover rounded-lg
            bg-[url(https://plus.unsplash.com/premium_photo-1667762241847-37471e8c8bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRofGVufDB8fDB8fHww)]
            '>
            </div>
         </div>

        <div className=' w-[50%]'>

            <div className='mt-[23vw] w-[80%]  '>
             <h1 className='mb-5 text-gray-600'>Beautiful Home</h1>   
            <h1 className=' text-3xl'>Made With Love</h1>
            <h1 className='text-xl text-gray-500 font-light mt-5 '>
            Our candles are made with natural scents and 100% soy wax. These beautiful additions to your
             cozy home are made with care and craft. If you
             have any questions or special requests, feel free to get in touch with us. 
            </h1>
            <button className='mt-5 text-2xl text-center rounded-lg bg-cream w-[10vw] h-[4vw]'>
                Explore
            </button>
            </div>

        </div>
    </div>
  )
}

export default Part1