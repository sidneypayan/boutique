import { GetStaticProps, GetStaticPaths } from 'next'
import {
	Button,
	Container,
	Stack,
	Typography,
	Divider,
	Box,
} from '@mui/material'
import AddToCart from '../../components/AddToCart'

import ProductImages from '../../components/ProductImages'
import Stars from '../../components/Stars'
import { formatPrice } from '../../utils/helpers'
import { useState } from 'react'

// import axios from 'axios'
import { prisma } from '../../lib/prisma'
import Link from 'next/link'

type ProductProps = {
	product: {
		id: number
		img: string
		material: string
		name: string
		price: number
		size: string
	}
}

const Product = ({ product }: ProductProps) => {
	const [quantity, setQuantity] = useState(1)

	return (
		<Container sx={{ margin: '5rem auto' }}>
			<Button
				variant='contained'
				sx={{
					marginBottom: '2rem',
				}}>
				<Link href='/products'>
					<Typography variant='button'>Retour aux produits</Typography>
				</Link>
			</Button>
			<Stack sx={{ flexDirection: { md: 'row' } }} gap={4}>
				<ProductImages />
				<Box width='100%'>
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
					<AddToCart
						product={product}
						quantity={quantity}
						setQuantity={setQuantity}
					/>
				</Box>
			</Stack>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const product = await prisma.product.findUnique({
		where: {
			id: Number(params.id),
		},
		select: {
			id: true,
			name: true,
			img: true,
			price: true,
			size: true,
			material: true,
		},
	})
	// const response = await axios(`/api/products/${params.id}`)
	// const product = response.data

	return {
		props: {
			product,
		},
		revalidate: 60,
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await prisma.product.findMany()
	// const response = await axios('/api/products')
	// const products = response.data

	const paths = products.map((product: ProductProps['product']) => ({
		params: { id: product.id.toString() },
	}))

	return { paths, fallback: 'blocking' }
}

export default Product
