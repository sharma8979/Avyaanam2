import React from 'react'

export default function Card() {
  return (
    <div className='h-80 w-64 bg-yellow-400'>
        <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt="" className='h-1/2 w-full'/>
        <div className='text-center p-5'>
            <span className='text-xs text-gray-600'>February 12, 2024</span>
            <h2 className='mb-8'>Lorem, ipsum dolor.</h2>
            <a href="abc" className=' text-xs text-gray-700'>Continue Reading</a>
        </div>
    </div>
  )
}
