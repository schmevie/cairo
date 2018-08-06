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
        startText = game.add.text(0, 0, "Press Any Key to Start", FontStyle);
        startText.alignIn(BackgroundImage, Phaser.BOTTOM_CENTER, 0, -100);
        startText.alpha = 0;
        tweenStartText = game.add.tween(startText).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 1, 1000, true); //Fade start text in and out

        //call start function on any key
        game.input.keyboard.onPressCallback = this.start;


        emitter = game.add.emitter(game.world.centerX, 100, 100);
        emitter.makeParticles('Image_Dust');
        emitter.setRotation(0, 0);
        emitter.setAlpha(0.01, 0.3);
        emitter.width = 1280;
        emitter.height = 720;
        emitter.maxParticleScale = 0.05;
        emitter.minParticleScale = 0.01;
        emitter.gravity = 0;
        emitter.start(false, 5000, 10);function update() {emitter.forEachAlive(function(p){ p.alpha = p.lifespan / emitter.lifespan; });}
    },

    // Start the actual game
    start: function() 
    {
        //set back to null
        game.input.keyboard.onPressCallback = null;
        BackgroundMusic.fadeOut(2000);
        
        tweenStartText.stop();
        game.add.tween(startText).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, 1);
        //game.time.events.add(2000, beginGame);
        
        tweenBackgroundFade = game.add.tween(BackgroundImage).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, false, 1);
        tweenBackgroundFade.onComplete.add(function() { game.state.start('play'); });
        tweenBackgroundFade.start();
    },

    beginGame: function() 
    {
        
    }
};