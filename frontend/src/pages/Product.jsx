import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products,currency,addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
       setImage(item.image[0])
        return null;
      }
    }) 
  }
  useEffect(() => {
    fetchProductData();
  },[productId,products])
  return productData ? (
		<div className="border-t-2 pt-2 transition-opacity ease-in duration-500 opacity-100">
			{/* Product Data */}
			<div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
				{/* Product Images */}
				<div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
					<div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18%] w-full">
						{productData.image.map((item, index) => (
							<img
								onClick={() => setImage(item)}
								src={item}
								key={index}
								className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
								alt=""
							/>
						))}
					</div>
					<div className="w-full sm:w-[80%]">
						<img src={image} className="w-full h-auto" alt="" />
					</div>
				</div>
				{/* -------------product info ------------- */}
				<div className="flex-1">
					<h1 className="font-medium text-2xl mt-2">{productData.name} </h1>
					<div className="flex items-center gap-1 mt-2">
						<FaStar className="w-4" />
						<FaStar className="w-4" />
						<FaStar className="w-4" />
						<FaStar className="w-4" />
						<FaStarHalf className="w-4" />
						<p className="pl-2">(23)</p>
					</div>
					<p className="mt-5 text-3xl font-medium">
						{currency}
						{productData.price}
					</p>
					<p className="mt-5 text-gray-600 md:w-4/5">
						{productData.description}
					</p>
					<div className="flex flex-col gap-4 my-8">
						<p> Select Size</p>
						<div className="flex gap-2">
							{productData.sizes.map((item, index) => (
								<button
									onClick={() => setSize(item)}
									className={`border py-2 cursor-pointer px-4 bg-gray-100 ${item===size?'border-green-500 bg-green-200':''}`}
									key={index}
								>
									{item}
								</button>
							))}
						</div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black cursor-pointer text-white px-8 py-3 text-sm active:bg-gray-600'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery available on this product.</p>
            <p>Easy return and exchange policy within 7 days period.</p>

          </div>
        </div>
      </div>
      {/* ------------ Description and Review section------------ */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(23)</p>

        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quis neque debitis ab ex iste atque, unde rem, dolores modi eum quo! Aliquid, asperiores quas. Commodi ipsum minus ex eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo impedit laboriosam accusantium dignissimos eveniet distinctio. Consequatur, vero explicabo sed quos itaque eaque ipsa, nulla maiores, temporibus excepturi optio accusantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati, possimus laudantium maxime necessitatibus dicta nesciunt expedita, odit pariatur assumenda quibusdam animi, voluptatibus dolorem est vitae. Tempore nulla repellat sunt.</p>
        </div>

      </div>
      {/* --------display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
		</div>
	) : (
		<div className="opacity-0"></div>
	);
}

export default Product