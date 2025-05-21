import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal';
import { FaCcVisa,FaCcStripe } from "react-icons/fa";
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {
	const [method, setMethod] = useState('cod');
	const {navigate}=useContext(ShopContext)
  return (
		<div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
			{/* -----------------left side--------------- */}
			<div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
				<div className="text-xl sm:text-2xl my-3">
					<Title text1={"DELIVERY"} text2={"INFORMATION"} />
				</div>
				<div className="flex gap-3">
					<input
						type="text"
						className="border bordergray-300 rounded py-1.5 px-3.5 w-full "
						placeholder="First name"
					/>
					<input
						type="text"
						className="border bordergray-300 rounded py-1.5 px-3.5 w-full "
						placeholder="Last name"
					/>
				</div>
				<input
					type="email"
					className="border bordergray-300 rounded py-1.5 px-3.5 w-full "
					placeholder="Email"
				/>
				<input
					type="text"
					className="border bordergray-300 rounded py-1.5 px-3.5 w-full "
					placeholder="Tole"
				/>
				<div className="flex gap-3">
					<input
						type="text"
						className="border bordergray-300 rounded py-1.5 px-3.5 w-full "
						placeholder="State"
					/>
					<input
						type="text"
						className="border bordergray-300 rounded py-1.5 px-3.5 w-full "
						placeholder="City"
					/>
				</div>
				<div className="flex gap-3">
					<input
						type="number"
						className="border bordergray-300 rounded py-1.5 px-3.5 w-full "
						placeholder="Zipcode"
					/>
					<input
						type="text"
						className="border bordergray-300 rounded py-1.5 px-3.5 w-full "
						placeholder="Country"
					/>
				</div>
				<input
					type="number"
					className="border bordergray-300 rounded py-1.5 px-3.5 w-full "
					placeholder="Phone"
				/>
			</div>
			{/* ----------------Right Side---------------- */}
			<div className="mt-8">
				<div className="mt-8 min-w-80">
					<CartTotal />
				</div>
				<div className="mt-12">
					<Title text1={"PAYMENT"} text2={"METHOD"} />
					{/* ----------------------------Payment method selection--------------- */}
					<div  className="flex gap-3 flex-col lg:flex-row">
						<div onClick={()=>setMethod('stripe')}  className=" flex items-center gap-3 border p-2 px-3 cursor-pointer">
							<p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'?'bg-green-500':''}`}></p>
							<FaCcStripe className="h-5 w-8" />
						</div>
						<div onClick={()=>setMethod('visa')}  className=" flex items-center gap-3 border p-2 px-3 cursor-pointer">
							<p className={`min-w-3.5 h-3.5 border rounded-full ${method==='visa'?'bg-green-500':''}`}></p>
							<FaCcVisa className="h-5 w-8" />
						</div>
						<div onClick={()=>setMethod('cod')}  className=" flex items-center gap-3 border p-2 px-3 cursor-pointer">
							<p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'?'bg-green-500':''}`}></p>
							<p className='text-gray-600 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
						</div>
				  </div>
				  <div className='w-full text-end mt-8'>
					  <button onClick={()=>navigate('/order')} className='bg-black cursor-pointer text-white px-16 py-3 text-sm'>PLACE ORDERS</button>
					  
				  </div>
				</div>
			</div>
		</div>
	);
}

export default PlaceOrder