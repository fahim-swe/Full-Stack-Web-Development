// In Java Hashmap
// In C++, Map

// Object -> group of key value pair
// Key: value

// {key: "value"}
// key: value -> property
// key: function -> method


let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    address: {
        city: "New york",
        zipCode : 1234
    },
    sayHi: function(){
        console.log("Hi, This is Jon");
    }
 
};


console.log(person);
console.log(person.sayHi());
console.log(person.address);

console.log("...........................");

// Update person object
person.age = 45;
person.address.city = "New York Area";
person.address.zipCode = 1111;

// Set value in Object
person.favorateMovie = ["Avenger 1", "Captain Anerica", "Infinity War"];

console.log("........................");
console.log(person.age);
console.log(person.address);
console.log(person.favorateMovie);


// Delete key
delete person.address;

console.log(person.address);


console.log("...........................");
// loop in object
for(let key in person){
    console.log(key, " : ", person[key]);
}



console.log("..................................");
let propKey = "age";
console.log(person[propKey]);
console.log(person["age"]);
console.log(person.age);


// . and []   . indicate the value, [] search a value
















