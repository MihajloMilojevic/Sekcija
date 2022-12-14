import React from 'react'
import NoteListItem from '../NoteListItem/NoteListItem';
import "./noteslist.css"

function NotesList({notes, fetchNotes}) {
	return (
		<div className="notes-list">
			{
				notes.map(note => <NoteListItem {...note} key={note.id} fetchNotes={fetchNotes} />)
			}
		</div>
	)
}

export default NotesList