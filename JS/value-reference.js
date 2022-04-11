// Primitives are copied by their value
// Objects are copied by their reference

// Value types: Number, String, Boolean, Symbol, undefined, null
// Reference types: Object, Function, Array

let x = {value: 20};

let y = x;

console.log(x);

x.value = 100;
console.log(y);