const someModule = require("./someModule");
const {Tacka, data, processData, globals} = require("./someModule");

data.push(new someModule.Tacka(31, 5));

console.log(processData(someModule.data));
console.log({
	someModuleGlobals: globals,
	currentModuleGlobals: {
		__dirname,
		__filename
	}
});
