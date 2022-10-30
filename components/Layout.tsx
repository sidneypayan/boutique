import React from 'react'
import Navbar from './layout/Navbar'

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default Layout
