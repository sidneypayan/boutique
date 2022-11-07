import * as React from 'react'

import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { getProviders, signIn } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import {
	Divider,
	Avatar,
	Button,
	CssBaseline,
	TextField,
	Grid,
	Box,
	Typography,
	Container,
} from '@mui/material'

const theme = createTheme()

export default function SignUp({ providers }) {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		})
	}

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs' sx={{ margin: '5rem auto' }}>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign up
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='new-password'
								/>
							</Grid>
							<Divider />
							{Object.values(providers).map(provider => (
								<Grid item xs={12} key={provider.name}>
									<form action={provider.signinUrl} method='POST'>
										<Button
											sx={{ width: '100%', boxShadow: 'none', height: '50px' }}
											variant='contained'
											onClick={() => signIn(provider.id)}>
											Sign in with {provider.name}
										</Button>
									</form>
								</Grid>
							))}
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
							Sign Up
						</Button>
						{/* <Grid container justifyContent='flex-end'>
							<Grid item>
								<Link href='#' variant='body2'>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid> */}
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async context => {
	const providers = await getProviders()

	console.log(providers)

	return {
		props: { providers },
	}
}
