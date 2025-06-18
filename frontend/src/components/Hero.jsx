import React from 'react'
import heroimg from '../assets/heroimg.jpg'
const Hero = () => {
  return (
      <div className='h-[500px] flex flex-col sm:flex-row border gray-400'>
          {/* Hero left side */}
          <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
              <div className='text-amber-800'>
                  <div className='items-center flex gap-2'>
                      <p className='w-8 md:w-11 h-[2px] bg-gray-700'>  
                          
                      </p>
                      <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                      
                  </div>
                  <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>LATEST ARRIVELS</h1>
                  <div className='flex items-center gap-2'>
                      <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                      <p className='w-8 md:w-11 h-[1px] bg-gray-600'></p>
                  </div>
          </div>
          </div>
          {/* Hero right side */}
          <img className='w-full sm:w-1/2 ' src={heroimg} alt="heroimage"></img>

    </div>
  )
}

export default Hero