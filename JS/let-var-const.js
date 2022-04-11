// var => function- scoped
// ES6: let, const => block scoped

function start(){

    
    for(var i = 0; i < 5; i++){
        console.log(i);
        let color = 'red';
    }

    console.log(i); // var
    // console.log(color); // let 
}

start();


var color = 'red'; // this attach with window object in browser
// that is a limitation



let age = 30; // don't attract

