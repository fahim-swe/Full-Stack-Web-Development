var playing = false;
var score;

var action;
var timeremaining;
var correctAnswer;


// if we click on the start/reset
document.getElementById("startreset").onclick = function(){
    
   
    // if we are playing
    if(playing == true){
        location.reload();
    }
    else{ // if we are not playing

        // change mode to playing
        playing = true;

        // set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;

        // show countdown box
        show("timeremaining");
        timeremaining = 60;
        
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        
        // hide game over box
        hide("gameOver");


        // change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
        

        // start countdown
        startCountdown();

        // generate a new Q&A

        generateQA();

    } 
    
        // reduce time by 1 sec in loops
            // timeleft
                // yes -> continue
                // no -> gameover
            // change button to reset
            // generate new Q&A
}


// clicking on answer box

for(let i = 1; i < 5; i++){
    document.getElementById("box"+i).onclick = function(){

        // check if we are playing
        if(playing == true){
            if(this.innerHTML == correctAnswer){
                
                // increase score by 1
                score++;

                document.getElementById("scorevalue").innerHTML = score;
                hide("wrong");
                show("correct");
                setTimeout(() => {
                    hide("correct");
                }, 1000);

                // generate new QA
                generateQA();
            }
            else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 1000)
            }
        }
    }
}

function startCountdown(){

    action = setInterval(function(){
        timeremaining  -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;


        if(timeremaining == 0){
            stopCountdown();    
            show("gameOver");
            document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your score is " + score + ".</p>";

            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;

            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}

function show(Id){
    console.log(Id);
    document.getElementById(Id).style.display = "block";
}

function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function generateQA()
{
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());

    correctAnswer = x*y;

    document.getElementById("question").innerHTML = x + " X " + y;

    var correntPostion = 1 + Math.round(3*Math.random());

    document.getElementById("box" + correntPostion).innerHTML = correctAnswer;

    var answers = correctAnswer;

    for(var i = 1; i < 5; i++){
        if(i != correntPostion){
            var wrongAnswer =  Math.round(x*y*Math.random());

            document.getElementById("box" + i).innerHTML = wrongAnswer;
        }
    }
}

function stopCountdown(){
    clearInterval(action);
}
// if we click on answer box
    // if we are playing 
        // corrent ?
            // yes
                // increase score
                // show correct box for 1 sec
                // generate new Q&A
            // no
                // show try again box for 1 sec

