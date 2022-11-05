import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useReducer,
} from 'react'
import filter_reducer from '../reducers/filter_reducer'
import { Product, FilterState } from '../interfaces'
import { LOAD_PRODUCTS, UPDATE_FILTERS, UPDATE_SORT } from '../actions'
import { useProductsContext } from './products_context'
import { SelectChangeEvent } from '@mui/material'

type FilterProps = {
	children: ReactNode
}

type FilterContext = {
	updateFilters: (
		event:
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
			| SelectChangeEvent<string>
	) => void
	all_products: Product[]
	filtered_products: Product[]
	sort: string
	filters: {
		material: string
		size: string
	}
}

const FilterContext = createContext<FilterContext | null>(null)

const initialState: FilterState = {
	all_products: [],
	filtered_products: [],
	sort: 'price-lowest',
	filters: {
		material: 'all',
		size: 'all',
	},
}

export const FilterProvider = ({ children }: FilterProps) => {
	const { products } = useProductsContext()
	const [state, dispatch] = useReducer(filter_reducer, initialState)

	const updateFilters = (
		event:
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
			| SelectChangeEvent<string>
	) => {
		const { name } = event.target as HTMLButtonElement
		const { value } = event.target as HTMLLIElement
		const target = event.target as HTMLElement
		if (name === 'material') {
			dispatch({
				type: UPDATE_FILTERS,
				payload: { name, value: target.textContent },
			})
		}
		if (name === 'size') {
			dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
		}
	}

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: products })
	}, [products])

	return (
		<FilterContext.Provider value={{ ...state, updateFilters }}>
			{children}
		</FilterContext.Provider>
	)
}

export const useFilterContext = () => {
	return useContext(FilterContext)
}
