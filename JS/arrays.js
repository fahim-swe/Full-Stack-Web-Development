

// arrays in JS
let array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array.length);


let i = 0;
while(i < array.length){
    console.log(array[i]);
    i++;
}


function fun(){
    console.log(".......................");
}

console.log(".............................");
// Some common operation 
// push, unshift
array.push("last value"); // push
array.unshift("first value"); // push front
console.log(array);


fun();
array.shift(); // delete first element
array.pop(); // delete last element
console.log(array);


fun();
console.log(array);
let partOfArray = array.slice(0, 3);
console.log(partOfArray);


// delete
fun();
console.log(array);
array.splice(1, 1); // delete at index = 1, 
console.log(array);


// index of contain

if(array.indexOf(23)){
    console.log("Not contain");
}



















