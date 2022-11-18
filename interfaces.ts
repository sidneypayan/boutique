export type Product = {
	id: number | string
	name: string
	img: string
	price: number
	size: string | number
	material: string
	quantity?: number
}

export type ProductsState = {
	products: Product[]
	products_loading: boolean
	products_error: boolean
}

export type FilterState = {
	filtered_products: Product[]
	all_products: Product[]
	sort: string
	filters: {
		material: string
		size: string
	}
}

export type CartState = {
	cart: Product[]
	total_quantity: number
	total_price: number
}

export type SingleProduct = {
	product: {
		id: number | string
		img: string
		material: string
		name: string
		price: number
		size: string
		gallery?: [
			{
				id: number | string
				url: string
			}
		]
	}
}
