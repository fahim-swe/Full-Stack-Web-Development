
let fs = require("fs");

for(let i = 1; i < 10; i++){
    let dirPathToMake = 'Lecture-' + i;

    fs.unlinkSync(dirPathToMake+"\readme.md");
  
}