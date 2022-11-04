import axios from 'axios'
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useReducer,
} from 'react'
import products_reducer from '../reducers/products_reducer'
import { Product, ProductsState } from '../interfaces'

type ProductsProviderProps = {
	children: ReactNode
}

type ProductsContext = {
	fetchProducts: (url: string) => void
	products: Product[]
	products_loading: boolean
	products_error: boolean
}

const ProductsContext = createContext<ProductsContext | null>(null)

const initialState: ProductsState = {
	products: [],
	products_loading: true,
	products_error: false,
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
	const [state, dispatch] = useReducer(products_reducer, initialState)

	const fetchProducts = async (url: string) => {
		try {
			const response = await axios(url)
			const products = response.data
			dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: products })
		} catch (error) {
			dispatch({ type: 'GET_PRODUCTS_ERROR' })
		}
	}

	useEffect(() => {
		fetchProducts('/api/products')
	}, [])

	return (
		<ProductsContext.Provider value={{ ...state, fetchProducts }}>
			{children}
		</ProductsContext.Provider>
	)
}

export const useProductsContext = () => {
	return useContext(ProductsContext)
}
