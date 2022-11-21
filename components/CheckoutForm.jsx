import { useEffect, useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button, Typography } from '@mui/material'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
// import { useSession } from 'next-auth/react'

const CheckoutForm = () => {
	const stripe = useStripe()
	const elements = useElements()
	const { total_price } = useCartContext()
	// const {
	// 	data: {
	// 		user: { name },
	// 	},
	// } = useSession()

	const [message, setMessage] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (!stripe) {
			return
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			'payment_intent_client_secret'
		)

		if (!clientSecret) {
			return
		}

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case 'succeeded':
					console.log('Success')
					setMessage('Payment succeeded!')
					break
				case 'processing':
					console.log('En cours')
					setMessage('Your payment is processing.')
					break
				case 'requires_payment_method':
					setMessage('Your payment was not successful, please try again.')
					break
				default:
					setMessage('Something went wrong.')
					break
			}
		})
	}, [stripe])

	const handleSubmit = async e => {
		e.preventDefault()

		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return
		}

		setIsLoading(true)

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: 'http://localhost:3000',
			},
		})

		// This point will only be reached if there is an immediate error when
		// confirming the payment. Otherwise, your customer will be redirected to
		// your `return_url`. For some payment methods like iDEAL, your customer will
		// be redirected to an intermediate site first to authorize the payment, then
		// redirected to the `return_url`.
		if (error.type === 'card_error' || error.type === 'validation_error') {
			setMessage(error.message)
		} else {
			setMessage('An unexpected error occurred.')
		}

		setIsLoading(false)
	}

	const paymentElementOptions = {
		layout: 'tabs',
	}

	return (
		<>
			{/* <Typography mb={2} variant='h5'>
				Merci {name} pour votre commande !
			</Typography> */}
			<Typography mb={1} variant='body1'>
				Montant à régler : {formatPrice(total_price)}
			</Typography>
			<Typography mb={2} variant='body1'>
				Numéro de CB pour test : 4242 4242 4242 4242
			</Typography>
			<form id='payment-form' onSubmit={handleSubmit}>
				<PaymentElement id='payment-element' options={paymentElementOptions} />
				<Button
					sx={{
						display: 'block',
						margin: '2rem auto',
					}}
					variant='contained'
					size='large'
					type='submit'
					disabled={isLoading || !stripe || !elements}
					id='submit'>
					<span id='button-text'>
						{isLoading ? <div className='spinner' id='spinner'></div> : 'Payer'}
					</span>
				</Button>
				{/* Show any error or success messages */}
				{message && <div id='payment-message'>{message}</div>}
			</form>
		</>
	)
}

export default CheckoutForm
