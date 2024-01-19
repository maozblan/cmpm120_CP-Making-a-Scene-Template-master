class Play extends Phaser.Scene {
    constructor() {
        super('playScene')  // name up to you but must always be a string
        console.log('Play: constructor')
    }

    init(stats) {   // parameter name doesn't matter, just to graph objects when starting this scene
        console.log('Play: init')
        this.HP = stats.HP
        this.EXP = stats.EXP

    }

    create() {
        console.log('Play: create')
        console.log(`HP: ${this.HP}, EXP: ${this.EXP}`)

        // you can add scenes outside of the setup in main
        this.scene.add('statsoverlayScene', StatsOverlay, false)    // we don't want it to autostart
        // to start a concurrent scene
        this.scene.launch('statsoverlayScene')
    
        // default, asset origins are set to the center
        this.add.image(0, 0, 'tomato').setOrigin(0).setScale(10, 5)
        // image origins are 0 to 1 relative to the image (left side is 0 and the right side is 1)
        // images only allow rotation and scaling, we usually add sprites
        // static things are great images, ex. backgrounds

        this.tomato = this.add.sprite(150, 350, 'tomato').setScale(5)
        // you can bind sprites and change things :D
    }
    
    update() {
        //console.log('Play: update')
        this.tomato.angle++
    }
}
