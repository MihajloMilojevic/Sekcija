const niz = [1, "test", {name: "John Doe", age: 25}];
niz[2].age = 35;
niz[0]++;
niz.push(function f() { return new Date()});
console.log(niz);
// niz = [1, 2, 3] // GRESKA 

const obj = {ime: "Marko", prezime: "Markovic", godine: 22, test: "abc123"};
obj.godine++;
obj.datum = new Date();
delete obj.test;
console.log(obj);
// obj = {} // GRESKA