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


function create() {

    this.add.text(
        300,
        100,
        "⚔️ Typing Battle Ready!",
        {
            fontSize: "40px",
            color: "#00ff99"
        }
    );


    this.add.text(
        250,
        200,
        "Next: Typing System + Battle",
        {
            fontSize: "25px",
            color: "#ffffff"
        }
    );

}
