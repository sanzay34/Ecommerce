import React from 'react'
import Title from '../components/Title'
import about from '../assets/about.jpg'
import NewsLetterBox from '../components/NewsLetterBox';
const About = () => {
  return (
		<div>
			<div className="text-2xl text-center pt-8 border-t">
				<Title text1={"ABOUT"} text2={"US"} />
			</div>
			<div className="my-10 flex-col flex md:flex-row gap-16">
				<img src={about} className="w-full md:max-w-[450px]" alt="" />
				<div className="flex flex-col justify-center gap-6 md:w-2/4 text=gray-700">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
						atque nisi animi dicta debitis dolorem id maiores rem accusamus,
						asperiores, vero consectetur distinctio laboriosam culpa ex
						aspernatur assumenda. Ad, quidem!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quis
						numquam voluptatibus. Natus odit labore ex expedita ipsa nihil
						nesciunt dolorum magni, quisquam possimus, soluta quos cum fugit sed
						amet.
					</p>
					<b className="text-gray-700">Our Mission</b>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
						nobis optio, iste quos, alias molestiae blanditiis asperiores fugit
						magnam quisquam vel consectetur voluptatibus. Soluta sed minus
						adipisci, omnis non quaerat.
					</p>
				</div>
			</div>
			<div className="text-xl py-4">
				<Title text1={"WHY"} text2={"CHOOSE US"} />
			</div>
			<div className="flex flex-col md:flex-row text-sm mb-20 gap-4">
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-blue-200">
					<b className="text-xl">Quality Assurance</b>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
						eum accusamus porro libero dolores consequuntur, aliquam
						exercitationem quo voluptatum sapiente numquam, ipsam sequi
						pariatur. Inventore iste delectus iure aspernatur expedita.
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-blue-200">
					<b className="text-xl">Convenience</b>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
						eum accusamus porro libero dolores consequuntur, aliquam
						exercitationem quo voluptatum sapiente numquam, ipsam sequi
						pariatur. Inventore iste delectus iure aspernatur expedita.
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-blue-200">
					<b className="text-xl">Exceptional Customer Service</b>
					<p className="text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
						eum accusamus porro libero dolores consequuntur, aliquam
						exercitationem quo voluptatum sapiente numquam, ipsam sequi
						pariatur. Inventore iste delectus iure aspernatur expedita.
					</p>
				</div>
      </div>
      <NewsLetterBox/>
		</div>
	);
}

export default About