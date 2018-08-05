var menu_state = {  
    create: function() 
    {
        game.stage.backgroundColor = "#000000";
        var background = game.add.sprite(0, 0, 'MainMenuBackground');
        background.alpha = 0;
        game.add.tween(background).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);

        var style = { font: "30px Helvetica", fill: "#ffffff" };
        
        music = game.add.audio('MainMenuMusic');
        music.play();

        //game.add.text(200, 210, "Cairo", style);

        //Create start help text
        var startText = game.add.text(0, 0, "Press Spacebar to Start", style);
        startText.alignIn(background, Phaser.BOTTOM_CENTER, 0, -100);
        startText.alpha = 0;

        game.add.tween(startText).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 1, 1000, true);

        // Call the 'start' function when pressing the spacebar
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.start, this); 

    },

    // Start the actual game
    start: function() 
    {
        this.game.state.start('play');
    }
};