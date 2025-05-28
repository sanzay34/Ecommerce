import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModels.js'
//function for add products
const addProducts =async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;
        const image1 = req.files?.image1?.[0] || null
        const image2 = req.files?.image2?.[0] || null
        const image3 = req.files?.image3?.[0] ||null
        const image4 = req.files?.image4?.[0] || null
        const images = [image1, image2, image3, image4].filter((item) => item !== null)
        let imageUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )
        const productData = {
            name, description,
            category, subCategory, price: Number(price), bestSeller: bestSeller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imageUrl,
            date:Date.now()
            
        }
        console.log(productData)

        const product = new productModel(productData);
        await product.save()
        res.json({success:true,message:"Product added!!"})
    } catch (error) {
        console.log(error) 
        res.json({success:false,message:error.message})
    }
}

//function for list products
const listProducts =async (req, res) => {
    
    try {
        const products = await productModel.find({});
        res.json({success:true,products})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

//function for removing products
const removeProducts = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product deleted!!!"})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });
    }
    
}

//function for single product info
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})
    } catch (error) {
        console.log(error);
				res.json({ success: false, message: error.message });
    }
    
}

export {addProducts,listProducts,removeProducts,singleProduct}