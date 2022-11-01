const lodash = require("lodash");

const nestedArray = [
	1, 2,
	[3, [4]],
	[[5], [6, [7]]]
]
const flatArray = lodash.flattenDeep(nestedArray);
console.log({
	nestedArray,
	flatArray
});

