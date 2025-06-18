import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongoDB.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoutes.js'
import cartRouter from './routes/cartRoutes.js'
import orderRouter from './routes/orderRoutes.js'
import bodyParser from 'body-parser'
import {
	EsewaInitiatePayment,
	paymentStatus,
} from "./controllers/esewa_controllers.js";
//App config
const app = express()
const port = process.env.PORT || 4000
connectDB();
connectCloudinary()

//Middlewares
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Allow only Netlify frontend
const allowedOrigins = ['https://ktmfashioncollection.netlify.app'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

//api endpoints
app.use('/api/user',userRouter)
app.use('api/product', productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order', orderRouter)

//paymenets endpoints
app.post("/api/payment/esewa/initiate", EsewaInitiatePayment);
app.post("/api/payment/esewa/status", paymentStatus);

app.get('/', (req, res) => {
    res.send("API WORKING")
})

app.listen(port,()=>console.log(`server started on PORT: ${port}`))