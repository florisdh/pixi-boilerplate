import * as PIXI from "pixi.js";
import {SceneManager} from "pixi-scenes";
import Splash from "./scenes/Splash";
import Boot from "./scenes/Boot";
import Menu from "./scenes/Menu";
import Gameplay from "./scenes/Gameplay";

window.onload = () => {
    const content: HTMLDivElement = <HTMLDivElement>document.getElementById('content');
    if (!content) {
        throw new Error('Could not find div named content in document!');
    }

    const app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x1099bb,
        resolution: window.devicePixelRatio || 1,
    });
    content.appendChild(app.view);
    
    const scenes: SceneManager = new SceneManager(app);
    scenes.add('boot', new Boot());
    scenes.add('splash', new Splash());
    scenes.add('menu', new Menu());
    scenes.add('gameplay', new Gameplay());
    scenes.start('boot');
};
