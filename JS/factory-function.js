// Factory function

function createCircle(radis){
    return{
        radis,
        drow(){
            console.log("draw");
        }
    }
}


var circle1 = createCircle(1);

var cricle2 = createCircle(2);

console.log(circle1);
console.log(circle1.radis);