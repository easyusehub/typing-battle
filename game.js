let currentText = "";
let score = 0;
let time = 60;

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


function create(){

    this.add.text(250,50,
        "⚔️ Typing Battle",
        {
            fontSize:"40px",
            color:"#00ff99"
        }
    );


    this.add.text(50,150,
        "Press START then type the sentence:",
        {
            fontSize:"22px",
            color:"#fff"
        }
    );


    let text = sentences[
        Math.floor(Math.random()*sentences.length)
    ];


    this.add.text(50,220,
        text,
        {
            fontSize:"25px",
            color:"#ffff00",
            wordWrap:{width:800}
        }
    );


    this.add.text(50,350,
        "Timer: 60s   Score: 0",
        {
            fontSize:"25px",
            color:"#fff"
        }
    );

}
