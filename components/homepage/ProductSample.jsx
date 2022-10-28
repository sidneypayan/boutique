import {
	styled,
	Card,
	CardMedia,
	Stack,
	Box,
	CardContent,
	Typography,
} from '@mui/material'

const StyledCard = styled(Card)({
	width: '300px',
	boxShadow: 'none',
	borderRadius: '0',
})

const ProductSample = ({ name, price, img }) => {
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
				image={img.src}
			/>
			<CardContent>
				<Stack direction='row' justifyContent='space-between'>
					<Typography color='#607d8b' sx={{ fontWeight: '500' }}>
						{name}
					</Typography>
					<Typography color='#607d8b' sx={{ fontWeight: '500' }}>
						{price}
					</Typography>
				</Stack>
			</CardContent>
		</StyledCard>
	)
}

export default ProductSample
