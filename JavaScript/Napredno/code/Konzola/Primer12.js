document.getElementById("groupEnd").onclick = function() {
	console.log("###### CONSOLE.GROUPCALLAPSED #######");
    console.groupEnd("Title");
    console.log("Hello from outside of group");
}