document.getElementById("countReset").onclick = function() {
	console.log("###### CONSOLE.COUNTRESET #######");
    const arr = [
        "pon", "sre", "pon", "pet", 
        "sub", "ned", "uto", "sre", 
        "cet", "pon", "cet", "ned"
    ];
    console.countReset();
    console.countReset("pon");
    for (const dan of arr) {
        console.count();
        console.count(dan);
    }
}