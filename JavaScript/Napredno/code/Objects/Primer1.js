/////////////// KEYS ///////////////
var obj = {
	ime: "Mihajlo",
	prezime: "Milojevic",
	mejl: "milojevicm374@gmail.com",
}
console.log(Object.keys(obj));
// [ 'ime', 'prezime', 'mejl' ]

/////////////// VALUES ///////////////
var obj = {
	ime: "Mihajlo",
	prezime: "Milojevic",
	mejl: "milojevicm374@gmail.com",
}
console.log(Object.values(obj));
// [ 'Mihajlo', 'Milojevic', 'milojevicm374@gmail.com' ]

/////////////// ENTRIES ///////////////
var obj = {
	ime: "Mihajlo",
	prezime: "Milojevic",
	mejl: "milojevicm374@gmail.com",
}
console.log(Object.entries(obj));
// [
// 	[ 'ime', 'Mihajlo' ],
// 	[ 'prezime', 'Milojevic' ],
// 	[ 'mejl', 'milojevicm374@gmail.com' ]
// ]

/////////////// FROMENTRIES ///////////////

var obj = Object.fromEntries([
	[ 'ime', 'Mihajlo' ],
	[ 'prezime', 'Milojevic' ],
	[ 'mejl', 'milojevicm374@gmail.com' ]
])
console.log(obj);
// {
// 	ime: 'Mihajlo',
// 	prezime: 'Milojevic',
// 	mejl: 'milojevicm374@gmail.com'
// }

/////////////// HASOWNPROPERTY ///////////////
var obj = {
	ime: "Mihajlo",
	prezime: "Milojevic",
	mejl: "milojevicm374@gmail.com"
}
console.log(obj.hasOwnProperty("ime"));
// true
console.log(obj.hasOwnProperty("prezime"));
// true
console.log(obj.hasOwnProperty("mejl"));
// true
console.log(obj.hasOwnProperty("email"));
// false
console.log(obj.hasOwnProperty("telefon"));
// false

