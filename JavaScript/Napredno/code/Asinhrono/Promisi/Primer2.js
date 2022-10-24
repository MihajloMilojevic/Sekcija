let myPromise = new Promise(function(myResolve, myReject) {
	setTimeout(function() { myResolve("Obećanje ispunjeno"); }, 3000);
});

myPromise.then(function(value) {
	console.log(value);
});

console.log("Nastavak rada scripte...");
console.log("Tek će se nakon 3 sekunde");
console.log("u konzolu ispisati vrednost");
console.log("koju vrati obećanje");