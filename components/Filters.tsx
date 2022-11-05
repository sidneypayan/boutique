import {
	styled,
	Button,
	FormGroup,
	FormLabel,
	Stack,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material'

import { useFilterContext } from '../context/filter_context'

const StyledButton = styled(Button)({
	justifyContent: 'start',
	fontSize: '.8rem',
	padding: '0',
	color: '#607d8b',
})

const Filters = () => {
	const {
		filters: { size },
		updateFilters,
	} = useFilterContext()

	return (
		<Stack sx={{ flexBasis: '15%' }}>
			<FormControl component='fieldset' sx={{ marginBottom: '1rem' }}>
				<FormLabel sx={{ fontWeight: '600' }}>Category</FormLabel>
				<FormGroup sx={{ marginTop: '1rem' }}>
					<StyledButton name='material' onClick={updateFilters}>
						Voir tout
					</StyledButton>
					<StyledButton name='material' onClick={updateFilters}>
						Laine
					</StyledButton>
					<StyledButton name='material' onClick={updateFilters}>
						Soie
					</StyledButton>
				</FormGroup>
			</FormControl>
			<FormControl component='fieldset' sx={{ marginBottom: '1rem' }}>
				<InputLabel id='demo-simple-select-label'>Taille</InputLabel>
				<Select
					name='size'
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={size}
					label='size'
					onChange={updateFilters}>
					<MenuItem value={'all'}>Toutes les tailles</MenuItem>
					<MenuItem value={89}>89x89</MenuItem>
					<MenuItem value={125}>125x125</MenuItem>
					<MenuItem value={148}>148x148</MenuItem>
				</Select>
			</FormControl>
		</Stack>
	)
}

export default Filters
