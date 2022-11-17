import { Box, styled } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const StyledImage = styled(Box)({
	position: 'relative',
	width: '100%',
	height: '75px',
})

const ProductImages = () => {
	return (
		<Box width={'100%'}>
			<Box
				sx={{
					position: 'relative',
					width: '100%',
					height: '600px',
					marginBottom: '1rem',
				}}>
				<Image
					style={{ borderRadius: '5px' }}
					layout='fill'
					objectFit='cover'
					quality={100}
					loading='eager'
					src='/images/sample-product-3.jpg'
					alt='product'></Image>
			</Box>
			<Box
				sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}
				gap={2.5}>
				<StyledImage>
					<Image
						style={{ borderRadius: '5px' }}
						layout='fill'
						objectFit='cover'
						quality={100}
						loading='eager'
						src='/images/sample-product-1.jpg'
						alt='product'></Image>
				</StyledImage>
				<StyledImage>
					<Image
						style={{ borderRadius: '5px' }}
						layout='fill'
						objectFit='cover'
						quality={100}
						loading='eager'
						src='/images/sample-product-1.jpg'
						alt='product'></Image>
				</StyledImage>
				<StyledImage>
					<Image
						style={{ borderRadius: '5px' }}
						layout='fill'
						objectFit='cover'
						quality={100}
						loading='eager'
						src='/images/sample-product-1.jpg'
						alt='product'></Image>
				</StyledImage>
				<StyledImage>
					<Image
						style={{ borderRadius: '5px' }}
						layout='fill'
						objectFit='cover'
						quality={100}
						loading='eager'
						src='/images/sample-product-1.jpg'
						alt='product'></Image>
				</StyledImage>
				<StyledImage>
					<Image
						style={{ borderRadius: '5px' }}
						layout='fill'
						objectFit='cover'
						quality={100}
						loading='eager'
						src='/images/sample-product-1.jpg'
						alt='product'></Image>
				</StyledImage>
			</Box>
		</Box>
	)
}

export default ProductImages
