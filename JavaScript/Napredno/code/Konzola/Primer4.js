document.getElementById("error").onclick = function() {
	console.log("###### CONSOLE.ERROR ######");
	console.error(new Error("GREŠKA"));
	try {
		if(isNaN(5 / 0) && isNaN(intParse("hello")))
			throw new Error("Nije broj");
	} catch (error) {
		console.error(error)
	}
	try {
		x++;
	} catch (error) {
		console.error(error)
	}
}