import { Box, styled } from '@mui/system'
import Image from 'next/image'
import React, { useState } from 'react'

const StyledImage = styled(Box)({
	position: 'relative',
	width: '100%',
	height: '75px',
	borderRadius: '5px',
	cursor: 'pointer',
})

type Gallery = {
	gallery: [
		{
			id: number | string
			url: string
		}
	]
}

const ProductImages = ({ gallery }: Gallery) => {
	const [currImg, setCurrImg] = useState(1)

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
					src={`/images/sample-product-${currImg}.jpg`}
					alt='product'></Image>
			</Box>
			<Box
				sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}
				gap={2.5}>
				{gallery.map(img => (
					<StyledImage
						key={img.id}
						onClick={() => setCurrImg(Number(img.id))}
						style={{
							boxShadow:
								Number(img.id) === currImg ? '0px 0px 0px 2px #ab7a5f' : 'none',
						}}>
						<Image
							style={{ borderRadius: '5px' }}
							layout='fill'
							objectFit='cover'
							quality={100}
							loading='eager'
							src={img.url}
							alt='product'></Image>
					</StyledImage>
				))}
			</Box>
		</Box>
	)
}

export default ProductImages
