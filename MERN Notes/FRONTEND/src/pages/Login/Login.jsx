import React, {useState} from 'react';
import "../../styles/form.css";
import {Link, useNavigate} from "react-router-dom";
import { useStateContext } from '../../context/stateContext';

const initialFormData = {
	email: "",
	password: ""
}

function Login() {

	const navigate = useNavigate();
	const {setShowLoader, setUser} = useStateContext();
	const [formData, setFormData] = useState(initialFormData);
	const [errorMessage, setErrorMessage] = useState("");

	function handleChange(e) {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setShowLoader(true);
		try {
			const res = await fetch(`/api/users/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData)
			})
			const json = await res.json();
			if(!json.ok) throw new Error(json.message);
			setUser(json.user)
			setTimeout(() => {
				setShowLoader(false)
				navigate("/")
			}, 0.5 * 1000);
		} catch (error) {
			console.error(error);
			setErrorMessage(error.message);
			setTimeout(() => {
				setShowLoader(false)
			}, 0.5 * 1000);
		}
		setFormData(initialFormData)
	}
	return (
		<div className="container">
			<div className="wrapper">
				{!!errorMessage && <p id="error-message">{errorMessage}</p>}
				<form onSubmit={handleSubmit}>
					<label className="label" htmlFor="email">Email: </label> <br />
					<input className="input" type="text" name="email" value={formData.email} onChange={handleChange} /> <br />
					<label className="label" htmlFor="password">Password:</label> <br />
					<input className="input" type="password" name="password" value={formData.password} onChange={handleChange} /> <br />
					<button className="button" type="submit">Log in</button>
				</form>
				<p className="p">Don't have an account? Create one <Link to="../register" className="a">here</Link>.</p>
			</div>
		</div>
	)
}

export default Login