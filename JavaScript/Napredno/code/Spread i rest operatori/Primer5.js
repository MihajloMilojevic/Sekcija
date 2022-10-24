function student(ime, prezime, ...predmeti) {
	return {ime, prezime, predmeti};
}

console.log(student("Marko", "Markovic", "srpski", "matematika", "programiranje"));
// {
// 	ime: 'Marko',
// 	prezime: 'Markovic',
// 	predmeti: [ 'srpski', 'matematika', 'programiranje' ]
// }
console.log(student("Ana", "Kalenic", "baze podataka", "veb dizajn"));
// {
// 	ime: 'Ana',
// 	prezime: 'Kalenic',
// 	predmeti: [ 'baze podataka', 'veb dizajn' ]
// }
console.log(student("Jovan", "Jovanovic", "veb programiranje", "racunarski sistemi"));
// {
// 	ime: 'Jovan',
// 	prezime: 'Jovanovic',
// 	predmeti: [ 'veb programiranje', 'racunarski sistemi' ]
// }