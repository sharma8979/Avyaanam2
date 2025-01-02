import React from 'react'
import Navbar from '../Home/Navbar'
import Card from './Card'

const About = () => {
  return (
    <>
      <Navbar/>
      <div className='h-screen w-screen flex items-center justify-center flex-col bg-slate-400'>
        <span className='text-xs text-gray-500'>----  Lorem, ipsum.  ----</span>
        <p className='text-4xl font-bold font-serif max-w-[50vw] mt-5 text-center'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique"</p>
      </div>
      <div className='bg-purple-400 h-screen'>
        <h2 className='text-4xl text-center pt-20 font-serif text-white font-semibold'>Lorem, ipsum.</h2>
        <div className='flex flex-wrap justify-around mt-8'>
          <Card/><Card/><Card/><Card/>
        </div>
      </div>
      <div className='flex items-center justify-evenly flex-wrap p-9 h-screen'>
        <div className='w-[35vw] text-sm'>
            <h2 className='text-3xl font-semibold mb-5'>Let's Dig In Together</h2>
            <p className='mb-4'>Hi there! I'm Jeri. I have a background in sustainable agriculture and a home in the city. I am passionate about sharing the ways that we can stay in touch with our natural community by gardening and building a plant community wherever we live.</p>
            <p className='mb-10'>
            I am excited to introduce more people to this wonderful community of gardeners. Along the way, I hope you'll find the tools that you need to dig in to your gardening life!
            </p>
            <a href="">Learn More</a>
        </div>
        <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt=""  className='w-[30rem]'/>
      </div>
    </>
  )
}

export default About