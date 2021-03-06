import * as Phaser from 'phaser';

export class SimpleScene extends Phaser.Scene {
  private load: Phaser.Scene.load;
  private add: Phaser.Scene.add;
  preload() {
    this.load.image("cokecan", "assets/cokecan.png");
  }

  create() {
    this.add.text(100, 100, "Hello Phaser!", { fill: "#0f0" });
    this.add.image(100, 200, "cokecan");
  }
}
