export type Product = {
	id: number
	name: string
	img: string
	price: number
	size: string | number
	material: string
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
		size: string | number
	}
}