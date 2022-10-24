document.getElementById("count").onclick = function() {
	console.log("###### CONSOLE.COUNT #######");
    const arr = [
        "pon", "sre", "pon", "pet", 
        "sub", "ned", "uto", "sre", 
        "cet", "pon", "cet", "ned"
    ];
    for (const dan of arr) {
        console.count();
        console.count(dan);
    }
}