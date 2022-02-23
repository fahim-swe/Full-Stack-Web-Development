// // file system

// // read
let fs = require("fs");
// let buffer = fs.readFileSync("abc.js");

// console.log("binary data", buffer);
// console.log("bin data" + buffer); // concate with string




// // File-> create, read, update, delete
// fs.openSync("abc.txt", "w"); // create a empty file

// // create and write in file system
// fs.writeFileSync("abc.txt", "Hello, This is my valentine Day! 14, 02, 2022"); // if noting then, add this 
// // if some exit then replace whole think


// // update
// fs.appendFileSync("abc.txt", "Learn DSA-10, JavaScript, Networking......"); // add this 


// // create a directory
// // fs.mkdirSync("my directory");
// // fs.writeFileSync("my directory/abc.txt", "This is my content");
// // fs.writeFileSync("my directory/abc2.txt", "this is second content");
// // fs.writeFileSync("my directory/abc3.txt", "this is third content");



// let content = fs.readdirSync("my directory");
// console.log(content); // element on my directory file

// for(let file in content){
//     console.log("file ", content[file], " is removed");
//     fs.unlinkSync("my directory/"+content[file]);  // removed file
// }


// console.log("...............................................");

// fs.rmdirSync("my directory"); // remove a diretory






// For creating file-> openSync, appendFileSync, writeFileSync
// For read file-> readFileSync, readdirSync
// for update file-> appendFileSync
// for delete file-> unlinkSync, rmdirSync 
// fs.existSync -> if a file exits at a path/ true/false
// fs.lstatSync -> check file is directory or file


let doesFileExit = fs.existsSync("abc.txt");
console.log(doesFileExit);  // if exit return true

doesFileExit = fs.existsSync("abcd.txt");
console.log(doesFileExit);


let detailsObj = fs.lstatSync( `${__dirname}\\fileSystem.js`);

let ans = detailsObj.isFile();

console.log(ans);

console.log(detailsObj);

ans = detailsObj.isDirectory();

console.log(ans);






















