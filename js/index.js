/**
 * 
 * InitGame
 * 
 */
import BootScene from './BootScene.js';
import PlayScene2 from './PlayScene2J.js';
import ServeScene from './ServeScene.js';
import TitleScene from './TitleScene.js';

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
        PlayScene2
    ]
};

//Création du jeu avec la "config"
let game = new Phaser.Game(config);