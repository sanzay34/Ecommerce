import express from 'express'
import { addToCart, updateCart, getUserCart } from '../controllers/cartControllers.js'
import authUser from '../middleware/auth.js'

const cartRouter = express.Router()
cartRouter.post('/get',authUser ,getUserCart)
cartRouter.post('/update',authUser ,updateCart)
cartRouter.post('/add',authUser , addToCart)

export default cartRouter