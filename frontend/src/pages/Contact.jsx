import React from 'react'
import Title from '../components/Title'
import contact from '../assets/contact.jpg'
import NewsLetterBox from '../components/NewsLetterBox';
const Contact = () => {
  return (
		<div>
			<div className="text-center text-2xl pt-10 border-t">
				<Title text1={"CONTACT"} text2={"US"} />
			</div>
			<div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={contact} className="w-full md:max-w-[480px]" alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-700'>Our Store</p>
          <p className='text-gray-700'>Sandhara Marga <br/> Mahankal-6,Chabahil,Kathmandu</p>
          <p className='text-gray-600'> Tel:01-4567892 <br />Email:admin@example.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at KTM collection</p>
          <p className=' text-gray-600'>Learn more about our teams and vacancy</p>
          <button className='border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore More</button>

        </div>
      </div>
      <NewsLetterBox/>
		</div>
	);
}

export default Contact