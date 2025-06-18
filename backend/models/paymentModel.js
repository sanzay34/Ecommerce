const mongoose = require('mongoose')
const paymentSchema = new mongoose.Schema({
    transactionId: { type: String, unique: true },
    pidx: { type: String, unique: true },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderModel",
        required:true,
    },
    amount: { type: Number, required: true },
    dataFromVerificationReq: { type: Object },
    apiQueryFromUser: { type: Object },
    paymentGateway: {
        type: string,
        enum: ['khalti', 'esewa'],
        required:true,
    },
    status: {
        type: string,
        enum: ['success', 'pending', 'failed'],
        default:'pending'
    },
    paymentDate:{type:Date,default:Date.now},
}, { timestamps: true });
const Payment = mongoose.model("payment", paymentSchema)
module.exports = Payment;