import { CartState, Product } from '../interfaces'
import { ADD_PRODUCT_TO_CART, TOGGLE_PRODUCT_QUANTITY } from '../actions'

type CartAction =
	| { type: typeof ADD_PRODUCT_TO_CART; payload: Product }
	| {
			type: typeof TOGGLE_PRODUCT_QUANTITY
			payload: { id: number; value: string }
	  }

const cart_reducer = (state: CartState, action: CartAction) => {
	switch (action.type) {
		case ADD_PRODUCT_TO_CART:
			return { ...state, cart: [...state.cart, action.payload] }

		case TOGGLE_PRODUCT_QUANTITY:
			const { id, value } = action.payload
			const newIncreasedCart = state.cart.map(product => {
				if (product.id === id) {
					if (value === 'inc') {
						return { ...product, quantity: product.quantity++ }
					}
					if (value === 'dec') {
						if (product.quantity <= 1) {
							return product
						}
						return { ...product, quantity: product.quantity-- }
					}
				}
				return product
			})
			return { ...state, cart: newIncreasedCart }
	}
}

export default cart_reducer
