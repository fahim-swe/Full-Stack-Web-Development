// Non-primitive => array, objects, objects


// Functions-> No return time

function sayHi()
{
    console.log("Hello from sayHi");
}

// with paratemter
function withParameter(param)
{
    console.log("Funtion with parameter");
    console.log("Param recieved:  ",param );
}


// with return type
function withReturnType(param)
{
    console.log("param recievd: ", param);
    return "return from with Return Type";
}

sayHi();
withParameter(10);
withParameter("Hellow");

let rVal = withReturnType([1, 2, 3, 4, 5]);


