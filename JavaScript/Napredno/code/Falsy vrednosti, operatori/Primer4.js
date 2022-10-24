const data = [
    {
        id: 1,
        naziv: "Test 1",
        slike: [
            {src: "/slika1.jpg", alt: "Slika 1"},
            {src: "/slika2.jpg", alt: "Slika 2"},
            {src: "/slika3.jpg", alt: "Slika 3"}
        ],
        boja: {
            osnovna: "crna",
            dodatna: "bela"
        }
    },
    {
        id: 2,
        naziv: "Test 2",
        slike: [
            {src: "/slika7.png", alt: "Slika 7"}
        ]
    },
    {
        id: 3,
        naziv: "Test 3",
        boja: {
            osnovna: "crna"
        },
        slike: [
            {src: "/slika15.png"}
        ]
    }
]

for (const proizvod of data) {
    console.group(proizvod.naziv);
    
    console.log(proizvod.id);
    console.log(proizvod.naziv);

    console.group("Slike")
    for (const slika of proizvod.slike) {
        console.log("Alt: ", slika.alt);
        console.log("Src: ", slika.src);
    }
    console.groupEnd("Slike");

    console.group("Boje")
    console.log("Osnovna: ", proizvod.boja.osnovna);
    console.log("Dodatna: ", proizvod.boja.dodatna);
    console.groupEnd("Boje");

    console.groupEnd(proizvod.naziv)
}