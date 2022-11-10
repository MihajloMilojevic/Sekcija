import React from 'react'
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/stateContext';
import "./noteListItem.css"

function NoteListItem({title, lastUpdated, id, fetchNotes}) {
	const date = new Date(lastUpdated);
	const {setShowLoader} = useStateContext();

	function deleteNote(id) {
		return async () => {
			try {
				setShowLoader(true);
				const res = await fetch(`/api/notes/${id}`, {
					method: "DELETE"
				});
				const json = await res.json();
				if(!json.ok) throw new Error(json.message);
				fetchNotes();
			} catch (error) {
				console.error(error);
			}
			finally {
				setInterval(() => {
					setShowLoader(false)
				}, 0.5 * 1000);
			}
		}
	}
	return (
		<div className="note">
			<p className="note-title">{title}</p>
			<div className="note-footer">
				<div className="note-buttons">
				<Link to={`/edit/${id}`}>
					<span className="material-symbols-rounded note-icon">
						edit
					</span>
				</Link>
				<span className="material-symbols-rounded note-icon note-delete" onClick={deleteNote(id)}>
					delete
				</span>
				</div>
				<p className="note-date">{date.getDate()}.{date.getMonth()+1}.{date.getFullYear()}</p>
			</div>
		</div>
  	)
}

export default NoteListItem