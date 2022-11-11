import { Box, Stack, Typography } from '@mui/material'

import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import Image from 'next/image'

const Footer = () => {
	return (
		<Stack
			color='#424242'
			component='footer'
			gap={2}
			alignItems='center'
			justifyContent='center'
			sx={{
				backgroundColor: '#e3f2fd',
				height: '10rem',
				padding: '0 5rem',
				paddingTop: {
					xs: '3rem',
					md: '0',
				},
				flexDirection: {
					md: 'row',
				},
				justifyContent: {
					md: 'space-between',
				},
			}}>
			<Stack
				direction='row'
				sx={{
					flexDirection: { md: 'column' },
					gap: { xs: '2rem', md: '.25rem' },
				}}>
				<Typography variant='subtitle2'>A propos de nous</Typography>
				<Typography variant='subtitle2'>Nous écrire</Typography>
			</Stack>

			<Box
				sx={{
					position: 'relative',
					width: { xs: '75px', md: '125px' },
					height: { xs: '75px', md: '125px' },
					display: {
						xs: 'none',
						md: 'block',
					},
				}}>
				<Image
					src='/images/logo.png'
					layout='fill'
					objectFit='cover'
					alt='logo'
				/>
			</Box>

			<Stack direction='row' gap={3}>
				<Facebook fontSize='large' />
				<Instagram fontSize='large' />
				<Twitter fontSize='large' />
			</Stack>
		</Stack>
	)
}

export default Footer
