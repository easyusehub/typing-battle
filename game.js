let selectedTime = 60;
let selectedMode = "beginner";

let score = 0;
let typedText = "";
let targetText = "";

let timeLeft = 60;
let timerInterval;

const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "Typing speed improves with daily practice",
    "Every warrior needs focus and accuracy",
    "Fast typing creates powerful attacks",
    "Practice makes you a better player"
];


// TIME SELECT

document.querySelectorAll(".timeBtn").forEach(button => {

    button.onclick = function(){

        selectedTime = Number(this.dataset.time);

        console.log(
            "Time:",
            selectedTime
        );

    }

});


// DIFFICULTY SELECT

document.getElementById("difficulty").onchange=function(){

    selectedMode=this.value;

    console.log(
        "Mode:",
        selectedMode
    );

};


// START BUTTON

document.getElementById("playBtn").onclick=function(){

    document.getElementById("menu").style.display="none";

    document.getElementById("battleScreen").style.display="block";

    startGame();

};



// START GAME

function startGame(){

    score=0;

    timeLeft=selectedTime;

    document.getElementById("timer").innerText=timeLeft;

    document.getElementById("score").innerText=score;


    newSentence();


    startTimer();

}




// TIMER

function startTimer(){

    clearInterval(timerInterval);


    timerInterval=setInterval(()=>{


        timeLeft--;


        document.getElementById("timer").innerText=timeLeft;



        if(timeLeft<=0){

            clearInterval(timerInterval);

            alert(
                "Game Over! Score: "+score
            );

        }


    },1000);

}





// NEW SENTENCE

function newSentence(){

    targetText =
    sentences[
        Math.floor(
            Math.random()*sentences.length
        )
    ];


    typedText="";


    document.getElementById("targetText").innerText=
    targetText;


    document.getElementById("typingInput").value="";

}




// TYPING SYSTEM


document.addEventListener(
"DOMContentLoaded",
()=>{


let input =
document.getElementById("typingInput");


input.addEventListener(
"input",
()=>{


typedText=input.value;



if(targetText.startsWith(typedText)){


input.style.color="green";


}else{


input.style.color="red";


}




if(typedText===targetText){


score+=10;


document.getElementById("score").innerText=
score;


newSentence();


}



});


});

                    
