import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';

function Layout({children}) {
	const location = useLocation();

	if(location.pathname === "/login" || location.pathname === "/register")
		return children

	return (
		<>
			<Nav />
			<main>
				{children}
			</main>
		</>
	)
}

export default Layout