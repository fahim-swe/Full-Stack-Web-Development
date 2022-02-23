const fs = require("fs");

// console.log("Before")
// let data = fs.readFileSync("f1.txt");

// console.log("" + data);



console.log("Before");

// async function nodeJS


fs.readFile("f1.txt", cb);  // this while start  

function cb(err, data)
{
    console.log("data: " + data);
}

console.log("After");
console.log("Mean While");
