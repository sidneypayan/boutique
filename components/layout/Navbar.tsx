import {
	Diamond,
	// FavoriteBorderOutlined,
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
import Link from 'next/link'
import { useCartContext } from '../../context/cart_context'

const Navbar = () => {
	const { status } = useSession()
	const { total_quantity } = useCartContext()

	// console.log(total_quantity)

	return (
		<AppBar
			sx={{
				backgroundColor: 'transparent',
				boxShadow: 'none',
				color: '#607d8b',
				position: 'relative',
				maxWidth: '1440px',
				margin: '0 auto',
				marginBottom: '5rem',
			}}>
			<Toolbar
				sx={{
					justifyContent: 'space-between',
					paddingTop: '4rem',
				}}>
				<Link href='/'>
					<Typography
						variant='h5'
						sx={{
							display: { xs: 'none', sm: 'block' },
							cursor: 'pointer',
						}}>
						BOUTIQUE
					</Typography>
				</Link>
				<Diamond sx={{ display: { xs: 'block', sm: 'none' } }} />
				<Box>
					{/* <IconButton>
						<FavoriteBorderOutlined />
					</IconButton> */}
					{status === 'authenticated' ? (
						<IconButton onClick={() => signOut()}>
							<Logout />
						</IconButton>
					) : (
						<IconButton onClick={() => signIn()}>
							<Person />
						</IconButton>
					)}
					<Link href='/cart'>
						<IconButton>
							<Badge badgeContent={total_quantity} color='primary'>
								<ShoppingCart />
							</Badge>
						</IconButton>
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
