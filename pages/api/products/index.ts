import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
	const products = await prisma.product.findMany()
	res.status(200).json(products)
}

export default handler
