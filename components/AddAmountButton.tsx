import { Add, Remove } from '@mui/icons-material'
import { Typography, Stack, IconButton } from '@mui/material'
import { Container } from '@mui/system'
import { useCartContext } from '../context/cart_context'

type AddAmountButtonProps = {
	id: number
	quantity: number
}

const AddAmountButton = ({ id, quantity }: AddAmountButtonProps) => {
	const { toggleProductQuantity } = useCartContext()

	return (
		<Container>
			<Stack
				color='#333'
				justifyContent='center'
				direction='row'
				alignItems='center'
				gap={2}
				mb={2}>
				<IconButton onClick={() => toggleProductQuantity(id, 'dec')}>
					<Remove />
				</IconButton>
				<Typography variant='h5' sx={{ fontWeight: '500' }}>
					{quantity}
				</Typography>
				<IconButton onClick={() => toggleProductQuantity(id, 'inc')}>
					<Add />
				</IconButton>
			</Stack>
		</Container>
	)
}

export default AddAmountButton
