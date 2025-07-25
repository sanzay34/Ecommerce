import React from 'react'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
		<div className="">
          <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
              <div>
                  <img src={logo} className='mb-5 w-15 ' alt="" />
                  <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, voluptas. Accusamus iusto aspernatur eveniet soluta tempore a alias voluptatibus nobis! Odit libero quas, at provident explicabo quasi molestias vitae ut.</p>
              </div>
              <div>
                  <p className='text-xl font-medium mb-5'>COMPANY</p>
                  <ul className='flex flex-col gap-1 text-gray-600'>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Delivery</li>
                      <li>Privacy Policy</li>
                      
                      
                  </ul>
              </div>
              <div>
                  <p className='text-xl font-medium mb-5'> 
                      GET IN TOUCH
                  </p>
                  <ul className='flex flex-col gap-1 text-gray-600'>
                      <li>+977-9837282781</li>
                      <li>contact@info.com</li>
                  </ul>
              </div>
          </div>
          <div>
              <hr />
              <p className='py-5 text-sm text-center'>Copyright 2024@ ktmfashioncollection.com - All Right Reserved</p>
          </div>
		</div>
	);
}

export default Footer