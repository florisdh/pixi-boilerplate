import * as PIXI from "pixi.js";
import {Scene} from "pixi-scenes";
import Loader from "../utils/Loader";
import LoadIndicator from "../objects/LoadIndicator";
import IScene from "./IScene";

export default class Splash extends Scene implements IScene {

    /**
     * Minimal time in ms that the splash should be shown if loading goes too fast.
     */
    private static MIN_LOADING_TIME: number = 1000;

    private loader: PIXI.Loader;
    private icon: PIXI.Sprite;
    private loadIndicator: LoadIndicator;
    private currentTime: number;

    public init(): void {
        // Start loading game assets
        this.loader = Loader.loadBatch('game', {
            bunny: 'assets/images/bunny.png'
        });
        this.loader.on("progress", this.updateStatus.bind(this));

        this.icon = new PIXI.Sprite(Loader.getAsset('splash', 'icon').texture);
        this.icon.anchor.set(0.5);
        this.addChild(this.icon);

        this.loadIndicator = new LoadIndicator();
        this.loadIndicator.anchor.set(0.5);
        this.loadIndicator.on("finished", this.checkComplete.bind(this));
        this.addChild(this.loadIndicator);
    }

    public start() {
        this.currentTime = 0;
        this.loadIndicator.reset();
        this.updateStatus();
        this.resize();
    }

    public resize(): void {
        this.icon.x = this.app.screen.width / 2;
        this.icon.y = this.app.screen.height / 2;
        this.loadIndicator.x = this.icon.x;
        this.loadIndicator.y = this.icon.y + this.icon.height * 0.8;
    }

    public update(delta: number): void {
        this.loadIndicator.update(delta);

        // Show the splash for a minimumtime if loading is done
        if (this.currentTime < Splash.MIN_LOADING_TIME) {
            this.currentTime += delta;
            this.checkComplete();
        }
    }

    private updateStatus(): void {
        this.loadIndicator.progress = this.loader.progress;
    }

    private checkComplete(): void {
        if (this.currentTime >= Splash.MIN_LOADING_TIME && this.loadIndicator.completed && this.loadIndicator.progress === 100) {
            this.openMenu();
        }
    }

    private openMenu(): void {
        this.scenes.start('menu');
    }
}
