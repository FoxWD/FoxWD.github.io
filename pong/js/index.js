
import BootScene from './BootScene.js';
import PlayScene from './PlayScene.js';
import ServeScene from './ServeScene.js';
import TitleScene from './TitleScene.js';

//Création d'une scène nommée "Game"
// let gameScene = new Phaser.Scene('Game');

//Configuration du jeu
let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    physics: {
        default: 'arcade',
        gravity: {
            x: 0,
            y: 0
        },
        debug: true
    },
    scene: [
        BootScene,
        TitleScene,
        ServeScene,
        PlayScene
    ]
};

//Création du jeu avec la "config"
let game = new Phaser.Game(config);

// // précharge les données
// gameScene.preload = function () {
//     this.load.image('background', 'asset/background.png');
//     this.load.image('racket', 'asset/racket.png');

// };

// gameScene.create = function () {

//     let background = this.add.image(0, 0, 'background');
//     background.setOrigin(0, 0);
//     background.setScale(1);

//     player = this.physics.add.sprite(20, this.game.config.height / 2, 'racket');
//     // player.setOrigin(10,10);
//     //
//     player.setCollideWorldBounds(true);

//     this.anims.create({
//         key: 'up',
//         duration: 100
//     });

//     this.anims.create({
//         key: 'down',
//         duration: 100
//     });

//     cursors = this.input.keyboard.createCursorKeys();

// };

// gameScene.update = function () {

//     if (cursors.up.isDown) {
//         player.setVelocityX(-160);

//         player.anims.play('up', true);
//     }
//     else if (cursors.down.isDown) {
//         player.setVelocityX(160);

//         player.anims.play('down', true);
//     }
//     else {
//         player.setVelocityX(0);
//     }

//     // if (cursors.up.isDown && player.body.touching.down)
//     // {
//     //     player.setVelocityY(-330);
//     // }
// };