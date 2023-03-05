// array declare 
let arr = [];
console.log(arr);

let array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array.length);

let i = 0;
while( i < array.length){
    console.log("element at index ", i , " is ", array[i]);
    i++;
}

array.forEach( (val, index)=> {
    console.log("index " , index, " = value  ", val);
});


// push, unshift 
// array allow multiple types of element
array.push("last value");
array.unshift("first value");
console.log("---------------------");
console.log(array);

// delete 
array.shift(); // remove the last element
array.pop(); // remove the first element

console.log(array);


// slices 
let partOfAnArray = array.slice();
console.log(partOfAnArray);

// original array not change 
partOfAnArray = array.slice(1, array.length-1);
console.log(partOfAnArray);


console.log(array);
array.splice(2, 1); // remove array element
console.log(array);

// index of // contain 
console.log("index of ", array.indexOf(4));

console.log("contain 2 ", array.includes(2));
console.log("contain -1", array.includes(-1));