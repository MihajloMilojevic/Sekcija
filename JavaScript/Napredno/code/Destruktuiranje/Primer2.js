const obj = {
	ime: "Mihajlo",
	prezime: "Milojevic",
	mejl: "milojevicm374@gmail.com",
}

const ime1 = obj.ime;
const prezime1 = obj.prezime;
const mejl1 = obj.mejl;
console.log(ime1, prezime1, mejl1);
// Mihajlo Milojevic milojevicm374@gmail.com

const {ime, prezime, mejl} = obj;
console.log(ime, prezime, mejl);
// Mihajlo Milojevic milojevicm374@gmail.com

const {ime: ime2, prezime: prezime2, mejl: mejl2} = obj;
console.log(ime2, prezime2, mejl2);
// Mihajlo Milojevic milojevicm374@gmail.com

function f({text, style, props}) {
	console.log(text, style, props)
}

f({
	text: "Hello JS",
	style: {
		color: "red",
		backgroundColor: "blue"
	},
	props: {
		num: 1,
		pi: Math.PI
	}
})
// Hello JS { color: 'red', backgroundColor: 'blue' } { num: 1, pi: 3.141592653589793 }
