// Constructor function

function createCircle(radius)
{
    this.radius = radius;

    this.draw = function (){
        console.log("Draw");
    }
}


var circle1 = new createCircle(1);
console.log(circle1);