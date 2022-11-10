import showMe from "./showme.js";

document.addEventListener("DOMContentLoaded", async () => {
	try {
		const me = await showMe();
		if(!me.ok) window.location.href = "/login.html";
		document.getElementById("hello").innerText = `Hi, ${me.user.firstName}`;
		getAllNotes();
	} catch (error) {
		console.error(error);
	}
})

async function getAllNotes() {
	try {
		document.getElementsByClassName("loader-wrapper")[0].classList.remove("hidden");
		const res = await fetch("/api/notes");
		const json = await res.json();
		if(!json.ok) {
			document.getElementById("notes-list").innerHTML = "<p>There was an error loading your notes. Try again later.</p>";
			throw new Error(json.message);
		}
		const notes = json.notes;
		if(notes.length === 0) 
		return document.getElementById("notes-list").innerHTML = "You don't have any notes. Try adding some"
		document.getElementById("notes-list").innerHTML = notes.map((note) => createNoteHtml(note)).join(" ");
		Array.from(document.getElementsByClassName("note-delete")).forEach(deleteIcon => {
			const id = deleteIcon.dataset.id;
			deleteIcon.addEventListener("click", deleteNote(id))
		})
	} catch (error) {
		console.error(error);
	}
	finally {
		setInterval(() => {
			document.getElementsByClassName("loader-wrapper")[0].classList.add("hidden");
		}, 1000);
	}
}

function deleteNote(id) {
	return async () => {
		try {
			document.getElementsByClassName("loader-wrapper")[0].classList.remove("hidden");
			const res = await fetch(`/api/notes/${id}`, {
				method: "DELETE"
			});
			const json = await res.json();
			if(!json.ok) throw new Error(json.message);
			return getAllNotes();
		} catch (error) {
			console.error(error);
		}
		finally {
			setInterval(() => {
				document.getElementsByClassName("loader-wrapper")[0].classList.add("hidden");
			}, 1000);
		}
	}
}

function createNoteHtml({title, lastUpdated, id}) {
	const date = new Date(lastUpdated)
	return (
	`
		<div class="note">
			<p class="note-title">${title}</p>
			<div class="note-footer">
				<div class="note-buttons">
				<a href="/note.html?id=${id}">
					<span class="material-symbols-rounded note-icon">
						edit
					</span>
				</a>
				<span class="material-symbols-rounded note-icon note-delete" data-id="${id}">
					delete
				</span>
				</div>
				<p class="note-date">${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}</p>
			</div>
		</div>
	`);
}