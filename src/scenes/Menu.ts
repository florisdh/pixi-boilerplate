import {Scene} from "pixi-scenes";
import Button from "../objects/Button";
import IScene from "./IScene";
import Loader from "../utils/Loader";

export default class Menu extends Scene implements IScene {

    private startButton: Button;

    public init(): void {
        this.startButton = new Button(this.app, 'START');
        this.startButton.on('click', this.startGame.bind(this));
        this.addChild(this.startButton);

        // Play music
        Loader.getAsset('game', 'music').sound.play({
            loop: true,
            singleInstance: true
        });
    }

    public start(): void {
        this.resize();
    }

    private startGame(): void {
        this.scenes.start('gameplay');
    }

    public resize(): void {
        this.startButton.x = this.app.screen.width / 2;
        this.startButton.y = this.app.screen.height / 2;
    }
}
