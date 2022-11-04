import showMe from "./showme.js";
let id;
document.addEventListener("DOMContentLoaded",async () => {
	try {
		const me = await showMe();
		if(!me.ok) window.location.href = "/login.html";
		const url = new URL(window.location.href);
		id = url.searchParams.get("id");
		const res = await fetch(`/api/notes/${id}`);
		const json = await res.json();
		if(!json.ok) return window.location.href = "/";
		const note = json.note;
		document.getElementById("title").value = note.title;
		document.getElementById("text").value = note.text;
	} catch (error) {
		console.error(error);
	}
	finally {
		setInterval(() => {
			document.getElementsByClassName("loader-wrapper")[0].classList.add("hidden");
		}, 500);
	}
})

document.getElementById("form").onsubmit = async e => {
	e.preventDefault();
	try {
		document.getElementsByClassName("loader-wrapper")[0].classList.remove("hidden");
		const res = await fetch(`/api/notes/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				title: document.getElementById("title").value,
				text: document.getElementById("text").value
			})
		})
		const json = await res.json();
		if(!json.ok) throw new Error(json.message);
		return (window.location.href = "/")
	} catch (error) {
		const p = document.getElementById("error-message");
		p.style.display = "block";
		p.innerText = error.message;
	}
	finally {
		document.getElementsByClassName("loader-wrapper")[0].classList.add("hidden");
	}
}