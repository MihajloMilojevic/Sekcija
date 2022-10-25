async function fetchUser() {
	const url = "https://random-data-api.com/api/v2/users";
	const response = await fetch(url);
	console.log(response);
	const json = await response.json();
	console.log(json);
	document.getElementById("data2").innerText = JSON.stringify(json, null, 2);
}

fetchUser();