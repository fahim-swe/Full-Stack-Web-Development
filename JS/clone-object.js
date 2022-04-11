const circle = {
    radis: 1, 
    draw(){
        console.log("draw");
    }
}


const anther = {};

for(let key in circle){
    anther[key] = circle[key];
}

console.log("Using loop......");
console.log(anther);


console.log("Copy using Object....")
const anther2 = Object.assign({}, circle);
console.log(anther2);


console.log("Copy using object with add addition thing...")
const anther3 = Object.assign({
    color: 'Blue'

}, circle); // copy all thing

console.log(anther3);


console.log("Copy using ... ")
const anther4 = { ...circle};

console.log(anther4);