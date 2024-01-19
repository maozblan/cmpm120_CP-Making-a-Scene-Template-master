class Play extends Phaser.Scene {
    constructor() {
        super('playScene')  // name up to you but must always be a string
        console.log('Play: constructor')
    }

    init(stats) {   // parameter doesn't matter, just to graph objects when starting this scene
        console.log('Play: init')
        this.HP = stats.HP
        this.EXP = stats.EXP

    }

    create() {
        console.log('Play: create')
        console.log(`HP: ${this.HP}, EXP: ${this.EXP}`)
    }
}
