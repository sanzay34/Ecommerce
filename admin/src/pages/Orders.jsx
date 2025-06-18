import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { BsBoxSeamFill } from "react-icons/bs";
const Orders = ({ token }) => {
	const [orders, setOrders] = useState([]);
	const fetchAllOrders = async () => {
		if (!token) {
			return null;
		}
		try {
			const response = await axios.post(
				backendUrl + "/api/order/list",
				{},
				{ headers: { token } }
			);
			console.log(response.data);
			if (response.data.success) {
				setOrders(response.data.orders);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			toast.error(error.message)
		}
	};
	const statusHandler = async (e,orderId) => {
		try {
			const response = await axios.post(backendUrl + "/api/order/status", { orderId, status: e.target.value }, { headers: { token } })
			if (response.data.succcess) {
				await fetchAllOrders()
				  toast.success(response.data.message)
			}
		} catch (error) {
			console.log(error)
			toast.error(response.data.messsage)
		}
	}
	useEffect(() => {
		fetchAllOrders();
	}, [token]);
	return (
		<div>
			<h3>Order Page</h3>
			<div>
				{orders.map((order, index) => (
					<div
						className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 md:my-4 my-3 text-xs sm:text-sm text-gray-700"
						key={index}
					>
						<BsBoxSeamFill className="w-12 h-12" />
						{/* Address Info */}
						<div>
							<div>
								{order.items.map((item, i) => (
									<p className="py-0.5" key={i}>
										{item.name} x {item.quantity} <span>{item.size}</span>
									</p>
								))}
							</div>

							<p className="mt-3 mb-2 font-medium">
								{order.address.firstName} {order.address.lastName}
							</p>
							<div>
								<p>{order.address.street}</p>
								<p>
									{order.address.city}, {order.address.state},{" "}
									{order.address.country} - {order.address.zipcode}
								</p>
								<p>{order.address.phone}</p>
							</div>
						</div>

						{/* Order Summary */}
						<div>
							<p className="text-sm sm:text-[15px]">
								<strong>Total Items:</strong> {order.items.length}
							</p>
							<p className="mt-3">
								<strong>Method:</strong> {order.paymentMethod}
							</p>
							<p>
								<strong>Payment:</strong> {order.payment ? "Done" : "Pending"}
							</p>
							<p>
								<strong>Date:</strong>{" "}
								{new Date(order.date).toLocaleDateString()}
							</p>
						</div>
						<p className="text-sm sm:text-[15px]">
							{currency}
							{order.amount}
						</p>
						<select onChange={(e)=>statusHandler(e,order._id)} value={order.status} className="p-2 font-semibold">
							<option value="Order Placed">Order Placed</option>
							<option value="Packing">Packing</option>
							<option value="Shipped">Shipped</option>
							<option value="Out for delivery">Out for delivery</option>
							<option value="Delivered">Delivered</option>
						</select>
					</div>
				))}
			</div>
		</div>
	);
};

export default Orders;
