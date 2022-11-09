import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css";

function Nav() {
	return (
		<nav>
			<Link to=''>Home</Link>
			<Link to='buttons'>Buttons</Link>
			<Link to='counters'>Counters</Link>
			<Link to='list'>List</Link>
			<Link to='todo'>ToDo</Link>
			<Link to='form'>Form</Link>
			<Link to='hooks/test'>Hooks</Link>
			<Link to='loading'>Context</Link>
			<Link to='something'>404</Link>
		</nav>
	)
}

export default Nav