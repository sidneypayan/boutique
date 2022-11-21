import { NextApiRequest, NextApiResponse } from 'next'

// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
import { prisma } from '../../lib/prisma'
import { Product, DbProducts } from '../../interfaces'

const getProductsFromDB = async (cart: Product[]) => {
	const ids = cart.map(product => product.id)
	const products = await prisma.product.findMany({
		where: {
			id: { in: ids },
		},
		select: {
			id: true,
			price: true,
		},
	})

	return products
}

const mergeBothCarts = (clientCart: Product[], dbCart: DbProducts[]) => {
	const newCart = clientCart.map(clientProduct =>
		dbCart.reduce((prev, curr) => {
			if (clientProduct.id === curr.id) {
				return { ...clientProduct, ...curr }
			}
			return prev
		}, [])
	)
	return newCart
}

const calculateOrderAmount = (mergedCarts: Product[] | any[]) => {
	let totalPrice = 0
	mergedCarts.map(product => {
		const productPrice = product.quantity * product.price
		totalPrice += productPrice
	})
	return totalPrice
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { cart }: { cart: Product[] } = req.body
	const getDbProducts = await getProductsFromDB(cart)
	const mergedCarts = mergeBothCarts(cart, getDbProducts)

	// Create a PaymentIntent with the order amount and currency
	const paymentIntent = await stripe.paymentIntents.create({
		amount: calculateOrderAmount(mergedCarts),
		currency: 'eur',
		automatic_payment_methods: {
			enabled: false,
		},
	})

	res.send({
		clientSecret: paymentIntent.client_secret,
	})
}
