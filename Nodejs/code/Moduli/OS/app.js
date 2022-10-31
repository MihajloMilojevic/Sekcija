const os = require("os");

console.log({
	type: os.type(),
	relase: os.release(), 
	totalMemory: os.totalmem(),
	freeMemory: os.freemem(),
	systemUptime: os.uptime(),
	userInfo: os.userInfo()
})