import { Button, Container, Stack, Typography, Divider } from '@mui/material'
import AddToCart from '../../components/AddToCart'

import ProductImages from '../../components/ProductImages'
import Stars from '../../components/Stars'
import { formatPrice } from '../../utils/helpers'

import axios from 'axios'

const Product = ({ product }) => {
	return (
		<Container sx={{ maxWidth: '1170px', margin: '5rem auto' }}>
			<Button
				variant='contained'
				sx={{
					marginBottom: '2rem',
				}}>
				Retour aux produits
			</Button>
			<Stack sx={{ flexDirection: { md: 'row' } }}>
				<ProductImages />
				<Container>
					<Typography variant='h4' mb={1} sx={{ fontWeight: '600' }}>
						{product.name}
					</Typography>
					<Stars />
					<Typography variant='h5' mb={2} sx={{ fontWeight: '500' }}>
						{formatPrice(product.price)}
					</Typography>
					<Typography variant='body1' sx={{ lineHeight: '2rem' }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
						veritatis quo perspiciatis delectus soluta exercitationem harum
						rerum nihil minima, vero, tenetur vel veniam reprehenderit adipisci
						eaque unde modi itaque maxime asperiores maiores? Nulla dignissimos,
						labore ipsa fugiat repellat iure repudiandae neque, architecto
						sapiente ut ipsum est excepturi reiciendis deleniti quibusdam.
					</Typography>
					<Divider sx={{ margin: '2rem auto' }}></Divider>
					<AddToCart />
				</Container>
			</Stack>
		</Container>
	)
}

export const getStaticProps = async ({ params }) => {
	const response = await axios(
		`http://localhost:3000/api/products/${params.id}`
	)
	const product = response.data

	return {
		props: {
			product,
		},
		revalidate: 60,
	}
}

export const getStaticPaths = async () => {
	const response = await axios('http://localhost:3000/api/products')
	const products = response.data

	const paths = products.map(product => ({
		params: { id: product.id.toString() },
	}))

	return { paths, fallback: 'blocking' }
}

export default Product
