/*
 * 
 * TitleScene
 * 
 */
class TitleScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TitleScene'
        });
    };
    // précharge les données
    preload() {

    };

    create() {
        console.log('TitleScene');

        // Création des éléments textes
        this.titleText = this.add.text(0, 0, 'PONG', {
            font: '128px Courier',
            fill: '#FFF'
        });

        this.select1JText = this.add.text(0, 0, '1 JOUEUR', {
            font: '32px Courier',
            fill: '#FFF'
        });
        this.select2JText = this.add.text(0, 0, '2 JOUEUR', {
            font: '32px Courier',
            fill: '#FFF'
        });

        this.text2 = this.add.text(0, 0, 'PRESS ENTER', {
            font: '32px Courier',
            fill: '#FFF'
        });

        this.score1Text = this.add.text(0, 0, '0', {
            font: '64px Courier strong',
            fill: '#FFF'
        });

        this.score2Text = this.add.text(0, 0, '0', {
            font: '64px Courier strong',
            fill: '#FFF'
        });

        // Positionnement des textes
        this.titleText.x = this.game.config.width / 2 - this.titleText.width / 2;
        this.titleText.y = this.game.config.height / 3 - this.titleText.height / 2;
        this.select1JText.x = this.game.config.width / 2 - this.select1JText.width / 2;
        this.select1JText.y = this.game.config.height / 2 - this.select1JText.height / 2;
        this.select2JText.x = this.game.config.width / 2 - this.select2JText.width / 2;
        this.select2JText.y = this.game.config.height / 1.8 - this.select2JText.height / 2;
        this.text2.x = this.game.config.width / 2 - this.text2.width / 2;
        this.text2.y = this.game.config.height / 1.5 - this.text2.height / 2;
        this.score1Text.y = this.score2Text.y = 30;
        this.score1Text.x = (this.game.config.width / 4) - this.score1Text.width;
        this.score2Text.x = (this.game.config.width / 2) + 200 + this.score2Text.width;

        // Création du sélecteur
        let selectBar = this.add.graphics();
        selectBar.fillStyle(0xFFFFFF, 0.2);
        selectBar.fillRect(this.game.config.width / 2, 10, 10, 10);

        this.input.keyboard.on('keydown-ENTER', (evt) => {
            console.log('keyboard');
            this.scene.start('ServeScene', {
                score1: 0,
                score2: 0,
                servingPlayer: 1
            });
        });
        ;
    }
};

export default TitleScene;