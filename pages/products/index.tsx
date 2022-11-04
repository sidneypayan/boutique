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
	CardActionArea,
} from '@mui/material'
import { Stack } from '@mui/system'
import { formatPrice } from '../../utils/helpers'
import { useProductsContext } from '../../context/products_context'

const StyledButton = styled(Button)({
	justifyContent: 'start',
	fontSize: '.8rem',
	padding: '0',
	color: '#607d8b',
})

const Products = () => {
	const { products } = useProductsContext()

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
						<MenuItem>89x89</MenuItem>
						<MenuItem>125x125</MenuItem>
						<MenuItem>148x148</MenuItem>
					</Select>
				</FormControl>
			</Stack>
			<Container>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
					gap={2}
					mb={5}>
					<Typography>11 Produits trouvés</Typography>
					<Divider sx={{ width: '60%' }}></Divider>

					<FormControl
						component='fieldset'
						sx={{
							width: '100px',
							justifyContent: 'center',
						}}>
						<InputLabel id='trier'>Trier</InputLabel>
						<Select
							sx={{ '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
							labelId='trier'
							id='demo-simple-select'
							// value={size}
							label='size'
							// onChange={handleChange}
						>
							<MenuItem>Le moins cher</MenuItem>
							<MenuItem>Le plus cher</MenuItem>
							<MenuItem>Nom (A-Z)</MenuItem>
							<MenuItem>Nom (Z-A)</MenuItem>
						</Select>
					</FormControl>
				</Stack>
				<Grid container spacing={3} sx={{ margin: '0 auto', flexBasis: '85%' }}>
					{products.map(item => (
						<Grid item key={item.id} xs={12} sm={6} md={4}>
							<Box>
								<CardActionArea href={`/products/${item.id}`}>
									<CardMedia component='img' image={item.img} alt={item.name} />
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
								</CardActionArea>
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</Stack>
	)
}

export default Products
