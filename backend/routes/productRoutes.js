import express from 'express'
import { listProducts, singleProduct, removeProducts, addProducts } from '../controllers/productControllers.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';
const productRouter = express.Router();
productRouter.post(
	"/add",adminAuth,
	upload.fields([
		{ name: "image1", maxCount: 1 },
		{ name: "image2", maxCount: 1 },
		{ name: "image3", maxCount: 1 },
		{ name: "image4", maxCount: 1 },
	]),
	addProducts
);
productRouter.post('/remove',adminAuth, removeProducts);
productRouter.get('/list', listProducts);
productRouter.post('/single', singleProduct);
export default productRouter;