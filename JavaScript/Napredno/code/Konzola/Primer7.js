document.getElementById("table").onclick = function() {
	console.log("###### CONSOLE.TABLE #######");
    const data = [
        {ime: "Mihajlo", prezime: "Milojevic", datumRodjenja: "31.05.2004."},
        {ime: "Nikola", prezime: "Rogonjic", datumRodjenja: "10.9.2004."},
        {ime: "Stefan", prezime: "Pejkovic", datumRodjenja: "05.10.2004."},
        {ime: "Sara", prezime: "Spasojevic", datumRodjenja: "20.04.2004."},
        {ime: "Ana", prezime: "Lukovic", datumRodjenja: "12.10.2004."},
        {ime: "Vojin", prezime: "Sundovic", datumRodjenja: "25.01.2005"}
    ]
    console.table(data);
}