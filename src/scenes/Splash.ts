import * as PIXI from "pixi.js";
import {Scene} from "pixi-scenes";
import Loader from "../utils/Loader";
import * as WebFont from 'webfontloader';
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

        WebFont.load({
            google: {
                families: ['Open Sans']
            }
        });

        const assets: any = {
            bunny: 'assets/images/bunny.png',
            music: 'assets/sounds/music.{ogg,mp3}'            
        };

        // Start loading game assets
        this.loader = Loader.loadBatch('game', assets);
        this.loader.on("progress", this.updateStatus.bind(this, null));
        this.loader.on("complete", this.updateStatus.bind(this, 100));

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

    private updateStatus(progress?: number): void {
        this.loadIndicator.progress = progress || this.loader.progress;
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
