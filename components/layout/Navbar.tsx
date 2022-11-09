import {
	Diamond,
	FavoriteBorderOutlined,
	Person,
	ShoppingCart,
	Logout,
} from '@mui/icons-material'
import {
	Box,
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Badge,
} from '@mui/material'

import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

const Navbar = () => {
	const { data: session, status } = useSession()
	return (
		<AppBar
			sx={{
				backgroundColor: 'transparent',
				boxShadow: 'none',
				marginTop: '2rem',
				color: '#607d8b',
				position: 'relative',
			}}>
			<Toolbar
				sx={{
					justifyContent: 'space-between',
					width: '1140px',
					maxWidth: '80%',
					margin: '0 auto',
				}}>
				<Typography
					variant='h5'
					sx={{
						display: { xs: 'none', sm: 'block' },
					}}>
					BOUTIQUE
				</Typography>
				<Diamond sx={{ display: { xs: 'block', sm: 'none' } }} />
				<Box>
					<IconButton>
						<FavoriteBorderOutlined />
					</IconButton>
					{status === 'authenticated' ? (
						<IconButton onClick={() => signOut()}>
							<Logout />
						</IconButton>
					) : (
						<IconButton onClick={() => signIn()}>
							<Person />
						</IconButton>
					)}
					<IconButton>
						<Badge badgeContent={4} color='primary'>
							<ShoppingCart />
						</Badge>
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
