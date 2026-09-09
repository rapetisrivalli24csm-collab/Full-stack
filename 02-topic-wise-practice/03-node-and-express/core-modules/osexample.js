const os = require("os");

console.log("Operating System Information");
console.log("----------------------------");

console.log("Platform:", os.platform());
console.log("Operating System:", os.type());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Home Directory:", os.homedir());
console.log("Computer Uptime:", os.uptime(), "seconds");