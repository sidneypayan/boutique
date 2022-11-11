import {
	InputLabel,
	MenuItem,
	Select,
	Divider,
	FormControl,
	Stack,
	Typography,
} from '@mui/material'
import { useFilterContext } from '../context/filter_context'

type SortProps = {
	productsCount: number
}

const Sort = ({ productsCount }: SortProps) => {
	const { sort, updateSort } = useFilterContext()

	return (
		<Stack
			direction='row'
			alignItems='center'
			justifyContent='space-between'
			gap={2}
			mb={5}>
			<Typography>{productsCount} Produits trouvés</Typography>
			<Divider sx={{ width: '60%' }}></Divider>

			<FormControl
				component='fieldset'
				sx={{
					justifyContent: 'center',
				}}>
				<InputLabel id='trier'>Trier</InputLabel>
				<Select
					sx={{ '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
					labelId='trier'
					id='demo-simple-select'
					value={sort}
					label='sort'
					onChange={updateSort}>
					<MenuItem value='price-lowest'>Le moins cher</MenuItem>
					<MenuItem value='price-highest'>Le plus cher</MenuItem>
					<MenuItem value='name-a'>Nom (A-Z)</MenuItem>
					<MenuItem value='name-z'>Nom (Z-A)</MenuItem>
				</Select>
			</FormControl>
		</Stack>
	)
}

export default Sort
