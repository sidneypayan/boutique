import { Add, Remove } from '@mui/icons-material'
import { Typography, Stack, IconButton, Button } from '@mui/material'
import { Container } from '@mui/system'

const AddToCart = () => {
	return (
		<Container>
			<Stack direction='row' alignItems='center' gap={2} mb={2}>
				<IconButton>
					<Remove />
				</IconButton>
				<Typography variant='h4' sx={{ fontWeight: '500' }}>
					1
				</Typography>
				<IconButton>
					<Add />
				</IconButton>
			</Stack>
			<Button variant='contained'>Add to cart</Button>
		</Container>
	)
}

export default AddToCart
