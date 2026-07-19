let selectedTime = 60;
let selectedMode = "beginner";

let score = 0;
let typedText = "";
let targetText = "";

let timeLeft = 60;
let timerInterval;

let totalTyped = 0;
let correctTyped = 0;
let combo = 0;
let startTime;


// Sentences

const sentences = {

beginner:[
"The sun is bright",
"I like to play games",
"Typing is fun"
],

normal:[
"Typing speed improves with daily practice",
"Every warrior needs focus and accuracy",
"Practice makes you a better player"
],

peak:[
"Fast typing creates powerful attacks in battle",
"Strong players improve their skills every day"
],

nightmare:[
"The legendary warrior defeated the powerful enemy"
],

legend:[
"Mastering typing speed requires patience focus and continuous practice"
]

};



// Time Select

document.querySelectorAll(".timeBtn")
.forEach(button=>{

button.onclick=function(){

selectedTime =
Number(this.dataset.time);

console.log(
"Time:",
selectedTime
);

}

});



// Difficulty Select

document.getElementById("difficulty")
.onchange=function(){

selectedMode=this.value;

console.log(
"Mode:",
selectedMode
);

};



// Start Button

document.getElementById("playBtn")
.onclick=function(){


document.getElementById("menu")
.style.display="none";


document.getElementById("battleScreen")
.style.display="block";


startGame();

};




// Start Game

function startGame(){

score=0;
typedText="";

timeLeft=selectedTime;


totalTyped=0;
correctTyped=0;
combo=0;


startTime=Date.now();



document.getElementById("timer")
.innerText=timeLeft;


document.getElementById("score")
.innerText=score;


document.getElementById("wpm")
.innerText=0;


document.getElementById("accuracy")
.innerText="100%";


newSentence();


startTimer();


}



// Timer

function startTimer(){

clearInterval(timerInterval);


timerInterval=setInterval(()=>{


timeLeft--;


document.getElementById("timer")
.innerText=timeLeft;



if(timeLeft<=0){

clearInterval(timerInterval);


alert(
"Game Over Score: "+score
);


}



},1000);

}



// New Sentence

function newSentence(){


let list =
sentences[selectedMode];


targetText =
list[
Math.floor(
Math.random()*list.length
)
];


typedText="";


document.getElementById("targetText")
.innerText=targetText;


document.getElementById("typingInput")
.value="";


}




// Typing System


document.addEventListener(
"DOMContentLoaded",
()=>{


let input =
document.getElementById("typingInput");



input.addEventListener(
"input",
()=>{


typedText=input.value;


totalTyped++;



if(targetText.startsWith(typedText)){


input.style.color="green";


correctTyped++;


combo++;



}else{


input.style.color="red";


combo=0;


}



// Accuracy

let accuracy =
Math.floor(
(correctTyped/totalTyped)*100
);


document.getElementById("accuracy")
.innerText=
accuracy+"%";



// WPM

let minutes =
(Date.now()-startTime)/60000;


let wpm =
Math.floor(
(totalTyped/5)/minutes
);



document.getElementById("wpm")
.innerText=wpm;




// Complete

if(typedText===targetText){


score += 10 + combo;


document.getElementById("score")
.innerText=score;


newSentence();


}



});


});
