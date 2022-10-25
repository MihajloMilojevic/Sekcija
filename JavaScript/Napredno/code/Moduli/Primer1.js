console.log("Primer1");

function add(...params) {
	return params.reduce((total, val) => total + val, 0);
}

function multiply(...params) {
	return params.reduce((total, val) => total * val, 1);
}

export {add, multiply};