import  Payment from "../models/paymentModel.js"; //for saving the ordered data in database

import { EsewaPaymentGateway, EsewaCheckStatus } from "esewajs"; //we install our package hehe

const EsewaInitiatePayment = async (req, res) => {
	const {   amount,  itemId } = req.body; //data coming from frontend
	console.log(req.body)
	try {
		const reqPayment = await EsewaPaymentGateway(
			amount,
			0,
			0,
			0,
			itemId,

			items,
			address,
			process.env.MERCHANT_ID,
			process.env.SECRET,
			process.env.SUCCESS_URL,
			process.env.FAILURE_URL,
			process.env.ESEWAPAYMENT_URL,
			undefined,
			undefined
		);
		if (!reqPayment) {
			return res.status(400).json("error sending data");
		}
		if (reqPayment.status === 200) {
			const transaction = new Payment({
				product_id: itemId,
				amount: amount,
			});
			await transaction.save();
			console.log("transaction passed   ");
			return res.send({
				url: reqPayment.request.res.responseUrl,
			});
		}
	} catch (error) {
		return res.status(400).json("error sending data");
	}
};

const paymentStatus = async (req, res) => {
	const { itemId } = req.body; // Extract data from request body
	try {
		// Find the transaction by its signature
		const transaction = await Payment.findOne({ itemId });
		if (!transaction) {
			return res.status(400).json({ message: "Transaction not found" });
		}

		const paymentStatusCheck = await EsewaCheckStatus(
			transaction.amount,
			transaction.itemId,
			process.env.MERCHANT_ID,
			process.env.ESEWAPAYMENT_STATUS_CHECK_URL
		);

		if (paymentStatusCheck.status === 200) {
			// Update the transaction status
			transaction.status = paymentStatusCheck.data.status;
			await transaction.save();
			res
				.status(200)
				.json({ message: "Transaction status updated successfully" });
		}
	} catch (error) {
		console.error("Error updating transaction status:", error);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export { EsewaInitiatePayment, paymentStatus };
