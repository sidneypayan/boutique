export type Product = {
	id: number
	name: string
	img: string
	price: number
	size: string
	material: string
}

export type ProductsState = {
	products: Product[]
	products_loading: boolean
	products_error: boolean
}
