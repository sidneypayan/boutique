import { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product, CartState } from '../interfaces'
import cart_reducer from '../reducers/cart_reducer'
import { ADD_PRODUCT_TO_CART, TOGGLE_PRODUCT_QUANTITY } from '../actions'

type CartContext = {
	cart: Product[]
	addProductToCart: (product: Product) => void
	toggleProductQuantity: (id: number, value: string) => void
}

type CartProps = {
	children: ReactNode
}

const initialState: CartState = {
	cart: [
		{
			id: 1,
			quantity: 5,
			name: 'Bel Ami',
			img: '/images/woolen-89-1.jpg',
			price: 5500,
			size: '89',
			material: 'wool',
		},
		{
			id: 2,
			quantity: 3,
			name: 'Eastern Tales',
			img: '/images/woolen-89-2.jpg',
			price: 6500,
			size: '89',
			material: 'wool',
		},
	],
}

const CartContext = createContext<CartContext | null>(null)

export const CartProvider = ({ children }: CartProps) => {
	const [state, dispatch] = useReducer(cart_reducer, initialState)

	const addProductToCart = (product: Product) => {
		dispatch({ type: ADD_PRODUCT_TO_CART, payload: product })
	}

	const toggleProductQuantity = (id: number, value: string) => {
		dispatch({ type: TOGGLE_PRODUCT_QUANTITY, payload: { id, value } })
	}

	return (
		<CartContext.Provider
			value={{
				...state,
				addProductToCart,
				toggleProductQuantity,
			}}>
			{children}
		</CartContext.Provider>
	)
}

export const useCartContext = () => {
	return useContext(CartContext)
}
