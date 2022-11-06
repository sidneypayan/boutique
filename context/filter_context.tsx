import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useReducer,
} from 'react'
import filter_reducer from '../reducers/filter_reducer'
import { Product, FilterState } from '../interfaces'
import {
	LOAD_PRODUCTS,
	UPDATE_FILTERS,
	UPDATE_SORT,
	FILTER_PRODUCTS,
	SORT_PRODUCTS,
} from '../actions'
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
	updateSort: (event: SelectChangeEvent<string>) => void
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

	const updateFilters = (event: SelectChangeEvent<string>) => {
		const { name } = event.target as HTMLButtonElement
		const { value } = event.target
		const target = event.target as HTMLElement
		if (name === 'material') {
			dispatch({
				type: UPDATE_FILTERS,
				payload: { name, value: target.dataset.category },
			})
		}
		if (name === 'size') {
			dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
		}
	}

	const updateSort = (event: SelectChangeEvent<string>) => {
		const { value } = event.target
		dispatch({ type: UPDATE_SORT, payload: value })
	}

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: products })
	}, [products])

	useEffect(() => {
		dispatch({ type: FILTER_PRODUCTS })
		dispatch({ type: SORT_PRODUCTS })
	}, [state.filters, state.sort])

	return (
		<FilterContext.Provider value={{ ...state, updateFilters, updateSort }}>
			{children}
		</FilterContext.Provider>
	)
}

export const useFilterContext = () => {
	return useContext(FilterContext)
}
