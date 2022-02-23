// os feature 
let os = require("os");

console.log(os.arch());
console.log(os.platform());


console.log("About Network informaton.........")
console.log(os.networkInterfaces());


console.log();
console.log("About System processor info........");
console.log(os.cpus()); 

