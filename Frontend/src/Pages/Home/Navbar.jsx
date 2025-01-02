import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";

const Navbar = () => {
   

  return (
<<<<<<< HEAD

    <div className='flex fixed z-[99] w-full bg-white justify-between items-center p-4  px-20 text-black'>

=======
    <div className='flex fixed z-[99] w-full bg-white justify-between items-center p-4  px-20 text-black'>
>>>>>>> c509f2f08db24ff0019898f6b2d1d31d0e701cf7
        <div className='text-2xl font-light p-5'> 
            AVYAANAM
        </div>
        <div className='p-5 flex gap-6  '>
            <ul className='flex font-light space-x-4'>
                <li><Link to='/' className='text-xl'>Home</Link></li>
                <li><Link to='/services' className='text-xl'>Services</Link></li>
                <li><Link to='/contact' className='text-xl'>Contact</Link></li>
                <li><Link to='/about' className='text-xl'>About Us</Link></li>
                <li><Link to='/blog' className='text-xl'>Blog</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar