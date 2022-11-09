/*
 *
 * PlayScene
 * 
 */
class PlayScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'PlayScene'
        });

    }

    init(data) {
        this.score1 = data.score1;
        this.score2 = data.score2;
        this.servingPlayer = data.servingPlayer;
        this.player1 = data.player1;
        this.player2 = data.player2;
        // this.players = {this.player1, this.player2};
        this.ball = data.ball;
        this.ballXVelocity = data.ballXVelocity;
        this.ballYVelocity = data.ballYVelocity;
    }

    create() {
        console.log('PlayScene');
        console.log('score J1',this.score1);
        console.log('score J2',this.score2);

        // Misse en place des joueurs
        this.player1 = this.physics.add.sprite(this.player1.x, this.player1.y, 'racket');
        this.player1.setCollideWorldBounds(true);
        this.player1.setImmovable();

        // Mise en place du joueur2
        this.player2 = this.physics.add.sprite(this.player2.x, this.player2.y, 'racket');
        this.player2.setCollideWorldBounds(true);
        this.player2.setImmovable();

        // Mise en place de la balle
        this.ball = this.physics.add.sprite(this.ball.x, this.ball.y, 'ball');
        this.ball.setVelocityX(this.ballXVelocity);
        this.ball.setVelocityY(this.ballYVelocity);
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1, 1);

        this.physics.add.collider(this.player1, this.ball);
        this.physics.add.collider(this.player2, this.ball);


        //Mise en place du text d'affichage
        this.score1Text = this.add.text(0, 0, `${this.score1}`, {
            font: '64px Courier strong',
            fill: '#FFF',
            fontStyle: 'strong'
        });

        this.score2Text = this.add.text(0, 0, `${this.score2}`, {
            font: '64px Courier strong',
            fill: '#FFF',
            fontStyle: 'strong'
        });
        this.score1Text.y = this.score2Text.y = 30;
        this.score1Text.x = (this.game.config.width / 4) - this.score1Text.width;
        this.score2Text.x = (this.game.config.width / 2) + 200 + this.score2Text.width;

        // Gestion des buts
        this.ball.body.onWorldBounds = true;

        this.physics.world.on('worldbounds', (ball, top, down, right, left) => {

            if(right) {
                // console.log('right',right);
                this.servingPlayer = 2;
                this.score2++;
                this.scene.start('ServeScene', {
                    score1: this.score1,
                    score2: this.score2,
                    servingPlayer: this.servingPlayer
                });
            }
            else if(left)
            {
                // console.log('left', left);
                this.servingPlayer = 1;
                this.score1++;
                this.scene.start('ServeScene', {
                    score1: this.score1,
                    score2: this.score2,
                    servingPlayer: this.servingPlayer
                });
            }
            else
            {
                
                this.ball.setBounce(1, 1);
            };
        });

    };

    update() {

        let cursors = this.input.keyboard.addKeys({
            up: 'up',
            down: 'down',
            shift: 'shift',
            ctrl: 'ctrl'
        });

        //Gestion du déplacement joueur1
        if (cursors.up.isDown) {
            this.player1.setVelocityY(-500);

        }
        else if (cursors.down.isDown) {
            this.player1.setVelocityY(500);

        }
        else {
            this.player1.setVelocityY(0);

        };

        // Gestion du déplacment joueur2
        if (cursors.shift.isDown) {
            this.player2.setVelocityY(-500);

        }
        else if (cursors.ctrl.isDown) {
            this.player2.setVelocityY(500);

        }
        else {
            this.player2.setVelocityY(0);

        };

        //gestion des buts



        // if () {
        //     console.log('BUT');
        //     this.servingPlayer = 1;
        //     this.score1Text++;
        //     this.scene.start('ServeScene', {
        //         score1Text: this.score1Text,
        //         score2Text: this.score2Text,
        //         servingPlayer: 1
        //     });

        // }

    };

};

export default PlayScene;