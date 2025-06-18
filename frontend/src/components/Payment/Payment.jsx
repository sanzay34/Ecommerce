import React, { useState } from "react";
import axios from "axios";
import { generateUniqueId } from "esewajs";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
const Payment = () => {
	const [amount, setAmount] = useState("");
	const {navigate, backendUrl } = useContext(ShopContext);
	const handlePayment = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				backendUrl+"/api/payment/esewa/initiate", //server payment route
				{
					amount,
					productId: generateUniqueId(),
				}
			);

			window.location.href = response.data.url;
		} catch (error) {
			console.error("Error initiating payment:", error);
		}
	};

	return (
		<div>
			<h1>eSewa Payment Integration</h1>

			<div className="form-container" onSubmit={handlePayment}>
				<form className="styled-form">
					<div className="form-group">
						<label htmlFor="Amount">Amount:</label>
						<input
							type="number"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							required
							placeholder="Enter amount"
						/>
					</div>

					<button type="submit" className="submit-button">
						Pay with eSewa
					</button>
				</form>
			</div>
		</div>
	);
};

export default Payment;
