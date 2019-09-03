import {Scene} from "pixi-scenes";
import Button from "../objects/Button";

export default class Menu extends Scene {

    private startButton: Button;

    public init(): void {
        this.startButton = new Button(this.app, 'START');
        this.startButton.x = this.app.screen.width / 2;
        this.startButton.y = this.app.screen.height / 2;
        this.startButton.on('click', this.startGame.bind(this));
        this.addChild(this.startButton);
    }

    private startGame(): void {
        this.scenes.start('gameplay');
    }
}
