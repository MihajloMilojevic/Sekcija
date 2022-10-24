const osoba = {
    ime: "Marko",
    prezime: "Markovic",
    datumRodjenja: new Date(2004, 9, 30),
    jmbg: "3009004780024",
    skola: "Nikola Tesla",
    odeljenje: "IV/3",
    predmeti: [
        "matematika", "srpksi", 
        "engleski", "programiranje", 
        "veb programiranje"
    ]
}

for (const key in osoba) {
    console.log(`${key} => ${osoba[key]}`);
}