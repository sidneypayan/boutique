import {
	Diamond,
	FavoriteBorderOutlined,
	Person,
	ShoppingCart,
} from '@mui/icons-material'
import { Box, AppBar, IconButton, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
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
					<IconButton>
						<Person />
					</IconButton>
					<IconButton>
						<ShoppingCart />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
