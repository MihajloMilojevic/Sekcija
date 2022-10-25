function fetchUser() {
	const url = "https://random-data-api.com/api/v2/users";
	fetch(url)
		.then(response => response.json())
		.then(json => document.getElementById("data1").innerText = JSON.stringify(json, null, 4))
		.catch(error => console.error(error))	
}

fetchUser();
