import Navbar from './layout/Navbar'

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default Layout
