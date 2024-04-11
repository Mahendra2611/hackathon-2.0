import React from 'react'
import Slide from './Components/Slide'
import './home.css'
import Slider from './Components/Slider'


const Home = () => {
  return (
    <div className='w-full h-full home'>

        
        <div className='w-full h-1 bg-[var(--sec)] mt-2'></div>
        <h1 className="heading md:text-[3.5rem]  text-[1.2rem] mt-20 text-[var(--sec)]">Our Achievements</h1>
        <div className='flex justify-center items-center mt-10 relative sm:flex-wrap'>
          <div className='px-20 pb-20'>
          <Slider/>
          </div>
          <div className='w-[40%] px-10 pb-10 '>
            <p className='text-[rgba(255,2555,255,0.78)] lg:text-4xl md:text-3xl sm:2xl'>
I have a site with a side navigation bar that is supposed to slide in via the right side, then when you close it, it transitions back into the side.

            </p>
          </div>
        </div>
        <Slide/>

        </div>

  )
}

export default Home