const arrowFunction = () => {
	console.log("Poziv iz arrow funkcije", this);
}
const regularFunction = function() {
	console.log("Poziv iz obicne funkcije", this);
}

document.getElementById("arrow").onclick = arrowFunction;
document.getElementById("regular").onclick = regularFunction;
