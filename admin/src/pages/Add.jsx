import React, { useState } from 'react'
import { BsCloudUploadFill } from "react-icons/bs";
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
const Add = ({token}) => {
  const[image1,setImage1]=useState(false)
  const[image2,setImage2]=useState(false)
  const[image3,setImage3]=useState(false)
  const [image4, setImage4] = useState(false)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestSeller",bestSeller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4", image4)
      
      const response = await axios.post(backendUrl + "/api/product/add", formData,{headers:{token}})
		if (response.data.success) {
			toast.success(response.data.message)
			setName('')
			setDescription('')
			setImage1(false)
			setImage2(false)
			setImage3(false)
			setImage4(false)
			setPrice('')
		} else {
			toast.error(response.data.message)
	  }
     
    } catch (error) {
		console.log(error);
		toast.error(error.message)
    }
  }
  return (
		<form
			onSubmit={onSubmitHandler}
			className="flex flex-col w-full items-start gap-3"
		>
			<div className="">
				<p className="mb-2">Upload Image</p>
				<div className="flex gap-2">
					<label htmlFor="image1" className="cursor-pointer">
						{!image1 ? (
							<BsCloudUploadFill className="w-20 h-20 border border-dotted p-3 bg-amber-100" />
						) : (
							<img
								src={URL.createObjectURL(image1)}
								alt="Preview"
								className="w-20 h-20"
							/>
						)}
						<input
							onChange={(e) => setImage1(e.target.files[0])}
							type="file"
							id="image1"
							hidden
						/>
					</label>
					<label htmlFor="image2" className="cursor-pointer">
						{!image2 ? (
							<BsCloudUploadFill className="w-20 h-20 border border-dotted p-3 bg-amber-100" />
						) : (
							<img
								src={URL.createObjectURL(image2)}
								alt="Preview"
								className="w-20 h-20"
							/>
						)}
						<input
							onChange={(e) => setImage2(e.target.files[0])}
							type="file"
							id="image2"
							hidden
						/>
					</label>
					<label htmlFor="image3" className="cursor-pointer">
						{!image3 ? (
							<BsCloudUploadFill className="w-20 h-20 border border-dotted p-3 bg-amber-100" />
						) : (
							<img
								src={URL.createObjectURL(image3)}
								alt="Preview"
								className="w-20 h-20"
							/>
						)}
						<input
							onChange={(e) => setImage3(e.target.files[0])}
							type="file"
							id="image3"
							hidden
						/>
					</label>
					<label htmlFor="image4" className="cursor-pointer">
						{!image4 ? (
							<BsCloudUploadFill className="w-20 h-20 border border-dotted p-3 bg-amber-100" />
						) : (
							<img
								src={URL.createObjectURL(image4)}
								alt="Preview"
								className="w-20 h-20"
							/>
						)}
						<input
							onChange={(e) => setImage4(e.target.files[0])}
							type="file"
							id="image4"
							hidden
						/>
					</label>
				</div>
			</div>
			<div className="w-full mb-3 mt-3">
				<p className="mb-2">Product name</p>
				<input
					onChange={(e) => setName(e.target.value)}
					value={name}
					type="text"
					placeholder="Type here"
					className="w-full max-w-[500px] px-3 py-2"
					required
				/>
			</div>
			<div className="w-full mb-3">
				<p className="mb-2">Product description</p>
				<textarea
					onChange={(e) => setDescription(e.target.value)}
					value={description}
					type="text"
					placeholder="Description of the Products"
					className="w-full max-w-[500px] px-3 py-2"
					required
				/>
			</div>
			<div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
				<div>
					<p className="mb-2">Product category</p>
					<select
						onChange={(e) => setCategory(e.target.value)}
						value={category}
						className="w-full px-3 py-2"
					>
						<option value="Men">Men</option>
						<option value="Women">Women</option>
						<option value="Kids">Kids</option>
					</select>
				</div>

				<div>
					<p className="mb-2">Sub-category</p>
					<select
						onChange={(e) => setSubCategory(e.target.value)}
						value={subCategory}
						className="w-full px-3 py-2"
					>
						<option value="Topwear">Topwear</option>
						<option value="Bottomwear">Bottomwear</option>
						<option value="Winterwear">Winterwear</option>
					</select>
				</div>

				<div>
					<p className="mb-2">Product Price</p>
					<input
						onChange={(e) => setPrice(e.target.value)}
						value={price}
						type="Number"
						className="w-full px-3 py-2 sm:w-[120px]"
						placeholder="999"
						required
					/>
				</div>
			</div>
			<div className="mt-3">
				<p className="mb-2">Product Sizes</p>
				<div className="flex gap-3 ">
					<div
						onClick={() =>
							setSizes((prev) =>
								prev.includes("S")
									? prev.filter((item) => item !== "S")
									: [...prev, "S"]
							)
						}
						className={`${
							sizes.includes("S") ? "bg-green-200" : "bg-pink-100"
						} px-3 py-1 cursor-pointer`}
					>
						S
					</div>
					<div
						onClick={() =>
							setSizes((prev) =>
								prev.includes("M")
									? prev.filter((item) => item !== "M")
									: [...prev, "M"]
							)
						}
						className={`${
							sizes.includes("M") ? "bg-green-200" : "bg-pink-100"
						} px-3 py-1 cursor-pointer`}
					>
						M
					</div>
					<div
						onClick={() =>
							setSizes((prev) =>
								prev.includes("L")
									? prev.filter((item) => item !== "L")
									: [...prev, "L"]
							)
						}
						className={`${
							sizes.includes("L") ? "bg-green-200" : "bg-pink-100"
						} px-3 py-1 cursor-pointer`}
					>
						L
					</div>
					<div
						onClick={() =>
							setSizes((prev) =>
								prev.includes("XL")
									? prev.filter((item) => item !== "XL")
									: [...prev, "XL"]
							)
						}
						className={`${
							sizes.includes("XL") ? "bg-green-200" : "bg-pink-100"
						} px-3 py-1 cursor-pointer`}
					>
						XL
					</div>
					<div
						onClick={() =>
							setSizes((prev) =>
								prev.includes("XXL")
									? prev.filter((item) => item !== "XXL")
									: [...prev, "XXL"]
							)
						}
						className={`${
							sizes.includes("XXL") ? "bg-green-200" : "bg-pink-100"
						} px-3 py-1 cursor-pointer`}
					>
						XXL
					</div>
				</div>
			</div>
			<div className="flex gap-2 mt-3">
				<input
					onChange={() => setBestSeller((prev) => !prev)}
					checked={bestSeller}
					type="checkbox"
					id="bestSeller"
				/>
				<label className="cursor-pointer" htmlFor="bestSeller">
					Add to bestseller
				</label>
			</div>
			<button
				type="submit"
				className="bg-black rounded-md cursor-pointer text-white w-28 px-1 py-2 mt-5"
			>
				ADD
			</button>
		</form>
	);
}

export default Add