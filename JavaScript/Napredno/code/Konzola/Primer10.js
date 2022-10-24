document.getElementById("group").onclick = function() {
	console.log("###### CONSOLE.GROUP #######");
    console.group("Title");
    console.log("Hello from group");
    console.warn("Grupa je po default-u otvorena");
}