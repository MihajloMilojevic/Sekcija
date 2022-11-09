import React, {useState} from "react";

const initalFormState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
	age: 0
}

function FormWithLotsOfFields() {

	const [formData, setFormData] = useState(initalFormState)

	function handleChange(e) {
		setFormData({...formData, [e.target.name]: e.target.value});
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log({...formData});
		setFormData(initalFormState);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				placeholder="First Name" type="text" name="firstName"
				value={formData.firstName} onChange={handleChange} 	
			/> <br/>
			<input 
				placeholder="Last Name" type="text"  name="lastName"
				value={formData.lastName} onChange={handleChange}  
			/> <br/>
			<input 
				placeholder="Email" type="email"  name="email"
				value={formData.email} onChange={handleChange}  
			/> <br/>
			<input 
				placeholder="Password" type="password"  name="password"
				value={formData.password} onChange={handleChange}  
			/> <br/>
			<input 
				placeholder="Confirm Password" type="password"  name="confirmPassword"
				value={formData.confirmPassword} onChange={handleChange}  
			/> <br/>
			<input 
				placeholder="Age" type="number"  name="Age"
				value={formData.age} onChange={handleChange}  
			/> <br/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default  FormWithLotsOfFields;