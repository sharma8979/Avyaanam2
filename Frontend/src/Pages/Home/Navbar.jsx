import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Dummy state to check if the user is logged in (you can replace it with real authentication logic)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const toggleMenu = () => setMenuOpen((prevState) => !prevState);
  
    const handleLogin = () => {
      setIsLoggedIn(true);
      setMenuOpen(false);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
      setMenuOpen(false);
    };
  
    const handleMyAccount = () => {
      alert('Redirect to My Account page');
      setMenuOpen(false);
    };

  return (

    <div className='flex fixed z-[99] w-full bg-white justify-between items-center p-4  px-20 text-black'>

        <div className='text-2xl font-light p-5'> 
            AVYAANAM
        </div>
        <div className='p-5 flex gap-6 '>
            <ul className='flex font-light space-x-4'>
                <li><Link to='/' className='text-xl'>Home</Link></li>
                <li><Link to='/services' className='text-xl'>Services</Link></li>
                <li><Link to='/contact' className='text-xl'>Contact</Link></li>
                <li><Link to='/about' className='text-xl'>About Us</Link></li>
            </ul>
            <section>
            <div className="relative">
      <div className="text-3xl cursor-pointer" onClick={toggleMenu}>
        <RiAccountCircleLine />
      </div>

      {/* Menu */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-300">
          <ul className="py-2">
            {isLoggedIn ? (
              <>
                <li className="px-4 py-2 cursor-pointer" onClick={handleMyAccount}>
                  <Link>My Account</Link>
                </li>
                <li className="px-4 py-2 cursor-pointer" onClick={handleLogout}>
                  <Link>Logout</Link>
                </li>
              </>
            ) : (
              <li className="px-4 py-2 cursor-pointer" onClick={handleLogin}>
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>
        </div>
      )}
            </div>
            </section>
        </div>
    </div>
  )
}

export default Navbar