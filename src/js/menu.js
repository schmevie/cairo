var menu_state = {  
    create: function() 
    {
        game.stage.backgroundColor = "#000000";
        BackgroundImage = game.add.sprite(0, 0, 'MainMenuBackground');
        BackgroundImage.alpha = 0;
        game.add.tween(BackgroundImage).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);

        FontStyle = { font: "30px Helvetica", fill: "#ffffff" };
        
        BackgroundMusic = game.add.audio('MainMenuMusic');
        BackgroundMusic.loopFull();

        //Create start help text
        var startText = game.add.text(0, 0, "Press Any Key to Start", FontStyle);
        startText.alignIn(BackgroundImage, Phaser.BOTTOM_CENTER, 0, -100);
        startText.alpha = 0;
        game.add.tween(startText).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 1, 1000, true); //Fade start text in and out

        //call start function on any key
        game.input.keyboard.onPressCallback = this.start;
    },

    // Start the actual game
    start: function() 
    {
        //set back to null
        game.input.keyboard.onPressCallback = null;
        game.state.start('play');
    }
};