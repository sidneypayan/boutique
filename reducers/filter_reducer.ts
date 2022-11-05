import { Product, FilterState } from '../interfaces'
import { LOAD_PRODUCTS, UPDATE_FILTERS, UPDATE_SORT } from '../actions'

type FilterAction =
	| { type: typeof LOAD_PRODUCTS; payload: Product[] }
	| { type: typeof UPDATE_SORT; payload: string }
	| {
			type: typeof UPDATE_FILTERS
			payload: { name: string; value: string | number }
	  }
	| { type: typeof UPDATE_SORT; payload: string }

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
			console.log(action.payload)
			return {
				...state,
				filters: { ...state.filters, [name]: value },
			}
	}
}

export default filter_reducer
