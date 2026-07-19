let selectedTime = 60;
let selectedMode = "beginner";


document.querySelectorAll(".timeBtn").forEach(button=>{

button.onclick=function(){

selectedTime = Number(this.dataset.time);

alert("Time Selected: " + selectedTime + " seconds");

}

});


document.getElementById("difficulty")
.onchange=function(){

selectedMode = this.value;

console.log("Mode:", selectedMode);

};



document.getElementById("playBtn")
.onclick=function(){

document.getElementById("menu").style.display="none";

startGame();

};


function startGame(){

console.log(
"Game Started",
selectedTime,
selectedMode
);

}
let targetText = "";
let typedText = "";
let score = 0;

const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "Typing speed improves with daily practice",
    "Every warrior needs focus and accuracy",
    "Fast typing creates powerful attacks",
    "Practice makes you a better player"
];


const config = {
    type: Phaser.AUTO,
    width: 900,
    height: 500,
    parent: "game",
    backgroundColor: "#222",
    scene: {
        create: create
    }
};


let game = new Phaser.Game(config);


let targetDisplay;
let inputDisplay;
let scoreDisplay;


function create(){

    this.add.text(
        300,
        40,
        "⚔️ Typing Battle",
        {
            fontSize:"40px",
            color:"#00ff99"
        }
    );


    targetText = sentences[
        Math.floor(Math.random()*sentences.length)
    ];


    targetDisplay = this.add.text(
        50,
        150,
        targetText,
        {
            fontSize:"26px",
            color:"#ffff00",
            wordWrap:{width:800}
        }
    );


    inputDisplay = this.add.text(
        50,
        260,
        "Type: ",
        {
            fontSize:"28px",
            color:"#ffffff"
        }
    );


    scoreDisplay = this.add.text(
        50,
        350,
        "Score: 0",
        {
            fontSize:"25px",
            color:"#00ff99"
        }
    );


    this.input.keyboard.on(
        "keydown",
        function(event){

            if(event.key.length === 1){

                typedText += event.key;

                inputDisplay.setText(
                    "Type: " + typedText
                );


                if(targetText.startsWith(typedText)){

                    inputDisplay.setColor("#00ff00");

                }else{

                    inputDisplay.setColor("#ff0000");

                }


                if(typedText === targetText){

                    score += 10;

                    scoreDisplay.setText(
                        "Score: " + score
                    );


                    typedText="";

                    targetText =
                    sentences[
                    Math.floor(Math.random()*sentences.length)
                    ];

                    targetDisplay.setText(
                        targetText
                    );
                }

            }

        }
    );

}
