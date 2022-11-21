import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useCartContext } from '../context/cart_context'

import CheckoutForm from './CheckoutForm'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const StripeCheckout = () => {
	const [clientSecret, setClientSecret] = useState('')
	const { cart } = useCartContext()

	console.log(clientSecret)

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch('/api/create-payment-intent', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ cart }),
		})
			.then(res => res.json())
			.then(data => setClientSecret(data.clientSecret))
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
