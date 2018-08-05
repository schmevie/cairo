var load_state = {  
    preload: function() { 
        this.game.stage.backgroundColor = '#F9F7F3';

        //Main Menu Files
        game.load.image('MainMenuBackground', 'assets/img/Placeholder_Background.png');
        game.load.audio('MainMenuMusic', 'assets/audio/Placeholder_MainMenuMusic.ogg');

        game.load.image('dialogue-bg', 'assets/img/dialogue-bg.png');
        game.load.image('child', 'assets/img/block-player.png');
        game.load.json('dialogue', 'assets/json/dialogue.json');
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};