import { prisma } from '../../lib/prisma'
import { products } from '../../utils/constants'

const handler = () => {
	const main = async () => {
		try {
			await prisma.product.deleteMany()
			await prisma.product.createMany({
				data: products,
			})
			console.log('Success!')
		} catch (error) {
			console.log(error)
		}
	}
	main()
}

export default handler
