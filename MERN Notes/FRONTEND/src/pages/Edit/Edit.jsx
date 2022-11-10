import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { NoteForm } from "../../components";
import { useStateContext } from '../../context/stateContext';

function Edit() {

	const params = useParams();
	const navigate = useNavigate();
	const {setShowLoader} = useStateContext();
	const [note, setNote] = useState({title: "", text: ""});


	async function getNote() {
		try {
			setShowLoader(true);
			const res = await fetch(`/api/notes/${params.id}`);
			const json = await res.json();
			if(!json.ok) throw new Error(json.message);
			setNote(json.note);
			setTimeout(() => {
				setShowLoader(false);
			}, 0.5 * 1000);
		} catch (error) {
			setTimeout(() => {
				setShowLoader(false);
				navigate("/")
			}, 0.5 * 1000);
		}
	}

	useEffect(() => {
		getNote();
	}, []);

	function cancel() {
		navigate("/");
	}
	
	async function create({title, text}) {
		try {
			setShowLoader(true);
			const res = await fetch(`/api/notes/${params.id}`, {
				method: "PATCH",
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
			buttonText="Save"
			title={note.title}
			text={note.text}
		/>
	)
}

export default Edit