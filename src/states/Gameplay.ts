import * as PIXI from "pixi.js";
import {Scene} from "pixi-scenes";
import Loader from "../utils/Loader";

export default class Gameplay extends Scene {

    private bunnies: PIXI.Container;

    public init(): void {

        // Setup container for bunnies
        this.bunnies = new PIXI.Container();
        this.addChild(this.bunnies);

        // Create a 5x5 grid of bunnies
        for (let i = 0; i < 25; i++) {
            const bunny = new PIXI.Sprite(Loader.getAsset('game', 'bunny').texture);
            bunny.anchor.set(0.5);
            bunny.x = (i % 5) * 40;
            bunny.y = Math.floor(i / 5) * 40;
            this.bunnies.addChild(bunny);
        }

        // Move container to the center
        this.bunnies.x = this.app.screen.width / 2;
        this.bunnies.y = this.app.screen.height / 2;

        // Center bunny sprite in local container coordinates
        this.bunnies.pivot.x = this.bunnies.width / 2;
        this.bunnies.pivot.y = this.bunnies.height / 2;
    }

    public update(delta: number): void {
        this.bunnies.rotation -= 0.0005 * delta;
    }
}
