import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({
    transactionId: { type: String, unique: true },
    pidx: { type: String, unique: true },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderModel",
        required:true,
    },
    amount: { type: Number, required: true,min:0, },
    dataFromVerificationReq: { type: Object },
    apiQueryFromUser: { type: Object },
    paymentGateway: {
        type: String,
        enum: ['khalti', 'esewa',"cod"],
        required:true,
    },
    status: {
        type: String,
        enum: ['success', 'pending', 'failed'],
        default:'pending'
    },
    paymentDate:{type:Date,default:Date.now},
}, { timestamps: true });
const Payment = mongoose.model("payment", paymentSchema);
export default Payment;