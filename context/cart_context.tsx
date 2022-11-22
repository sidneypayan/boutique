import {
	createContext,
	useContext,
	useReducer,
	ReactNode,
	useEffect,
} from 'react'
import { Product, CartState } from '../interfaces'
import cart_reducer from '../reducers/cart_reducer'
import {
	ADD_PRODUCT_TO_CART,
	TOGGLE_PRODUCT_QUANTITY,
	COUNT_CART_TOTALS,
	DELETE_PRODUCT_FROM_CART,
	CLEAR_CART,
} from '../actions'

// import { useLocalStorage } from '../hooks/useLocalStorage'

type CartContext = {
	cart: Product[]
	total_quantity: number
	total_price: number
	addProductToCart: (product: Product) => void
	toggleProductQuantity: (id: number, value: string) => void
	deleteProductFromCart: (id: number) => void
	clearCart: () => void
}

type CartProps = {
	children: ReactNode
}

const getLocalStorage = () => {
	let cartItems
	if (typeof window !== 'undefined') {
		cartItems = JSON.parse(localStorage.getItem('cartItems'))
	}

	return cartItems ?? []
}

const initialState: CartState = {
	cart: getLocalStorage(),
	total_quantity: 0,
	total_price: 0,
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

	const deleteProductFromCart = (id: number) => {
		dispatch({ type: DELETE_PRODUCT_FROM_CART, payload: id })
	}

	const clearCart = () => {
		dispatch({ type: CLEAR_CART })
	}

	useEffect(() => {
		dispatch({ type: COUNT_CART_TOTALS })
		localStorage.setItem('cartItems', JSON.stringify(state.cart))
	}, [state.cart])

	return (
		<CartContext.Provider
			value={{
				...state,
				addProductToCart,
				toggleProductQuantity,
				deleteProductFromCart,
				clearCart,
			}}>
			{children}
		</CartContext.Provider>
	)
}

export const useCartContext = () => {
	return useContext(CartContext)
}
