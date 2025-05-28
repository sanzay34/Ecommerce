import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPlusCircle, FaShoppingBag, FaShoppingBasket } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";

const Sidebar = () => {
  return (
		<div className="w-[18%] min-h-screen mr-2 border-r-1 p-3">
			<div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
				<NavLink
					className="flex items-center gap-3 border border-gray-300 border-r px-3 py-2 rounded-lg"
					to="/add"
				>
					<FaPlusCircle className="w-5 h-5" />
					<p className="hidden md:block">Add Items</p>
				</NavLink>
				<NavLink
					className="flex items-center gap-3 border border-gray-300 border-r px-3 py-2 rounded-lg"
					to="/list"
				>
					<BsBagCheck className="w-5 h-5" />
					<p className="hidden  md:block">List Items</p>
				</NavLink>
				<NavLink
					className="flex items-center gap-3 border border-gray-300 border-r px-3 py-2 rounded-lg"
					to="/orders"
				>
					<FaShoppingBag className="w-5 h-5" />
					<p className="hidden md:block">Orders</p>
				</NavLink>
			</div>
		</div>
	);
}

export default Sidebar