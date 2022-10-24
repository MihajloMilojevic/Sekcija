// ovo je jednolinijski komentar
/*
    ovo je viselinijski
    komentar
*/

// objekti
var o = {
    ime: "Java",
    prezime: "Srcipt",
    godine: 27,
    punoIme: function () {
        return this.ime + " " + this.prezime;
    }
}

console.log(o.punoIme());
console.log(o['godine']);



// datumi
var d = new Date(); // definisemo datum
var mesec = d.getMonth() + 1; // uzmemo mesec
var dan = d.getDate(); // uzmemo datum
var godina = d.getFullYear(); // uzmemo godinu

function Datum() { // funkcija koja pravi datum
    return dan + '.' + mesec + '.' + godina;
}
console.log(Datum()); // ispis datuma u konzoli



//nizovi
var auto = new Array( // deklarisanje niza
    'VolksWagen',
    'Audi',
    'BMW',
    'Mercedes',
);

console.log(auto.join(', ')); // ispis niza
auto[1] = "Skoda"; // promena niza, menja vrednost na indexu 1 odnosno poziciji 2
auto.pop(); // izbacujemo poslednji element iz niza
console.log(auto.join(' * ')); // ispis niza koristeci funkciju join
auto.push("Seat"); // dodajemo "Seat" na kraj niza
console.log(auto.join(', ')); // ispis niza
auto.shift(); // izbacujemo prvi element iz niza
console.log(auto.join(', ')); // ispis niza
auto.unshift('Golf'); // dodajemo "Golf" na prvo mesto
console.log(auto.join(', ')); // ispis niza


// klasa Math
var pi = Math.PI;   // promenljiva pi dobija vrednost PI koja je definisana u klasi Math
console.log(pi);

Math.abs(-5);       // metoda abs vraca apsolutnu vrednost unetog parametra
Math.sqrt(16);      //medota sqrt vraca koren unetog parametra
Math.pow(4, 2);     // metoda pow vraca stepen nekog broja (4 na 2)
Math.round(5.56);   // metoda rount zaokruzuje vrednst unetu kao parametar
Math.random();   // metoda random daje random vrednost (), (do), (od, do)


// ciklusi
var br = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
var s = new String();

if (5 > 3)
    console.log("Tacno");
else
    console.log("Netacno");



for (i = 0; i < br.length; i++)
    s += br[i] + " ";
console.log(s);


i = 0;
s = "";
while (i < br.length) {
    s += br[i] + " ";
    i++;
}
console.log(s);


i = 0;
s = "";
do {
    s += br[i] + " ";
    i++;
} while (i < br.length);
console.log(s);

var x = prompt("Unesi vrednost;");
switch (x) {
    case '1': console.log("Uneli ste 1"); break;
    case '2': console.log("Uneli ste 2"); break;
    case '3': console.log("Uneli ste 3"); break;
    default: console.log("Uneli ste nesto drugo"); break;
}

document.getElementById('naslov');          // vraca tag sa id-em naslov
document.getElementsByClassName('naslov');  // vraca objekat tagova sa klasom naslov
document.querySelector('.naslov');          // vraca tag sa klasom naslov(.)
document.querySelectorAll('#naslov');        // vraca sve tagove sa id-em naslov