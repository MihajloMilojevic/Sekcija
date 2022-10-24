let myPromise = new Promise(function(myResolve, myReject) {
	
	// izvršavanje neke radnje za koje je potrebno vreme
	let greska = false;
	if(greska)
		myReject("Greška");  // poziv funkcije u slučaju greške
	else
		myResolve("Uspeh"); // poziv funkcije ako se radnja izvrši kako treba
});
	
// Pozivanje obećanja
myPromise.then(
	function(value) { console.log("Funkcija na uspeh", value); },
	function(error) { console.log("Funckija na grešku", error); }
);