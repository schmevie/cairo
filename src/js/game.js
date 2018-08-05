// Initialize Phaser
var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game_div');

// Define all the states
game.state.add('load', load_state);
game.state.add('menu', menu_state);
game.state.add('play', play_state);

// Start with the 'load' state
game.state.start('load');
