import { Container } from '@mui/material'
import React from 'react'
import StripeCheckout from '../../components/StripeCheckout'

const Checkout = () => {
	return (
		<Container
			sx={{
				minHeight: 'calc(100vh - (330px))',
				maxWidth: {
					md: '600px',
				},
				marginBottom: '4rem',
			}}>
			<StripeCheckout />
		</Container>
	)
}

export default Checkout
