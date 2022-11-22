import { Delete } from '@mui/icons-material'
import {
	Box,
	Button,
	Container,
	Divider,
	IconButton,
	Stack,
	Typography,
} from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AddAmountButton from '../../components/AddAmountButton'
import { useCartContext } from '../../context/cart_context'
import { formatPrice } from '../../utils/helpers'

const Cart = () => {
	const { cart, total_price, deleteProductFromCart } = useCartContext()

	const [cartProducts, setCartProducts] = useState([])

	useEffect(() => {
		setCartProducts(cart)
	}, [cart])

	return (
		<Container
			sx={{
				minHeight: 'calc(100vh - (330px))',
				color: '#617d98',
				marginBottom: '4rem',
			}}>
			{cart.length > 0 ? (
				<>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr 1fr 40px',
							textAlign: 'center',
						}}>
						<Box>
							<Typography>Item</Typography>
						</Box>
						<Box>
							<Typography>Price</Typography>
						</Box>
						<Box>
							<Typography>Quantity</Typography>
						</Box>
						<Box>
							<Typography>Subtotal</Typography>
						</Box>
					</Box>
					<Divider sx={{ margin: '1.5rem auto' }}></Divider>
					{cartProducts.map(product => (
						<div key={product.id}>
							<Box
								sx={{
									display: 'grid',
									gridTemplateColumns: '1fr 1fr 1fr 1fr auto',
									textAlign: 'center',
								}}
								alignItems='center'>
								<Box display='flex' alignItems='center' gap={3}>
									<Box
										component='img'
										src={product.img}
										sx={{
											height: 75,
											width: 75,
										}}></Box>
									<Typography color='#333' sx={{ fontWeight: '500' }}>
										{product.name}
									</Typography>
								</Box>
								<Box>
									<Typography>{formatPrice(product.price)}</Typography>
								</Box>
								<Box>
									<Typography>
										<AddAmountButton
											id={product.id}
											quantity={product.quantity}
										/>
									</Typography>
								</Box>

								<Typography>
									{formatPrice(product.quantity * product.price)}
								</Typography>
								<IconButton onClick={() => deleteProductFromCart(product.id)}>
									<Delete />
								</IconButton>
							</Box>
							<Divider sx={{ margin: '1.5rem auto' }}></Divider>
						</div>
					))}

					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='center'>
						<Link href='/products'>
							<Button variant='contained' sx={{ height: 'auto' }}>
								Continuer votre shopping
							</Button>
						</Link>
						<Stack justifyContent='center' gap={2} mt={2}>
							<Typography variant='h5'>
								Montant total : {formatPrice(total_price)}
							</Typography>
							<Link href='/checkout'>
								<Button variant='contained'>Procéder au paiment</Button>
							</Link>
						</Stack>
					</Stack>
				</>
			) : (
				<>
					<Typography mb={2} variant='h4'>
						Votre panier est vide
					</Typography>
					<Button href='/products' size='large' variant='contained'>
						Remplissez-le
					</Button>
				</>
			)}
		</Container>
	)
}

export default Cart
