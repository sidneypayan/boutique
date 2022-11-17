import { Product, FilterState } from '../interfaces'
import {
	LOAD_PRODUCTS,
	UPDATE_FILTERS,
	UPDATE_SORT,
	FILTER_PRODUCTS,
	SORT_PRODUCTS,
} from '../actions'

type FilterAction =
	| { type: typeof LOAD_PRODUCTS; payload: Product[] }
	| { type: typeof UPDATE_SORT; payload: string }
	| {
			type: typeof UPDATE_FILTERS
			payload: { name: string; value: string | number }
	  }
	| { type: typeof UPDATE_SORT; payload: string }
	| { type: typeof FILTER_PRODUCTS }
	| { type: typeof SORT_PRODUCTS }

const filter_reducer = (state: FilterState, action: FilterAction) => {
	switch (action.type) {
		case LOAD_PRODUCTS:
			return {
				...state,
				all_products: action.payload,
				filtered_products: action.payload,
			}
		case UPDATE_SORT:
			return {
				...state,
				sort: action.payload,
			}
		case UPDATE_FILTERS:
			const { name, value } = action.payload
			return {
				...state,
				filters: { ...state.filters, [name]: value },
			}
		case FILTER_PRODUCTS:
			const { all_products } = state
			const { material, size } = state.filters

			let tempFilteredProducts = all_products

			if (material !== 'all') {
				tempFilteredProducts = tempFilteredProducts.filter(
					product => product.material === material
				)
			}

			if (size !== 'all') {
				tempFilteredProducts = tempFilteredProducts.filter(
					product => product.size === size
				)
			}

			return {
				...state,
				filtered_products: tempFilteredProducts,
			}

		case SORT_PRODUCTS:
			const { sort, filtered_products } = state
			let tempSortedProducts = filtered_products

			if (sort === 'price-lowest') {
				tempSortedProducts = tempSortedProducts.sort(
					(a, b) => a.price - b.price
				)
			}

			if (sort === 'price-highest') {
				tempSortedProducts = tempSortedProducts.sort(
					(a, b) => b.price - a.price
				)
			}

			if (sort === 'name-a') {
				tempSortedProducts = tempSortedProducts.sort((a, b) =>
					a.name.localeCompare(b.name)
				)
			}
			if (sort === 'name-z') {
				tempSortedProducts = tempSortedProducts.sort((a, b) =>
					b.name.localeCompare(a.name)
				)
			}

			return { ...state, filtered_products: tempSortedProducts }
	}
}

export default filter_reducer
