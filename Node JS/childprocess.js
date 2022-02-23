let cp = require("child_process");
console.log("Trying to open calculator");

// cp.execSync("code"); // opening code editor

let childProc = require('child_process');
childProc.execSync("google-chrome https:google.com"); // This is for ubuntu terminal

console.log("chrome closed");


let output = cp.execSync("node abc.js");

console.log("output " + output);


