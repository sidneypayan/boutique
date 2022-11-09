import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { Product } from '../../../interfaces'

type ResponseError = {
	message: string
}

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<Product | ResponseError>
) => {
	const { query } = req
	const { id } = query
	const product = await prisma.product.findUnique({ where: { id: Number(id) } })
	res.status(201).json(product)
}

export default handler
