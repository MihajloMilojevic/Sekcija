import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function Layout({children}) {
	return (
		<div>
			<Nav />
			<main style={{minHeight: "70vh"}}>
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default Layout