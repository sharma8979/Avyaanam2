import React from 'react'
import { Route,Routes } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
import About from './Pages/AboutUs/About'
import Login from './Login'

const App = () => {
  return (
    <div>
       <Routes>
       <Route  path='/' element={<Home/>} />
       <Route  path='/contact' element={<Contact/>} />
       <Route  path='/services' element={<Services/>} />
       <Route  path='/about' element={<About/>} />
       <Route  path='/login' element={<Login/>} />
       </Routes>
    </div>
  )
}

export default App