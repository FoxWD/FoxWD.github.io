/*
 * ServeScene
 * 
 * Author: Colton Ogden
 * cogden@cs50.harvard.edu
 */

// let 
//     player1,
//     player2,
//     ball;

class ServeScene extends Phaser.Scene {


    constructor(test) {
        super({
            key: 'ServeScene'
        });
        this.player1;
        this.player2;
        this.ball;
    };

    init(data) {
        this.score1 = data.score1;
        this.score2 = data.score2;
        this.servingPlayer = data.servingPlayer;
    };

    // précharge les données
    preload() {
    };

    create() {
        console.log('ServeScene');

        //Mise en place du texte d'affichage
        this.score1Text = this.add.text(0, 0, `${this.score1}`, {
            font: '64px Courier strong',
            fill: '#FFF'
        });

        this.score2Text = this.add.text(0, 0, `${this.score2}`, {
            font: '64px Courier strong',
            fill: '#FFF'
        });

        this.text = this.add.text(0, 0, `Press Space to Serve, Player ${this.servingPlayer}!`, {
            font: '32px Courier',
            fill: '#FFF'
        });

        this.text.x = this.game.config.width / 2 - this.text.width / 2;
        this.text.y = this.game.config.height / 1.5 - this.text.height / 2;

        this.score1Text.y = this.score2Text.y = 30;
        this.score1Text.x = (this.game.config.width / 4) - this.score1Text.width;
        this.score2Text.x = (this.game.config.width / 2) + 200 + this.score2Text.width;

        //Mise en place du joueur1
        this.player1 = this.physics.add.sprite(20, this.game.config.height / 2, 'racket');
        this.player1.setCollideWorldBounds(true);
        console.log('player1',this.player1);

        // Mise en place du joueur2
        this.player2  = this.physics.add.sprite(this.game.config.width - 30, this.game.config.height / 2, 'racket');
        this.player2.setCollideWorldBounds(true);
        console.log('player2',this.player2);

        //Mise en place de la balle
        this.ball = this.physics.add.sprite(35, this.game.config.height / 2 - 5, 'ball');
        this.ball.setCollideWorldBounds(true);

        //Evenement du service
        this.input.keyboard.on('keydown-SPACE', (event) => {
            let ballYVelocity = Phaser.Math.Between(-50, 50);
            this.scene.start('PlayScene', {
                score1: this.score1,
                score2: this.score2,
                ball: this.ball,
                ballXVelocity: this.servingPlayer == 1 ? 500 : -500,
                ballYVelocity: Phaser.Math.Between(-500, 500),
                player1: this.player1,
                player2: this.player2
            });
        });
    };

    update() {

        let cursors = this.input.keyboard.addKeys({
            up: 'up',
            down: 'down',
            shift: 'shift',
            ctrl: 'ctrl'
        });

        //Gestion du déplacment joueur1 
        if (cursors.up.isDown) {
            this.player1.setVelocityY(-500);
            this.ball.y = this.player1.y;
        }
        else if (cursors.down.isDown) {
            this.player1.setVelocityY(500);
            this.ball.y = this.player1.y;
        }
        else {
            this.player1.setVelocityY(0);
        };

        // Gestion du déplacment joueur2
        if (cursors.shift.isDown) {
            this.player2.setVelocityY(-500);
            this.ball.y = this.player2.y;
        }
        else if (cursors.ctrl.isDown) {
            this.player2.setVelocityY(500);
            this.ball.y = this.player2.y;
        }
        else {
            this.player2.setVelocityY(0);
        };

        
    };
};

export default ServeScene;