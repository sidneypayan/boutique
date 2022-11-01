import { Stack, Typography } from '@mui/material'

import { Facebook, Instagram, Twitter } from '@mui/icons-material'

const Footer = () => {
	return (
		<Stack
			gap={3}
			alignItems='center'
			justifyContent='center'
			sx={{
				backgroundColor: '#e3f2fd',
				padding: '4rem',
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

			<Stack direction='row' gap={3}>
				<Facebook fontSize='large' />
				<Instagram fontSize='large' />
				<Twitter fontSize='large' />
			</Stack>

			<Typography variant='h4' textAlign='center' sx={{ order: 3 }}>
				ECHARPE & BELLE
			</Typography>
		</Stack>
	)
}

export default Footer
