// Code Practice: Making a Scene
// Name: Lyssa Li
// Date: 2024 Jan 17

"use strict"    // safeguard to ask js to be a bit stricter and give better errors

let config = {
    type: Phaser.AUTO,
    scene: [ MainMenu, Play ]
}

let game = new Phaser.Game(config)