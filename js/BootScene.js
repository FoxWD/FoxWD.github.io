/*
 * 
 * BootScene
 *
 */
class BootScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootScene'
        })
    }

    resize() {
        let canvas = this.cache.game.canvas;
    
        let width = window.innerWidth;
        let height = window.innerHeight;
    
        let wratio = width / height;
        let ratio = canvas.width / canvas.height;
    
        if (wratio < ratio) {
            canvas.style.width = width + 'px';
            canvas.style.height = (width / ratio) + 'px';
        } else {
            canvas.style.width = (height * ratio) + "px";
            canvas.style.height = height + "px";
        }
    }

    preload() {
        this.load.image('background', 'asset/background.png');
        this.load.image('racket', 'asset/racket.png');
        this.load.image('ball', 'asset/ball.png');
    };

    create() {
        console.log("Booting game!");

        window.addEventListener('resize', evt => this.resize());
        this.resize();

        let background = this.add.image(0, 0, 'background');
        background.setOrigin(0,0);
        background.setScale(2);

        this.input.keyboard.on('keydown-ESC', (evt) => {
            console.log('esc');
            this.scene.stop('ServeScene');
            this.scene.stop('PlayScene');
            this.scene.start('BootScene');
        });

        this.scene.launch('TitleScene');
    };
}

export default BootScene;