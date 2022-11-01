import {
	styled,
	Card,
	CardMedia,
	Stack,
	CardContent,
	Typography,
} from '@mui/material'

type ProductProps = {
	id: number
	name: string
	price: number
	img: string
	size: string
	material: string
}

import { formatPrice } from '../../utils/helpers'

const StyledCard = styled(Card)({
	width: '300px',
	boxShadow: 'none',
	borderRadius: '0',
})

const ProductSample = ({ name, price, img }: ProductProps) => {
	return (
		<StyledCard
			sx={{
				width: {
					sm: '33%',
				},
			}}>
			<CardMedia
				sx={{
					height: {
						xl: '550px',
					},
				}}
				height={350}
				component='img'
				image={img}
			/>
			<CardContent>
				<Stack direction='row' justifyContent='space-between'>
					<Typography color='#607d8b' sx={{ fontWeight: '500' }}>
						{name}
					</Typography>
					<Typography color='#607d8b' sx={{ fontWeight: '500' }}>
						{formatPrice(price)}
					</Typography>
				</Stack>
			</CardContent>
		</StyledCard>
	)
}

export default ProductSample
