var menu_state = {  
    create: function() 
    {
        var background = game.add.sprite(0, 0, 'MainMenuBackground');
        // Call the 'start' function when pressing the spacebar
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.start, this); 

        
        var style = { font: "30px Helvetica", fill: "#ffffff" };
        //game.add.text(200, 210, "Cairo", style);

        //Create start help text
        var startText = game.add.text(0, 0, "Press Spacebar to Start", style);
        startText.alignIn(background, Phaser.BOTTOM_CENTER, 0, -100);
    },

    // Start the actual game
    start: function() 
    {
        this.game.state.start('play');
    }
};