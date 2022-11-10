import React from 'react'
import { useNavigate } from 'react-router-dom';
import { NoteForm } from "../../components";
import { useStateContext } from '../../context/stateContext';

function Add() {

	const navigate = useNavigate();
	const {setShowLoader} = useStateContext();

	function cancel() {
		navigate("/");
	}
	
	async function create({title, text}) {
		try {
			setShowLoader(true);
			const res = await fetch("/api/notes", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({title, text})
			})
			const json = await res.json();
			if(!json.ok) throw new Error(json.message);
			setTimeout(() => {
				setShowLoader(false);
				navigate("/")
			}, 0.5 * 1000);	
		} catch (error) {
			setTimeout(() => {
				setShowLoader(false)
			}, 0.5 * 1000);	
		}
	}

	return (
		<NoteForm 
			onSubmit={create}
			onCancel={cancel}
			buttonText="Create"
		/>
	)
}

export default Add