import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import { useStateContext } from '../../context/stateContext';
import "./nav.css";

function Nav() {
	const navigate = useNavigate();
	const {setUser, setShowLoader, user} = useStateContext();

	async function logout() {
		try {
			setShowLoader(true)
			const res = await fetch("/api/users/logout");
			const json = await res.json();
			if(!json.ok) throw new Error(json.message);
			setUser(null);
			setTimeout(() => {
				setShowLoader(false);
				navigate("/login");
			}, 0.5 * 1000);
		} catch (error) {
			console.error(error);
			setTimeout(() => {
				setShowLoader(false)
			}, 0.5 * 1000);
		}
	}


	return (
		<nav className="nav">
			<p><Link href="/" className="nav-brand">Notes</Link></p>
			<div className="user-data">
				<p id="hello">Hello, {user?.firstName}</p>
				<button id="logout" onClick={logout}>Logout</button>
			</div>
		</nav>
	)
}

export default Nav