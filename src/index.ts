import * as Phaser from "phaser";

import { SimpleScene } from "./scenes/simple-scene";

const gameConfig: Phaser.Types.Core.gameConfig = {
  title: 'A game',
  type: Phaser.AUTO,
  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  scene: SimpleScene,
}

new Phaser.Game(gameConfig);
