import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ProductsProvider } from '../context/products_context'
import { FilterProvider } from '../context/filter_context'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<ProductsProvider>
				<FilterProvider>
					<Component {...pageProps} />
				</FilterProvider>
			</ProductsProvider>
		</Layout>
	)
}

export default MyApp
