let singleQuotes = '  string with quotation  ';
let doubleQuotes = "string with double quotation";

console.log(singleQuotes);
console.log(doubleQuotes);

// let char = singleQuotes.charAt(4);
// let ascii = singleQuotes.charCodeAt(4);
// let subStr = singleQuotes.substring(2, 8);
// console.log(char);
// console.log(ascii);
// console.log(subStr);

let arrStr = singleQuotes.split('i'); // split the string on basis of i
console.log(arrStr);

arrStr = singleQuotes.split(" ");
console.log(arrStr);


singleQuotes =  singleQuotes.trim();
arrStr = singleQuotes.split(" ");
console.log(arrStr);


let str = arrStr.join("$");
console.log(str);
console.log(arrStr.join("+"));


// important 
// trip(), split(), join 
