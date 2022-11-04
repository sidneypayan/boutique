import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ProductsProvider } from '../context/products_context'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<ProductsProvider>
				<Component {...pageProps} />
			</ProductsProvider>
		</Layout>
	)
}

export default MyApp
