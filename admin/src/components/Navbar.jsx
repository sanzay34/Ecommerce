import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
		<div className="flex items-center py-2 px-[4%] justify-between">
			<div>
				<img className="w-12" src={logo} alt="" />
				<div className="font-bold text-gray-400">ADMIN PANEL</div>
			</div>

			<button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
				Logout
			</button>
		</div>
	);
}

export default Navbar