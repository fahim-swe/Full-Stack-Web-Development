console.log("Hello JS");

// declare variable
let a;
console.log(a); // undefine

a = 10;
console.log(a);
a = 10.1;
console.log(a);
a = "Hello I am a string";
console.log(a);
a = 'Hello I am also string';
console.log(a);


// variable types: primitive: number, string, boolean, null
console.log("Type of variable: "+typeof(a));
a = true;
console.log("Type of variable: " + a);





// JS -> Java (syntaxtically similler to Java)
let number = 10;
for(let i = 1; i <= number; i++){
    console.log("Number is: " + i);
}

// is Prime check
number = 23;
let flag = true;

for(let i = 2; i < number; i++){
    if(number % i == 0){
        flag = false;
        break;
    }
}

if(flag){
    console.log(number, " is prime");
}
else{
    console.log(number, " is not prime");
}