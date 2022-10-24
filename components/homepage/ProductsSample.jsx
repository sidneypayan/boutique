import { Box, Stack } from '@mui/material'
import ProductSample from './ProductSample'

import sampleProduct1 from '../../public/images/sample-product-1.jpg'
import sampleProduct2 from '../../public/images/sample-product-2.jpg'
import sampleProduct3 from '../../public/images/sample-product-3.jpg'

const ProductsSample = () => {
	return (
		<Box
			width={'100%'}
			sx={{
				margin: '0 auto',
				marginTop: '7rem',
				width: {
					md: '70%',
				},
			}}>
			<Stack
				justifyContent='space-between'
				alignItems='center'
				gap={5}
				sx={{
					flexDirection: {
						md: 'row',
					},
				}}>
				<ProductSample name='Beloved' price='75€' img={sampleProduct1} />
				<ProductSample name='Sweet Flower' price='75€' img={sampleProduct2} />
				<ProductSample name='Eastern Tale' price='75€' img={sampleProduct3} />
			</Stack>
		</Box>
	)
}

export default ProductsSample
