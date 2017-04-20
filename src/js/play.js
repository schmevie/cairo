
var play_state = {

    // No more 'preload' function, since it is already done in the 'load' state

    create: function() {
        this.dialogueJSON = game.cache.getJSON('dialogue');
        this.text = game.add.text(100, 100, "Current Phaser version: " + this.dialogueJSON, { fill: '#ffffff' });
        this.text.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

        this.dialogueWindow = new dialogueWindow(game, 0, 350);

        this.dialogueWindow.setText('Evie');
    },

    update: function() {
        if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
            console.log('Inside PLAY STATE Testing again');
        }
    }
};

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
        backgroundColor: "#ffff00"
    }
    this.dialogue = game.add.text(0, 0, this.dialogueText, this.style);
    this.dialogue.anchor.set(0.5);

    this.addChild(game.make.sprite(30, 40, 'child'));
}

dialogueWindow.prototype = Object.create(Phaser.Sprite.prototype);
dialogueWindow.prototype.constructor = dialogueWindow;

/**
 * Automatically called by World.update
 */
dialogueWindow.prototype.update = function() {
    this.dialogue.x = Math.floor(this.x + this.width / 2);
    this.dialogue.y = Math.floor(this.y + this.height / 2) - 60;
    // if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
    //     console.log('Inside DIALOGUE WINDOW');
    // }

};

dialogueWindow.prototype.setText = function(text) {
    this.dialogue.setText(text);
}
