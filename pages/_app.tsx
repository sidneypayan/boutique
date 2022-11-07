import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ProductsProvider } from '../context/products_context'
import { FilterProvider } from '../context/filter_context'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
	return (
		<Layout>
			<ProductsProvider>
				<FilterProvider>
					<SessionProvider session={session}>
						<Component {...pageProps} />
					</SessionProvider>
				</FilterProvider>
			</ProductsProvider>
		</Layout>
	)
}

export default MyApp
