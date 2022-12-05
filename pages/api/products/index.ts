import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req

	switch (method) {
		case 'GET':
			try {
				const products = await prisma.product.findMany()
				res.status(200).json(products)
			} catch (error) {
				console.error('Request error', e)
				res.status(500).json({ error: 'Error fetching posts' })
			}
			break
		default:
			res.setHeader('Allow', ['GET'])
			res.status(405).end(`Method ${method} Not Allowed`)
			break
	}
}

export default handler
