import Head from 'next/head'
import Firm from '../components/homepage/Firm'
import Hero from '../components/homepage/Hero'
import Instagram from '../components/homepage/Instagram'
import ProductsSample from '../components/homepage/ProductsSample'
import Transaction from '../components/homepage/Transaction'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			<ProductsSample />
			<Firm />
			<Instagram />
			<Transaction />
		</div>
	)
}
