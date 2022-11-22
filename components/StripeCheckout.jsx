import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useCartContext } from '../context/cart_context'
import axios from 'axios'

import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const StripeCheckout = () => {
	const [clientSecret, setClientSecret] = useState('')
	const { cart } = useCartContext()

	console.log(clientSecret)

	const createPaymentIntent = async () => {
		try {
			const { data } = await axios.post('/api/create-payment-intent', { cart })
			setClientSecret(data.clientSecret)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		createPaymentIntent()
		// eslint-disable-next-line
	}, [])

	const appearance = {
		theme: 'stripe',
	}
	const options = {
		clientSecret,
		appearance,
	}

	return (
		<div className='App'>
			{clientSecret && (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			)}
		</div>
	)
}

export default StripeCheckout
