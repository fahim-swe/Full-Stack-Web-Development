// Non primitive -> array, object, function 

function sayHi()
{
    console.log("Hello, from Say hi");


}

sayHi();

function sayHi(param)
{
    console.log("Hello, from say Hi");
    console.log("Param recieved", param);

    let rVal =  Math.random() > 0.5 ? true : "Less than 0.5";
    return rVal;
}

sayHi(10);
sayHi("Hello");
sayHi([1, 2, 3, 4, 5]);

let rVal = sayHi([1, 2, 3, 4, 5]);
console.log(rVal);

