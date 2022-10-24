function saberi(...params) {
	return params.reduce((sum, value) => sum + value, 0);
}

console.log(saberi(1, 2, 3));
// 6
console.log(saberi(15));
// 15
console.log(saberi(2, 4, 6, -8, 1, -4, -6, 12, 0));
// 7