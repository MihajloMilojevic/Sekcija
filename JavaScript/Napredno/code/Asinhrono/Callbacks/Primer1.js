console.log("Before setTimeOut");
function callback() {
	console.log("Inside setTimeOut");
}
setTimeout(callback, 1000);
console.log("After setTimeOut");