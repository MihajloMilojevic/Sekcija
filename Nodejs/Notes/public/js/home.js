import showMe from "./showme.js";

document.addEventListener("DOMContentLoaded",async () => {
	try {
		const me = await showMe();
		if(!me.ok) window.location.href = "/login.html";
		document.getElementById("hello").innerText = `Hi, ${me.user.firstName}`;
		const res = await fetch("/api/notes");
		const json = await res.json();
		if(!json.ok) {
			document.getElementById("notes-list").innerHTML = "<p>There was an error loading your notes. Try again later.</p>";
			throw new Error(json.message);
		}
		const notes = json.notes;
		if(notes.length === 0) 
		return document.getElementById("notes-list").innerHTML = "You don't have any notes. Try adding some"
		document.getElementById("notes-list").innerHTML = notes.map(note => createNoteHtml(note)).join(" ");
		
	} catch (error) {
		console.error(error);
	}
	finally {
		setInterval(() => {
			document.getElementsByClassName("loader-wrapper")[0].classList.add("hidden");
		}, 1000);
	}
})

function createNoteHtml({title, lastUpdated}) {
	const date = new Date(lastUpdated)
	return (
	`
		<div>
			<p>${title}</p>
			<p>${date.getDate()}.${date.getMonth+1}.${date.getFullYear()}</p>
		</div>
	`);
}