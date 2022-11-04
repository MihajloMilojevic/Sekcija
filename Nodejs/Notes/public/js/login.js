import showMe from "./showme.js";

document.addEventListener("DOMContentLoaded",async () => {
	try {
		const me = await showMe();
		if(me.ok) window.location.href = "/";
		setInterval(() => {
			document.getElementsByClassName("loader-wrapper")[0].classList.add("hidden");
		}, 500);
	} catch (error) {
		console.error(error);
	}
})

document.getElementById("form").onsubmit = async e => {
	e.preventDefault();
	try {
		document.getElementsByClassName("loader-wrapper")[0].classList.remove("hidden");
		const res = await fetch("/api/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: document.getElementById("email").value,
				password: document.getElementById("password").value
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