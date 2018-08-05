
var play_state = {

    // No more 'preload' function, since it is already done in the 'load' state

    create: function() {
        this.dialogueJSON = game.cache.getJSON('dialogue');
        this.text = game.add.text(100, 100, "Current Phaser version: " + this.dialogueJSON, { fill: '#ffffff' });
        this.text.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

        this.dialogueWindow = new dialogueWindow(game, 0, 350);

        this.testPlayer = game.add.sprite(0, 0, 'child');

        //this.dialogueWindow.setText('Evie');
    },

    update: function() {
        if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
            console.log('Inside PLAY STATE Testing again and again');
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.testPlayer.y -= 4;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.testPlayer.x -= 4;
        }   
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.testPlayer.x += 4;
        }   
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.testPlayer.y += 4;
        }                                 
    }
};


var dialogueCharacter = function () {
    //Variables
    this.dialogueTree = game.cache.getJSON('dialogue');
    this.happiness = 100;
    this.irritation = 0;
    this.answers = [];

    //Functions
};

dialogueCharacter.prototype = Object.create(Phaser.Sprite.prototype);
dialogueCharacter.prototype.constructor = dialogueCharacter;

//Window constructor
var dialogueWindow = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'dialogue-bg');
    game.add.existing(this);

    this.dialogue;
    this.dialogueText = "TESTING";
    this.style = {
        font: "24px Arial",
        fill: "#ff0044",
        wordWrap: true,
        wordWrapWidth: this.width,
        align: "center",
        backgroundColor: "#3f4ff00"
    }
    this.dialogue = game.add.text(0, 0, this.dialogueText, this.style);
    this.dialogue.anchor.set(0.5);

    this.dialogue.x = Math.floor(this.x + this.width / 2);
    this.dialogue.y = Math.floor(this.y + this.height / 2) - 60;

    this.addChild(game.make.sprite(30, 40, 'child'));
}

dialogueWindow.prototype = Object.create(Phaser.Sprite.prototype);
dialogueWindow.prototype.constructor = dialogueWindow;

/**
 * Automatically called by World.update
 */
dialogueWindow.prototype.update = function() {

    // if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
    //     console.log('Inside DIALOGUE WINDOW');
    // }

};

dialogueWindow.prototype.setText = function(text) {
    this.dialogue.setText(text);
}

dialogueWindow.prototype.testFunc = function() {
    console.log('carl');
}
