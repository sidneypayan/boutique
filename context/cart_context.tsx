import { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product, CartState } from '../interfaces'
import cart_reducer from '../reducers/cart_reducer'
import { ADD_PRODUCT_TO_CART } from '../actions'

type CartContext = {
	cart: Product[]
	addProductToCart: (product: Product) => void
}

type CartProps = {
	children: ReactNode
}

const initialState: CartState = {
	cart: [],
}

const CartContext = createContext<CartContext | null>(null)

export const CartProvider = ({ children }: CartProps) => {
	const [state, dispatch] = useReducer(cart_reducer, initialState)

	const addProductToCart = (product: Product) => {
		dispatch({ type: ADD_PRODUCT_TO_CART, payload: product })
	}

	return (
		<CartContext.Provider value={{ ...state, addProductToCart }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCartContext = () => {
	return useContext(CartContext)
}
