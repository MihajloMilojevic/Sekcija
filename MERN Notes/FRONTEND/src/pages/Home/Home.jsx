import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useStateContext } from '../../context/stateContext';
import { NotesList } from '../../components';

import "./home.css";

function Home() {
	
	const [notes, setNotes] = useState({notes: [], message: ""});
	const {setShowLoader} = useStateContext();

	async function fetchNotes() {
		try {
			setShowLoader(true)
			const res = await fetch("/api/notes");
			const json = await res.json();
			if(!json.ok) throw new Error(json.message)
			if(json.notes.length === 0) setNotes({notes: [], message: "You don't have any messages. Add some to view them here"});
			else setNotes({notes: json.notes, message: ""}) 
		} catch (error) {
			console.error(error);
			setNotes({notes: [], message: "There was an error loading your notes. Try again later."})
		}
		finally {
			setTimeout(() => {
				setShowLoader(false)
			}, 1 * 1000);
		}
	}

	useEffect(() => {fetchNotes()}, []);

	return (
		<>
			<section className="add-wrapper">
				<Link id="add" to="add"> <span className="material-symbols-rounded">add</span></Link>
			</section>
			<section>
				{
					!!notes.message ? (
						<p>{notes.message}</p>
					) : (
						<NotesList notes={notes.notes} fetchNotes={fetchNotes}/>
					)
				}
			</section>
		</>
	)
}

export default Home