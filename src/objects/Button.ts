import * as PIXI from "pixi.js";

export default class Button extends PIXI.Container {

    private background: PIXI.Sprite;
    private text: PIXI.Text;

    constructor(app: PIXI.Application, text: string) {
        super();
        this.interactive = true;

        // Generate background
        const graphics: PIXI.Graphics = new PIXI.Graphics();
        graphics.beginFill(0xffffff);
        graphics.drawRoundedRect(0, 0, 180, 60, 20);
        graphics.endFill();
        this.background = new PIXI.Sprite(app.renderer.generateTexture(graphics, PIXI.SCALE_MODES.LINEAR, 1));
        this.background.anchor.set(0.5);

        this.text = new PIXI.Text(text, {
            fontSize: 20,
            fontFamily: 'Open Sans'
        });
        this.text.anchor.set(0.5);

        this.addChild(this.background);
        this.addChild(this.text);
    }
}
