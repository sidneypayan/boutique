import { Product, ProductsState } from '../interfaces'
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from '../actions'

type ProductsAction =
	| { type: typeof GET_PRODUCTS_SUCCESS; payload: Product[] }
	| { type: typeof GET_PRODUCTS_ERROR }

const products_reducer = (
	state: ProductsState,
	action: ProductsAction
): ProductsState => {
	switch (action.type) {
		case GET_PRODUCTS_SUCCESS:
			return {
				...state,
				products_loading: false,
				products: action.payload,
			}
		case GET_PRODUCTS_ERROR:
			return {
				...state,
				products_loading: false,
				products_error: true,
			}
	}
}

export default products_reducer
