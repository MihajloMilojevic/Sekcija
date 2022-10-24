let poruka = "Globalna promenljiva poruka";

function f() {
    let poruka = "Lokalna promenljiva poruka definisana u funkciji";
    console.log(poruka);
}

if(true) {
    let poruka = "Lokalna promenljiva poruka definisana u if bloku";
    console.log(poruka);
}

f();
console.log(poruka);