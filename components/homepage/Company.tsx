import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Company = () => {
	return (
		<Box
			mt={8}
			sx={{
				marginTop: {
					md: '10rem',
				},
			}}>
			<Stack
				gap={2}
				justifyContent='space-around'
				alignItems='center'
				sx={{
					flexDirection: {
						sm: 'row',
					},
				}}>
				<Typography
					color={'#455a64'}
					lineHeight={2}
					mb={8}
					sx={{
						order: {
							sm: '2',
						},
						marginBottom: {
							md: '0',
						},
					}}
					variant='h4'
					textAlign='center'>
					SAVOIR FAIRE <br /> QUALITE <br /> AUTHENTICITE
				</Typography>
				<Stack
					sx={{
						flexDirection: {
							xs: 'row',
						},
					}}>
					<Box
						sx={{
							display: {
								xs: 'none',
								lg: 'block',
							},
						}}
						width={205}
						component='img'
						src='/images/avant.jpg'></Box>
					<Box
						sx={{
							display: {
								xs: 'none',
								md: 'block',
							},
						}}
						width={205}
						component='img'
						src='/images/viero.jpg'></Box>
					<Box width={205} component='img' src='/images/fringle.jpg'></Box>
					<Box
						sx={{
							display: {
								xs: 'none',
								xl: 'block',
							},
						}}
						width={205}
						component='img'
						src='/images/termo.jpg'></Box>
					<Box
						sx={{
							display: {
								xs: 'none',
								sm: 'block',
							},
						}}
						width={205}
						component='img'
						src='/images/sewing.jpg'></Box>
				</Stack>
			</Stack>
		</Box>
	)
}

export default Company
