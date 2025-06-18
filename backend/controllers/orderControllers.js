import orderModel from "../models/orderModel.js"
import userModels from "../models/userModels.js"


//global variables

const currency = 'Rs.'
const deliveryCharge=10


//Placing order using COD method
const placeOrder = async (req, res) => {
    try {

        const { userId, items, amount, address } = req.body
        const orderData = {
            userId,address,items,amount,paymentMethod:"COD",payment:false,date:Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save();
        await userModels.findByIdAndUpdate(userId, { cartData: {} })
        
        res.json({success:true,message:"Order Placed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
//placing order using khalti method
const placeOrderKhalti = async (req, res) => {
   
}

//placing order using esewa
const placeOrderEsewa = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers
        const orderData = {
					userId,
					address,
					items,
					amount,
					paymentMethod: "esewa",
					payment: false,
					date: Date.now(),
        };
        const newOrder = new orderModel(orderData);
        await newOrder.save();
        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name:item.name
                },
                unit_amount:item.price *100
            },quantity:item.quantity
        }))
        line_items.push({
					price_data: {
						currency: currency,
						product_data: {
							name: "Delivery Charge",
						},
						unit_amount: deliveryCharge * 100,
					},
					quantity: 1,
        });
        const session = await esewa.checkout.sessions.create({
					succces_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
                    mode:'payment',
        });
        res.json({success:true,session_url:session.url})
    } catch (error) {
        console.log(error);
				res.json({ success: false, message: error.message });
    }
        
}

//All orders data for Admin Panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
				res.json({ success: false, message: error.message });
    }
}

//user order data for frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId })
        res.json({success:true,orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
    
}

//update order status for Admin Panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({success:true,message:'Status Updated'})
    } catch (error) {
        console.log(error);
				res.json({ success: false, message: error.message });
    }
}
export {placeOrder,placeOrderKhalti,placeOrderEsewa,userOrders,updateStatus,allOrders}