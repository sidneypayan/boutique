import { Delete } from '@mui/icons-material'
import {
	Box,
	Button,
	Container,
	Divider,
	IconButton,
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
			}}>
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
								<AddAmountButton id={product.id} quantity={product.quantity} />
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
			<Link href='/products'>
				<Button variant='contained'>Continuer votre shopping</Button>
			</Link>
			<Typography variant='h5' textAlign='right'>
				Montant total : {formatPrice(total_price)}
			</Typography>
		</Container>
	)
}

export default Cart
