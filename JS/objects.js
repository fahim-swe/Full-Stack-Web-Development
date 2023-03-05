 // Object -> group of key: value pair 
 
 let cap = {
    name : "Steve", 
    lastName : "Rogers",
    address : {
        city : "City of Steve"
    },
    age : 25,
    isAvenger : true,
    movies : ["First Avenger", "winter soldier", "civil war"],
    sayHi : function(){
        console.log("Cap say's Hi");
    }

 };


//  // get object 
// console.log(cap.name);
// console.log(cap.address);
// console.log(cap.movies);
// cap.sayHi();
// console.log(cap);

// // SET/UPDATE 
// cap.age = 36;
// cap.isAvenger = false;
// cap.friends = ["tony", "bruce", "peter"];
// console.log("-----------------------");
// console.log(cap);


// // Delete 
// delete cap.address;
// console.log(cap);


for(let key in cap)
{
    console.log(key, " ", cap[key]);
}

let propKey = "age";
// cout << cap[propKey] << endl;
// console.log(cap.age);
// console.log(cap["age"]);
console.log(cap[propKey]);