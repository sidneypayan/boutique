import { CartState, Product } from '../interfaces'
import { ADD_PRODUCT_TO_CART } from '../actions'

type CartAction = { type: typeof ADD_PRODUCT_TO_CART; payload: Product }

const cart_reducer = (state: CartState, action: CartAction) => {
	switch (action.type) {
		case ADD_PRODUCT_TO_CART:
			return { ...state, cart: [...state.cart, action.payload] }
	}
}

export default cart_reducer
