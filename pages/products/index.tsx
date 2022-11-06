import {
	Box,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	Container,
	CardActionArea,
} from '@mui/material'
import { Stack } from '@mui/system'
import { formatPrice } from '../../utils/helpers'
// import { useProductsContext } from '../../context/products_context'
import { useFilterContext } from '../../context/filter_context'
import Filters from '../../components/Filters'
import Sort from '../../components/Sort'

const Products = () => {
	const { filtered_products: products } = useFilterContext()

	return (
		<Stack
			sx={{
				margin: '0 auto',
				flexDirection: { md: 'row' },
				maxWidth: '1140px',
				padding: '2rem',
			}}
			justifyContent='center'
			gap={8}>
			<Filters />
			<Container>
				<Sort />
				<Grid container spacing={3} sx={{ margin: '0 auto', flexBasis: '85%' }}>
					{products.map(item => (
						<Grid item key={item.id} xs={12} sm={6} md={4}>
							<Box>
								<CardActionArea href={`/products/${item.id}`}>
									<CardMedia component='img' image={item.img} alt={item.name} />
									<CardContent>
										<Stack direction='row' justifyContent='space-between'>
											<Typography color='#607d8b' sx={{ fontWeight: '500' }}>
												{item.name}
											</Typography>
											<Typography color='#607d8b' sx={{ fontWeight: '500' }}>
												{formatPrice(item.price)}
											</Typography>
										</Stack>
									</CardContent>
								</CardActionArea>
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</Stack>
	)
}

export default Products
