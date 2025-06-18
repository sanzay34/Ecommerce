import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
const Failure = () => {
	
	const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
	return (
		<div>
			<h1>Payment Failed!</h1>
			<p>There was an issue with your payment. Please try again.</p>
			<button onClick={() => navigate("/")} className="go-home-button">
				Go to Homepage
			</button>
		</div>
	);
};

export default Failure;
