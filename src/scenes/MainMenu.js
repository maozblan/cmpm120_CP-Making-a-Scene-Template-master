class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainmenuScene')
        console.log('MainMenu: constructor')
    }

    init() {
        console.log('MainMenu: init')
        this.HP = 100
        this.EXP = 0
        console.log(`HP: ${this.HP}, EXP: ${this.EXP}`)
    }

    preload() {
        // assets that are preloaded are accessable by all the scenes
        // all scenes share the same asset cache
        console.log('MainMenu: preload')
        // if path is wrong, it will be a green box with a slash through it
        this.load.path = './assets/img/'    // helps you not type the path name 500 times
        this.load.image('tomato', 'tomato.png') // we can also put the full path here
    }

    create() {
        console.log('MainMenu: create')

        // you can pack data into obj and pass it from scene to scene
        // we don't want to pollute the namespace
        let playerStats = {
            HP: this.HP,
            EXP: this.EXP
        }

        this.scene.start('playScene', playerStats)   // lowercase scene!
    }
}
