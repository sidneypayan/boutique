import { products } from '../../utils/constants'

import { Box, Stack } from '@mui/material'
import FeaturedProduct from './FeaturedProduct'

const ProductsSample = () => {
	return (
		<Box
			sx={{
				margin: '0 auto',
				marginTop: '10rem',
				width: {
					sm: '95%',
					lg: '80%',
				},
			}}>
			<Stack
				sx={{
					flexDirection: {
						sm: 'row',
					},
				}}
				justifyContent='space-between'
				alignItems='center'
				gap={5}>
				{products.slice(0, 3).map(item => (
					<FeaturedProduct key={item.id} {...item} />
				))}
			</Stack>
		</Box>
	)
}

export default ProductsSample
