document.getElementById("logout").onclick = async () => {
	try {
		document.getElementsByClassName("loader-wrapper")[0].classList.remove("hidden");
		const res = await fetch("/api/users/logout");
		const json = await res.json();
		if(json.ok) window.location.href = "/login.html";
		document.getElementsByClassName("loader-wrapper")[0].classList.add("hidden");
	} catch (error) {
		console.error(error);
	}
}