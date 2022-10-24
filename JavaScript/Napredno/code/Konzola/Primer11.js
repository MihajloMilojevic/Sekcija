document.getElementById("groupCallapsed").onclick = function() {
	console.log("###### CONSOLE.GROUPCALLAPSED #######");
    console.groupCollapsed("Title");
    console.log("Hello from group");
    console.warn("Grupa je po default-u zarvorena");
}