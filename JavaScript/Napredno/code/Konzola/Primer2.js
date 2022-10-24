document.getElementById("log").onclick = function () {
	console.log("####### CONSOLE.LOG #########")
	console.log(Math.PI);
	console.log("Hello Console");
	console.log({ime: "Marko", prezime: "Markovic", godine: 25});
	console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	console.log([
		{ime: "Marko", prezime: "Markovic", godine: 25},
		{ime: "Marko", prezime: "Markovic", godine: 25},
		{ime: "Marko", prezime: "Markovic", godine: 25},
		{ime: "Marko", prezime: "Markovic", godine: 25},
		{ime: "Marko", prezime: "Markovic", godine: 25},
		{ime: "Marko", prezime: "Markovic", godine: 25}
	]);
}