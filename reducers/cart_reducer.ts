import { CartState, Product } from '../interfaces'
import {
	ADD_PRODUCT_TO_CART,
	TOGGLE_PRODUCT_QUANTITY,
	COUNT_CART_TOTALS,
	DELETE_PRODUCT_FROM_CART,
} from '../actions'

type CartAction =
	| { type: typeof ADD_PRODUCT_TO_CART; payload: Product }
	| {
			type: typeof TOGGLE_PRODUCT_QUANTITY
			payload: { id: number; value: string }
	  }
	| { type: typeof COUNT_CART_TOTALS }
	| { type: typeof DELETE_PRODUCT_FROM_CART; payload: number }

const cart_reducer = (state: CartState, action: CartAction) => {
	if (action.type === ADD_PRODUCT_TO_CART) {
		const { id, quantity } = action.payload

		if (state.cart.length > 0) {
			const isProductInCart = state.cart.some(product => product.id === id)

			if (isProductInCart) {
				const newCart = state.cart.map(product => {
					if (product.id === id) {
						return { ...product, quantity: product.quantity + quantity }
					}
					return product
				})
				return { ...state, cart: newCart }
			}
			return { ...state, cart: [...state.cart, action.payload] }
		}
		return { ...state, cart: [...state.cart, action.payload] }
	}

	if (action.type === TOGGLE_PRODUCT_QUANTITY) {
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

	if (action.type === COUNT_CART_TOTALS) {
		let { total_quantity, total_price } = state.cart.reduce(
			(total, item) => {
				const { quantity, price } = item

				total.total_quantity += quantity
				total.total_price += price * quantity
				return total
			},
			{ total_quantity: 0, total_price: 0 }
		)

		return {
			...state,
			total_quantity,
			total_price,
		}
	}

	if (action.type === DELETE_PRODUCT_FROM_CART) {
		const newCart = state.cart.filter(product => product.id !== action.payload)
		return { ...state, cart: newCart }
	}

	throw new Error(`No Matching action type`)
}

export default cart_reducer
