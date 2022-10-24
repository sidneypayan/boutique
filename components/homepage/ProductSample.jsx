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
					xs: '100%',
					md: '33%',
				},
			}}>
			<CardMedia height={550} component='img' image={img.src} />
			<CardContent>
				<Stack direction='row' justifyContent='space-between'>
					<Typography color='teal' sx={{ fontWeight: '500' }}>
						{name}
					</Typography>
					<Typography color='teal' sx={{ fontWeight: '500' }}>
						{price}
					</Typography>
				</Stack>
			</CardContent>
		</StyledCard>
	)
}

export default ProductSample
