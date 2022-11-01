import {
	styled,
	Box,
	Button,
	CardContent,
	CardMedia,
	FormControl,
	FormGroup,
	FormLabel,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Typography,
	Container,
	Divider,
} from '@mui/material'
import { Stack } from '@mui/system'
import { products } from '../utils/constants'
import { formatPrice } from '../utils/helpers'

const StyledButton = styled(Button)({
	justifyContent: 'start',
	fontSize: '.8rem',
	padding: '0',
	color: '#607d8b',
})

const Products = () => {
	return (
		<Stack
			sx={{
				margin: '0 auto',
				flexDirection: { md: 'row' },
				maxWidth: '1140px',
				padding: '2rem',
			}}
			justifyContent='center'
			gap={8}>
			<Stack sx={{ flexBasis: '15%' }}>
				<FormControl component='fieldset' sx={{ marginBottom: '1rem' }}>
					<FormLabel sx={{ fontWeight: '600' }}>Category</FormLabel>
					<FormGroup sx={{ marginTop: '1rem' }}>
						<StyledButton>Voir tout</StyledButton>
						<StyledButton>Laine</StyledButton>
						<StyledButton>Soie</StyledButton>
					</FormGroup>
				</FormControl>
				<FormControl component='fieldset' sx={{ marginBottom: '1rem' }}>
					<InputLabel id='demo-simple-select-label'>Taille</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						// value={size}
						label='size'
						// onChange={handleChange}
					>
						<MenuItem value={89}>89x89</MenuItem>
						<MenuItem value={125}>125x125</MenuItem>
						<MenuItem value={148}>148x148</MenuItem>
					</Select>
				</FormControl>
			</Stack>
			<Container>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
					gap={2}>
					<Typography>11 Produits trouvés</Typography>
					<Divider sx={{ width: '60%' }}></Divider>

					<FormControl
						component='fieldset'
						sx={{ marginBottom: '1rem', width: '150px' }}>
						<InputLabel id='demo-simple-select-label'>Trier</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							// value={size}
							label='size'
							// onChange={handleChange}
						>
							<MenuItem value={89}>Le moins cher</MenuItem>
							<MenuItem value={125}>Le plus cher</MenuItem>
							<MenuItem value={148}>Nom (A-Z)</MenuItem>
							<MenuItem value={148}>Nom (Z-A)</MenuItem>
						</Select>
					</FormControl>
				</Stack>
				<Grid container spacing={3} sx={{ margin: '0 auto', flexBasis: '85%' }}>
					{products.slice(3, -1).map(item => (
						<Grid item key={item.id} xs={12} sm={6} md={4}>
							<Box>
								<CardMedia component='img' image={item.img} />
								<CardContent>
									<Stack direction='row' justifyContent='space-between'>
										<Typography color='#607d8b' sx={{ fontWeight: '500' }}>
											{item.name}
										</Typography>
										<Typography color='#607d8b' sx={{ fontWeight: '500' }}>
											{formatPrice(item.price)}
										</Typography>
									</Stack>
								</CardContent>
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</Stack>
	)
}

export default Products
