


function generateQuestion(){

    let num1 = Math.floor(Math.random()*10 + 1);
    let num2 = Math.floor(Math.random()*10 + 1);

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    var gameOver = document.getElementById("gameOver");
    
    

    displayResult(num1*num2);

    return num1 * num2;
}



function displayResult(num)
{
    document.getElementById("result").innerHTML = num;
    var gameOver = document.getElementById("gameOver");
    
    
}