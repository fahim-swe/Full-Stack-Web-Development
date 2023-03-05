console.log("Hello Js");

let a;
console.log(a); // undefine variables

a = 10;
console.log(typeof(a));
a = 10.5;
console.log(typeof(a));

console.log(a);
a = "Hello, I am a string";
console.log(a);
a = [1, 2, 3, 4];
console.log(a);

// variable types: Primitive types: number, string, boolean, null 
a = null;
console.log(a);


// Loop
let number = 23;
let flag = true;

for(let div = 2; div < number; div++){
    if(number % div == 0){
        flag = false;
    }
}

if(flag){
    console.log("Prime number");
}
else {
    console.log("Not prime");
}