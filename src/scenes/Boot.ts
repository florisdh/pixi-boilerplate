import {Scene} from "pixi-scenes";
import Loader from "../utils/Loader";

export default class Boot extends Scene {

    public init(): void {
        // Possibly show a loading splash indicator

        // Load all of your assets here needed for the splash
        Loader.loadBatch('splash', {
            'icon': 'assets/images/splash.png'
        }).once('complete', this.startSplash.bind(this));
    }

    private startSplash(): void {
        this.scenes.start('splash');
    }
}
