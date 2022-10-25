console.log("Primer2");

export function add(...params) {
	return params.reduce((total, val) => total + val, 0);
}

export function multiply(...params) {
	return params.reduce((total, val) => total * val, 1);
}

