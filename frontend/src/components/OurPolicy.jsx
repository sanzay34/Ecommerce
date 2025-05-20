import React from 'react'
import { FaCheckCircle, FaExchangeAlt, FaHeadset } from 'react-icons/fa'
const OurPolicy = () => {
  return (
		<div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-600">
			<div className="">
				<FaExchangeAlt className="w-16 m-auto mb-5" />
				<p className="font-semibold">Easy Exchange Policy</p>
				<p className="text-gray-600">We offer hassle free exchange policy</p>
			</div>
			<div className="">
				<FaCheckCircle className="w-16 m-auto mb-5" />
				<p className="font-semibold">Easy Exchange Policy</p>
				<p className="text-gray-600">We offer 7 days return policy</p>
			</div>
			<div className="">
				<FaHeadset className="w-16 m-auto mb-5" />
				<p className="font-semibold">Easy Exchange Policy</p>
				<p className="text-gray-600">We provide 24/7 customer support.</p>
			</div>
		</div>
	);
}

export default OurPolicy