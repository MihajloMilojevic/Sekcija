import React, { useEffect, useState } from 'react'

function NoteForm({onSubmit, onCancel, buttonText, title, text}) {

	const [formData, setFormData] = useState({
		title: title ?? "",
		text: text ?? ""
	});

	useEffect(() => {
		setFormData({title, text})
	}, [title, text])

	function handleChange(e) {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	return (
		<div className="container">
			<div className="wrapper">
				<form id="form" onSubmit={e => {e.preventDefault(); onSubmit(formData)}}>
					<label className="label" htmlFor="title">Title: </label> <br/>
					<input className="input" type="text" name="title" value={formData.title} onChange={handleChange}/> <br/>
					<label className="label" htmlFor="password">Text:</label> <br/>
					<textarea className="textarea" name="text" value={formData.text} onChange={handleChange}></textarea> <br/>
					<button className="button" type="submit">{buttonText}</button>
				</form>
				<button className="button" onClick={onCancel}>Cancel</button>
			</div>
		</div>
	)
}

export default NoteForm