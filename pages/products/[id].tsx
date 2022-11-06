import { Button, Container, Stack, Typography, Divider } from '@mui/material'

import ProductImages from '../../components/ProductImages'
import Stars from '../../components/Stars'

const Product = () => {
	return (
		<Container sx={{ maxWidth: '1170px', marginTop: '5rem' }}>
			<Button sx={{ backgroundColor: '#f4f4f4', marginBottom: '2rem' }}>
				Retour aux produits
			</Button>
			<Stack sx={{ flexDirection: { md: 'row' } }}>
				<ProductImages />
				<Container>
					<Typography variant='h4' mb={1} sx={{ fontWeight: '600' }}>
						Product Name
					</Typography>
					<Stars />
					<Typography variant='h5' mb={2} sx={{ fontWeight: '500' }}>
						50€
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
				</Container>
			</Stack>
		</Container>
	)
}

export default Product
