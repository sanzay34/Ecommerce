import React from 'react'
const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        
    }
  return (
      <div className='text-center'>
          <p className='text-2xl font-medium text-gray-700'>Subscribe now & get 20% off</p>
          <p className='text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at, sapiente necessitatibus pariatur iure error reprehenderit numquam qui placeat facere perspiciatis aperiam voluptatem maxime culpa quia reiciendis quas repudiandae odit.</p>
          <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
              <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your Email' required />
              <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>SUBSCRIBE</button>
          </form>
      </div>
  )
}

export default NewsLetterBox