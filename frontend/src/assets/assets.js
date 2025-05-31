import React from 'react'

import pant from './pant1.jpg'
import pant1 from './pant2.jpg'
import pant2 from './pant3.jpg'
import pant3 from './pant4.jpg'
import ladiesjacket from './ladiesjacket.png'
import sweater from './sweater.png'
import tshirt from './tshirt.png'
import wollensweater from './woolensweater.png'



export const products = [
	{
		_id: "aaaa1",
		name: "Jeans pant ahlashds dsjkgdsiud dkhd",
		description:
			"djhsjakj adkkjd dkn  loremudisui Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facilis explicabo deleniti ut, at voluptates. Explicabo repellendus unde, exercitationem soluta qui, corporis aut ea saepe quaerat eveniet asperiores voluptate illo.",
		price: 500,
		image: [pant, pant1, pant2, pant3],
		category: "men",
		subcategory: "bottomwear",
		sizes: ["S", "M", "L", "XL", "XXL"],
		date: 343920349,
		bestseller: false,
	},

	{
		_id: "bbbb2",
		name: "ladies jacket",
		description: "jfal adfhd  dkfn",
		price: 493,
		image: [ladiesjacket],
		category: "women",
		subcategory: "topwear",
		sizes: ["S", "M", "L", "XL", "XXL"],
		date: 4324343,
		bestseller: false,
	},
	{
		_id: "ccc3",
		name: "sweater",
		description: "jfal adfhd  dkfn",
		price: 4933,
		image: [sweater],
		category: "men",
		subcategory: "topwear",
		sizes: ["S", "M", "L", "XL", "XXL"],
		date: 4324343,
		bestseller: true,
	},
	{
		_id: "dddd4",
		name: "woolen swaeater",
		description: "jfal adfhd  dkfn",
		price: 343,
		image: [wollensweater],
		category: "women",
		subcategory: "winterwear",
		sizes: ["S", "M", "L", "XL", "XXL"],
		date: 433343,
		bestseller: true,
	},
	{
		_id: "eeee5",
		name: "Tshirt",
		description: "jfal adfhd  dkfn",
		price: 3434,
		image: [tshirt],
		category: "men",
		subcategory: "topwear",
		sizes: ["S", "M", "L", "XL", "XXL"],
		date: 4343,
		bestseller: true,
	},
];