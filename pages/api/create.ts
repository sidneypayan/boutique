import { prisma } from '../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const main = async () => {
		const products = await prisma.product.createMany({
			data: [
				{
					name: 'Bel Ami',
					img: '/images/woolen-89-1.jpg',
					price: 5500,
					size: '89',
					material: 'wool',
				},
				{
					name: 'Romance',
					img: '/images/woolen-89-2.jpg',
					price: 5500,
					size: '89',
					material: 'wool',
				},
				{
					name: 'Thirst of Color',
					img: '/images/woolen-89-3.jpg',
					price: 5500,
					size: '89',
					material: 'wool',
				},
				{
					name: 'Serenade',
					img: '/images/woolen-125-1.jpg',
					price: 6500,
					size: '125',
					material: 'wool',
				},
				{
					name: 'Roses from Pavlovo',
					img: '/images/woolen-125-2.jpg',
					price: 6500,
					size: '125',
					material: 'wool',
				},
				{
					name: 'Crimson autumn',
					img: '/images/woolen-125-3.jpg',
					price: 6500,
					size: '125',
					material: 'wool',
				},
				{
					name: 'Beloved',
					img: '/images/woolen-148-1.jpg',
					price: 7500,
					size: '148',
					material: 'wool',
				},
				{
					name: 'Beloved',
					img: '/images/woolen-148-2.jpg',
					price: 7500,
					size: '148',
					material: 'wool',
				},
				{
					name: 'Beloved',
					img: '/images/woolen-148-3.jpg',
					price: 7500,
					size: '148',
					material: 'wool',
				},
				{
					name: 'Moon Garden',
					img: '/images/soie-1.jpg',
					price: 6500,
					size: '125',
					material: 'silk',
				},
				{
					name: 'Magic World',
					img: '/images/soie-2.jpg',
					price: 6500,
					size: '125',
					material: 'silk',
				},
				{
					name: 'Summer evening',
					img: '/images/soie-3.jpg',
					price: 6500,
					size: '125',
					material: 'silk',
				},
				{
					name: '10262',
					img: '/images/soie-4.jpg',
					price: 7500,
					size: '148',
					material: 'silk',
				},
				{
					name: '10266',
					img: '/images/soie-5.jpg',
					price: 7500,
					size: '148',
					material: 'silk',
				},
				{
					name: 'Pansies',
					img: '/images/soie-6.jpg',
					price: 7500,
					size: '148',
					material: 'silk',
				},
			],
		})

		console.log(products)
	}
	main()
}

export default handler
