import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems'
const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])
    useEffect(() => {
        setLatestProducts(products.slice(0, 5));
    },[products]
    )
  return (
      <div className='my-10'>
          <div className='text-center py-8 text-3xl'>
              <Title text1={'LATEST'} text2={'COLLECTION'} />
              <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, commodi! Doloremque maiores laudantium architecto dolore, molestias temporibus consequatur explicabo consequuntur est ipsam culpa quis, rerum molestiae velit nisi provident obcaecati.
              </p>
          </div>
          {/* Rendering Products */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {
                   latestProducts.map((item,index)=>(
                    <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                    ))
                    
             }
          </div>
    </div>
  )
}

export default LatestCollection