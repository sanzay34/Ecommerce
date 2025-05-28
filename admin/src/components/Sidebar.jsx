import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPlusCircle } from "react-icons/fa";
const Sidebar = () => {
  return (
      <div className='w-[18%] min-h-screen borderr-2'>
          <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
              <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to="/add">
                  <FaPlusCircle className='w-5 h-5' /> 
                  <p className='hidden md:block'>Add Items</p>
              </NavLink>
          </div>
    </div>
  )
}

export default Sidebar