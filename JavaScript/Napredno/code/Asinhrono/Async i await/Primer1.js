(async function() {
	let myPromise = new Promise(function(resolve) {
	  	setTimeout(function() {resolve("Obećanje izvšeno");}, 3000);
	});
	console.log(await myPromise);
	let poruka = await myPromise;
	console.log(poruka);
	console.log("Ovde se čeka ispunjene promisa");
})()

console.log("Ova funkcija je još uvek asinhrona");
console.log("Scripta se nastavlja i bez čekanja njenog završetka");
console.log("Ali se unutar funkcije naredbe izvršavaju na način sličan sinhronom");