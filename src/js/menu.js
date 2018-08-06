var menu_state = {  
    create: function() 
    {


        ImageBackground = game.add.sprite(0, 0, 'MainMenuBackground');
        AudioBackgroundMusic = game.add.audio('MainMenuMusic');
        TextStart = game.add.text(0, 0, "Press Any Key to Start", FontStyle);

        game.input.keyboard.onPressCallback = this.start;//call start function on any key        
        game.stage.backgroundColor = "#000000";

        FadeInImage(ImageBackground);
        AudioBackgroundMusic.loopFull();

        TextStart.alignIn(ImageBackground, Phaser.BOTTOM_CENTER, 0, -100);
        TextStart.alpha = 0;
        TweenStartText = game.add.tween(TextStart).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 1, 1000, true); //Fade start text in and out

        StartDustParticle()
    },

    // Start the actual game
    start: function() 
    {
        //set back to null
        game.input.keyboard.onPressCallback = null;
        AudioBackgroundMusic.fadeOut(2000);
        
        TweenStartText.stop();
        game.add.tween(TextStart).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, 1);
        //game.time.events.add(2000, beginGame);
        
        var tweenBackgroundFade = game.add.tween(ImageBackground).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, false, 1);
        tweenBackgroundFade.onComplete.add(function() { game.state.start('play'); });
        tweenBackgroundFade.start();
    }  
};