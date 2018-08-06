// Initialize Phaser
var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game_div');

// Define all the states
game.state.add('load', load_state);
game.state.add('menu', menu_state);
game.state.add('play', play_state);

// Start with the 'load' state
game.state.start('load');

FontStyle = { font: "30px Helvetica", fill: "#ffffff" };

function FadeInImage(Image)
{
	 Image.alpha = 0;
     game.add.tween(Image).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
}

function StartDustParticle()
{
        var emitter = game.add.emitter(game.world.centerX, 100, 100);
        emitter.makeParticles('Image_Dust');
        emitter.setRotation(0, 0);
        emitter.setAlpha(0.01, 0.3);
        emitter.width = 1280;
        emitter.height = 720;
        emitter.maxParticleScale = 0.07;
        emitter.minParticleScale = 0.01;
        emitter.gravity = 0;
        emitter.start(false, 5000, 10);function update() {emitter.forEachAlive(function(p){ p.alpha = p.lifespan / emitter.lifespan; });}
}