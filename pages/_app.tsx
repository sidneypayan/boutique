import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ProductsProvider } from '../context/products_context'
import { FilterProvider } from '../context/filter_context'
import { CartProvider } from '../context/cart_context'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
	return (
		<SessionProvider session={session}>
			<CartProvider>
				<Layout>
					<ProductsProvider>
						<FilterProvider>
							<Component {...pageProps} />
						</FilterProvider>
					</ProductsProvider>
				</Layout>
			</CartProvider>
		</SessionProvider>
	)
}

export default MyApp
