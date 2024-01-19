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
