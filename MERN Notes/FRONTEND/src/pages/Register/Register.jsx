import React from 'react'
import "../../styles/form.css";
import {Link} from "react-router-dom";

function Register() {
	return (
		<div className="container">
			<div className="wrapper">

			<p id="error-message"></p>
			<form id="form">
				<label className="label" htmlFor="email">Email: </label> <br />
				<input className="input" type="text" id="email" /> <br />

				<label className="label" htmlFor="password">Password:</label> <br />
				<input className="input" type="password" id="password" /> <br />

				<label className="label" htmlFor="firstName">First Name:</label> <br />
				<input className="input" type="text" id="firstName" /> <br />

				<label className="label" htmlFor="lastName">Last Name:</label> <br />
				<input className="input" type="text" id="lastName" /> <br />

				<button className="button" type="submit">Register</button>
			</form>
			<p className="p">Already have an account? Log in <Link to="../login" className="a">here</Link>.</p>
			</div>
		</div>
	)
}

export default Register