import { Add, Remove } from '@mui/icons-material'
import { Typography, Stack, IconButton, Button } from '@mui/material'
import { Container } from '@mui/system'
import { useCartContext } from '../context/cart_context'
import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'

type ProductProps = {
	product: {
		id: number
		img: string
		material: string
		name: string
		price: number
		size: string
	}
	quantity: number
	setQuantity: Dispatch<SetStateAction<number>>
}

const AddToCart = ({ product, quantity, setQuantity }: ProductProps) => {
	const router = useRouter()
	const { addProductToCart } = useCartContext()

	const { id, img, material, name, price, size } = product

	const increaseCount = () => {
		setQuantity(prevQuantity => prevQuantity + 1)
	}
	const decreaseCount = () => {
		if (quantity <= 1) return
		setQuantity(prevQuantity => prevQuantity - 1)
	}

	return (
		<Container>
			<Stack direction='row' alignItems='center' gap={2} mb={2}>
				<IconButton onClick={decreaseCount}>
					<Remove />
				</IconButton>
				<Typography variant='h4' sx={{ fontWeight: '500' }}>
					{quantity}
				</Typography>
				<IconButton onClick={increaseCount}>
					<Add />
				</IconButton>
			</Stack>
			<Button
				variant='contained'
				onClick={() => {
					addProductToCart({ id, img, material, name, price, size, quantity })
					setQuantity(1)
					// router.push('/cart')
				}}>
				Add to cart
			</Button>
		</Container>
	)
}

export default AddToCart
