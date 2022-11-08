/*
 * TitleScene
 * 
 * Author: Colton Ogden
 * cogden@cs50.harvard.edu
 */

class TitleScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TitleScene'
        });
    };
    // précharge les données
    preload () {

    };
    
    create() {
        console.log('TitleScene');

        this.text = this.add.text(0, 0, 'PONG', {
            font: '128px Courier',
            fill: '#FFF'
        });

        this.text2 = this.add.text(0, 0, 'PRESS ENTER',{
            font: '32px Courier',
            fill: '#FFF'
        });

        this.text.x = this.game.config.width / 2 - this.text.width / 2;
        this.text.y = this.game.config.height / 2.2 - this.text.height / 2;
        this.text2.x = this.game.config.width / 2 - this.text2.width / 2;
        this.text2.y = this.game.config.height / 1.5 - this.text2.height / 2;

        this.score1Text = this.add.text(0, 0, '0', {
            font: '64px Courier strong',
            fill: '#FFF'
        });

        this.score2Text = this.add.text(0, 0, '0', {
            font: '64px Courier strong',
            fill: '#FFF'
        });

        this.score1Text.y = this.score2Text.y = 30;
        this.score1Text.x = (this.game.config.width  / 4) - this.score1Text.width;
        this.score2Text.x = (this.game.config.width / 2) + 200 + this.score2Text.width;

        this.input.keyboard.on('keydown-ENTER', (evt) => {
            console.log('keyboard');
            this.scene.start('ServeScene' ,{
                score1: 0,
                score2: 0,   
                servingPlayer: 1
            });
        });
    ;}
};

export default TitleScene;