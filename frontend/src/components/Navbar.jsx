import React, { useContext, useState } from 'react'
import logo from "../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';
import {
	FaSearch,
	FaRegUser,
	FaShoppingCart,
	FaBars,
	FaTimes,
} from "react-icons/fa";
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {
	const [visible, setVisible] = useState(false);
	const { setShowSearch,getCartCount } = useContext(ShopContext);
  return (
		<div className="flex items-center justify-between py-4 font-medium">
			<Link to="/">
				<img src={logo} className="w-11 h-11" alt="logo image" />
			</Link>
			<ul className="hidden sm:flex gap-5 text-sm text-gray-600">
				<NavLink to="/" className="flex flex-col items-center gap-1 ">
					<p>HOME</p>
					<hr className="w-2/4 border-none h-[2px] bg-gray-600 hidden"></hr>
				</NavLink>
				<NavLink to="/collection" className="flex flex-col items-center gap-1 ">
					<p>COLLECTION</p>
					<hr className="w-2/4 border-none h-[2px] bg-gray-600 hidden"></hr>
				</NavLink>
				<NavLink to="/about" className="flex flex-col items-center gap-1 ">
					<p>ABOUT</p>
					<hr className="w-2/4 border-none h-[2px] bg-gray-600 hidden"></hr>
				</NavLink>
				<NavLink to="/contact" className="flex flex-col items-center gap-1 ">
					<p>CONTACT</p>
					<hr className="w-2/4 border-none h-[2px] bg-gray-600 hidden"></hr>
				</NavLink>
			</ul>
			<div className="flex items-center gap-6">
				<FaSearch
					onClick={() => setShowSearch(true)}
					className="cursor-pointer w-5 h-5"
				/>
				<div className="relative group">
					<Link to='/login'>
						<FaRegUser className="cursor-pointer w-5 h-5" />
					</Link>
					<div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
						<div className="flex flex-col gap-2 w-35 py-3 px-5 bg-slate-100 text-gray-500 rounded">
							<p className="cursor-pointer hover:text-black">My Profile</p>
							<p className="cursor-pointer hover:text-black">Orders</p>
							<p className="cursor-pointer hover:text-black">Logout</p>
						</div>
					</div>
				</div>

				<Link to="/cart" className="relative">
					<FaShoppingCart className="w-5 h-5" />
					<p className="absolute right-[-5px] bottom-[-5px] w-3 h-3 text-center leading-3 bg-black text-white aspect-square rounded-full text-[8px]">
						{getCartCount()}
					</p>
				</Link>
				<FaBars
					onClick={() => setVisible(true)}
					className="sm:hidden cursor-pointer"
				/>
			</div>
			{/* sidebar menu for small screens */}
			<div
				className={`fixed top-0 right-0 bottom-0 z-50 bg-white transition-all duration-300 ease-in-out ${
					visible ? "w-full" : "w-0"
				} overflow-hidden`}
			>
				<div
					className={`flex flex-col text-gray-600 h-full transition-opacity duration-300 ${
						visible ? "opacity-100" : "opacity-0"
					}`}
				>
					<div
						onClick={() => setVisible(false)}
						className="flex items-center justify-end p-4"
					>
						<FaTimes className="cursor-pointer text-xl" />
					</div>
					<NavLink
						onClick={() => setVisible(false)}
						to="/"
						className="p-3 hover:bg-gray-100"
					>
						HOME
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						to="/collection"
						className="p-3 hover:bg-gray-100"
					>
						COLLECTION
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						to="/about"
						className="p-3 hover:bg-gray-100"
					>
						ABOUT
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						to="/contact"
						className="p-3 hover:bg-gray-100"
					>
						CONTACT
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Navbar