async function login(mejl, lozinka) {
	try {
		const url = "";
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({mejl, lozinka})
		}	
		const response = await fetch(url, options)
		const json = await response.json();
		if(!json.ok) throw new Error(json.message);
		const user = json.user;
		console.log(`Uspešno prijavljen kao ${user.ime} ${user.prezime}`);
	} catch (error) {
		console.error(error);
	}
}
