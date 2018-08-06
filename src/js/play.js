
var play_state = 
{
    // No more 'preload' function, since it is already done in the 'load' state

    create: function() 
    {
        ImageBackground = game.add.sprite(0, 0, 'MainMenuBackground');
        FadeInImage(ImageBackground);
        AudioBackgroundMusic.restart();
        AudioBackgroundMusic.loopFull();
        StartDustParticle();

        DialogueJSON = game.cache.getJSON('dialogue');

        DialogueWindow = new dialogueWindow(game, DialogueJSON);

        DialogueWindow.alignIn(ImageBackground, Phaser.BOTTOM_CENTER, 0, -30);

        DialogueWindow.alpha = 0;
        tweenDialogueWindowFade = game.add.tween(DialogueWindow).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 2000);


        SpaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        SpaceKey.onDown.add(DialogueWindow.NextMessage, this); 

        //this.text = game.add.text(100, 100, "Current Phaser version: " + this.dialogueJSON, { fill: '#ffffff' });
        //this.text.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

        //this.dialogueWindow = new dialogueWindow(game, 0, 350);

        //this.testPlayer = game.add.sprite(0, 0, 'Player');

        //this.dialogueWindow.setText('Evie');
    },

    update: function() 
    {
        // if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) 
        // {
        //     console.log('Inside PLAY STATE Testing again and again');
        // }
        // if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        //     this.testPlayer.y -= 4;
        // }
        // if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        //     this.testPlayer.x -= 4;
        // }   
        // if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        //     this.testPlayer.x += 4;
        // }   
        // if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        //     this.testPlayer.y += 4;
        // }                                 
    }
};


var dialogueCharacter = function () 
{
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
var dialogueWindow = function(game, dialogueJSON) 
{
    Phaser.Sprite.call(this, game, 0, 0, 'Image_DialogueBox');
    game.add.existing(this);
    //this.scale.x = this.scale.x + (100 * (1 - this.scale.x / game.width));
    //this.alpha = 0.5;

    DialogueDataJSON = dialogueJSON;
    CurrentJSONIndex = 0;
    CurrentString = "";
    RemainTextToShow = DialogueDataJSON[CurrentJSONIndex].m;
    TextDialogue = game.add.text(0, 0, CurrentString, FontStyle);
    this.addChild(TextDialogue);
    TextDialogue.alignIn(this, Phaser.TOP_LEFT, -100, -20);
    TextDialogue.alpha = 1;

    TextUpdateSpeed = 50
    TimeElapse = 0;
    //TextDialogue.alignIn(this, Phaser.CENTER_CENTER, 0, 0);
    //this.addChild(game.make.sprite(30, 40, 'Player'));
}

dialogueWindow.prototype = Object.create(Phaser.Sprite.prototype);
dialogueWindow.prototype.constructor = dialogueWindow;

/**
 * Automatically called by World.update
 */
dialogueWindow.prototype.update = function() 
{
    TimeElapse += game.time.elapsed

    if (TimeElapse >= TextUpdateSpeed && RemainTextToShow.length > 0)
    {
        TimeElapse = 0;
        CurrentString = CurrentString.concat(RemainTextToShow.charAt(0));
        RemainTextToShow = RemainTextToShow.slice(1);
        TextDialogue.setText(CurrentString);
    }
};

dialogueWindow.prototype.NextMessage = function() 
{
    CurrentString = "";
    CurrentJSONIndex += 1;

    if (!DialogueDataJSON[CurrentJSONIndex])
        return;
    
    var nextText = DialogueDataJSON[CurrentJSONIndex].m;
    
    if (nextText)
    {
        RemainTextToShow = nextText;
        return;
    }

    nextText = DialogueDataJSON[CurrentJSONIndex].question;

    if (nextText)
    {
        RemainTextToShow = nextText
        return;
    }

    RemainTextToShow = "";
}

// dialogueWindow.prototype.testFunc = function() 
// {
//     console.log('carl');
// }
